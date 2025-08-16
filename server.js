import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env.local (if present) then .env
dotenv.config({ path: '.env.local' });
dotenv.config();

// Polyfill fetch for Node < 18
if (typeof fetch === 'undefined') {
    const { default: fetchFn } = await import('node-fetch');
    global.fetch = fetchFn;
}

import geminiHandler from './api/gemini.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '1mb' }));

// API route for Gemini
app.post('/api/gemini', (req, res) => {
    return geminiHandler(req, res);
});

// Serve static files from project root
app.use(express.static(__dirname));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Writio server running on http://localhost:${port}`);
});


