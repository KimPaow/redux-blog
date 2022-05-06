const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = user => {
  // Sign the JWT
  if (!user.role) {
    throw new Error('No user role specified');
  }
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      role: user.role,
      iss: 'api.orbit',
      aud: 'api.orbit'
    },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    // Salting is simply the addition of a unique, random string of characters known only to the site 
    // ... to each password before it is hashed, typically this “salt” is placed in front of each password.
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      // Hashing is the act of converting passwords into unreadable strings of 
      // ... characters that are designed to be impossible to convert back.
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (
  passwordAttempt,
  hashedPassword
) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request'
    });
  }
  if (req.user.role !== 'admin') {
    return res
      .status(401)
      .json({ message: 'Insufficient role' });
  }
  next();
};

module.exports = {
  createToken,
  hashPassword,
  verifyPassword,
  requireAdmin
};