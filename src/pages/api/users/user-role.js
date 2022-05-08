import dbConnect from '../../../db/connect'
import User from '../../../db/models/User'
import {
  runMiddleware,
  cors,
  requireAuth,
  attachUser,
  csurfProtection
} from '../../../utils/api/middlewares'

const handler = async (req, res) => {
  if (req.method !== 'PATCH') {
    res.status(405).json({ message: 'Only PATCH requests are allowed' })
  }

  await runMiddleware(req, res, cors)
  await runMiddleware(req, res, csurfProtection)
  await runMiddleware(req, res, requireAuth)
  await runMiddleware(req, res, attachUser)
  await dbConnect()

  try {
    const { role } = req.body;
    const allowedRoles = ['user', 'admin'];

    if (!allowedRoles.includes(role)) {
      return res
        .status(400)
        .json({ message: 'Role not allowed' });
    }
    await User.findOneAndUpdate(
      { _id: req.user.sub },
      { role }
    );
    res.json({
      message:
        'User role updated. You must log in again for the changes to take effect.'
    });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}

export default handler