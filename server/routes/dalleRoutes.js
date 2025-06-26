import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // ✅ Add input validation
    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return res
        .status(400)
        .json({ error: 'Prompt is required and must be a non-empty string.' });
    }

    console.log('🟢 Received prompt:', prompt); // ✅ Debug

    const aiResponse = await openai.createImage({
      prompt: prompt.trim(),
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0]?.b64_json;

    if (!image) {
      throw new Error('Image generation failed. No image returned from API.');
    }

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(
      '🔴 DALL·E API Error:',
      error?.response?.data || error.message
    );
    res.status(500).json({
      error:
        error?.response?.data?.error?.message ||
        'Something went wrong with the DALL·E API',
    });
  }
});

export default router;
