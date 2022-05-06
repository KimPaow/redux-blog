const jwtDecode = require('jwt-decode');
const User = require('../../models/User');
const mongoose = require('mongoose');

const {
  createToken,
  hashPassword,
} = require('../../utils/api/auth');

const handler = async (req, res) => {
  try {
    console.log('req body:', req.body)
    const { email, firstName, lastName } = req.body;

    const hashedPassword = await hashPassword(
      req.body.password
    );

    const userData = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      password: hashedPassword,
      role: 'admin'
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

export default handler

async function connect() {
  try {
    console.log('process.env.ATLAS_URL', process.env.ATLAS_URL);
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.ATLAS_URL, {});
  } catch (err) {
    console.log('Mongoose error', err);
  }
}

connect();
