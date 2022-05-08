import { expressjwt } from 'express-jwt'
import Cors from 'cors'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://reduxblog.bjorkman.kim'

export const cors = Cors({
  origin: baseUrl
})

export const requireAuth = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"]
});

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