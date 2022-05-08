import { cookies } from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  res.json({ csrfToken: req.csrfToken })
}

export default cookies(handler)