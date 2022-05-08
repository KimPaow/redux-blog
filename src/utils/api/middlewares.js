import { expressjwt } from 'express-jwt'
import jwtDecode from 'jwt-decode'
import Cors from 'cors'
import { serialize } from 'cookie'
import csurf from 'csurf'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://reduxblog.bjorkman.kim'

export const cors = Cors({
  origin: baseUrl
})

/**
 * Verifies the JWT token
 */
export const requireAuth = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  issuer: 'reduxblog.bjorkman.kim',
  audience: 'reduxblog.bjorkman.kim',
  getToken: req => {
    console.log('requireAuth getToken req.cookies: ', req.cookies)
    return req.cookies.token
  }
});

/**
 * Enforces that the request comes from an admin. 
 * Use after the attachUser() middleware
 */
export const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request'
    });
  }

  const { role } = req.user;
  if (role !== 'admin') {
    return res
      .status(401)
      .json({ message: 'Insufficient role' });
  }
  next();
}

/**
 * Looks for a JWT token and attaches the decoded data to the request object
 */
export const attachUser = (req, res, next) => {
  console.log('attachUser req.cookies:', req.cookies)
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'Authentication Invalid' })
  }

  const decodedToken = jwtDecode(token)

  if (!decodedToken) {
    return res.status(401).json({ message: 'There was a problem authorizing the request' })
  } else {
    req.user = decodedToken
    next()
  }
}

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, name, value, options = {}) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
export const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options)

  return handler(req, res)
}

export const csurfProtection = csurf({ cookie: true })

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}