import { cookies, csurfProtection, runMiddleware } from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  await runMiddleware(req, res, csurfProtection)
  res.json({ csrfToken: req.csrfToken() })
}

export default cookies(handler)