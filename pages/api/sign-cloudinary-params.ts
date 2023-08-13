import { v2 as cloudinary } from 'cloudinary';

export default async function handler(req, res) {
  const body = JSON.parse(req.body) || {};
  const { paramsToSign } = body;

  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    res.status(500).json({
      error: 'CLOUDINARY_API_SECRET is not set',
    });
    return;
  }

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      apiSecret,
    );
    res.status(200).json({
      signature,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
}
