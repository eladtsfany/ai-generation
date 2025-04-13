import client from '../config/openaiConfig.js';

const generateMeta = async (req, res) => {
    try {
        const user_prompt = req.body.prompt;
        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            input: user_prompt,
            instructions: `Generate a meta description for a YouTube video titled ${user_prompt}`,
            max_output_tokens: 200,
        });
        res.status(200).json({
            output: response.output_text,
        });
    } catch (error) {
        console.error('Unexpected error: ', error);
    }
}

const generateImage = async (req, res) => {
    try {
        const user_prompt = req.body.prompt;
        const response = await client.images.generate({
            model: "dall-e-3",
            prompt: user_prompt,
            size: "1024x1024",
            quality: "standard",
        });
        res.status(200).json({
            url: response.data[0].url,
        });
    } catch (error) {
        console.error('Unexpected error: ', error);
    }
}

export { generateMeta, generateImage };