import jwtDecode from 'jwt-decode';

import dbConnect from '../../../db/connect'
import User from '../../../db/models/User'
import { createToken, verifyPassword } from '../../../utils/api/auth'

const handler = async (req, res) => {
  await dbConnect()

  try {
    const { email, password } = req.body;

    console.log('req.body:', req.body)
    const user = await User.findOne({
      email
    }).lean();

    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.'
      });
    }

    const passwordValid = await verifyPassword(
      password,
      user.password
    );

    if (passwordValid) {
      // eslint-disable-next-line no-unused-vars
      const { password, bio, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.'
      });
    }
  } catch (err) {
    console.log('err:', err)
    return res
      .status(400)
      .json({ message: 'Something went wrong.' });
  }
}

export default handler