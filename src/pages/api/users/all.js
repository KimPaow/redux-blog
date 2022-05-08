
import dbConnect from '../../../db/connect'
import User from '../../../db/models/User'
import { runMiddleware, cors, requireAuth } from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Only GET requests are allowed' })
  }

  await runMiddleware(req, res, cors)
  await runMiddleware(req, res, requireAuth)
  await dbConnect()

  try {
    const users = await User.find()
      .lean()
      .select('_id firstName lastName avatar bio');

    res.json({
      users
    });
  } catch (err) {
    return res.status(400).json({
      message: 'There was a problem getting the users'
    });
  }
}

export default handler