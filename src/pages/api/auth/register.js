import jwtDecode from 'jwt-decode';

import dbConnect from '../../../db/connect'
import User from '../../../db/models/User'
import { createToken, hashPassword } from '../../../utils/api/auth'
import { cookies, cors, csurfProtection, runMiddleware } from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  await runMiddleware(req, res, cors)
  await runMiddleware(req, res, csurfProtection)
  await dbConnect()

  try {
    const { email, firstName, lastName } = req.body;

    const hashedPassword = await hashPassword(
      req.body.password
    );

    const userData = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      password: hashedPassword,
      role: 'user'
    };

    const existingEmail = await User.findOne({
      email: userData.email
    }).lean();

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: 'Email already exists' });
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const {
        firstName,
        lastName,
        email,
        role
      } = savedUser;

      const userInfo = {
        firstName,
        lastName,
        email,
        role
      };

      res.cookie('token', token, {
        httpOnly: true,
        path: '/'
      })

      return res.json({
        message: 'User created!',
        token,
        userInfo,
        expiresAt
      });
    } else {
      return res.status(400).json({
        message: 'There was a problem creating your account'
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: 'There was a problem creating your account'
    });
  }
}

export default cookies(handler)
