import { generateMeta, generateImage } from './controllers/openAiController.js';
import express from 'express';

/** -=== Prompt user for input to generate an image ===-
 import readline from 'readline';

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What image would you like me to create?\n', generateImage);
*/

const app = express();

// App setup
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/openai/meta', generateMeta);
app.post('/openai/image', generateImage);
