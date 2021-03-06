import jwtDecode from 'jwt-decode'
import sanitize from 'mongo-sanitize'

import dbConnect from '../../../db/connect'
import User from '../../../db/models/User'
import { createToken, verifyPassword } from '../../../utils/api/auth'
import { cookies, cors, runMiddleware } from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  await runMiddleware(req, res, cors)
  await dbConnect()

  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: sanitize(email)
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

      res.cookie('token', token, {
        httpOnly: true,
        path: '/',
        sameSite: true,
        secure: true,
      })

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
    return res
      .status(400)
      .json({ message: 'Something went wrong.' });
  }
}

export default cookies(handler)