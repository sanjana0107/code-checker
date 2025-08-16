export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { prompt } = body;
    if (!prompt) {
      res.status(400).json({ error: 'Missing prompt' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Server missing GEMINI_API_KEY' });
      return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    if (!r.ok) {
      const err = await r.text();
      res.status(r.status).json({ error: `Gemini HTTP ${r.status}: ${err}` });
      return;
    }

    const data = await r.json();
    const text = (data?.candidates?.[0]?.content?.parts || [])
      .map(p => p.text || '')
      .join('') || '';
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: e?.message || String(e) });
  }
}


