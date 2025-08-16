# Writio - AI-Powered Code Tools

Writio is a suite of AI-powered coding tools that leverage Google's Gemini AI to help developers with code generation, translation, and analysis. The project features a cyberpunk-inspired UI design for a unique user experience.

## Features

### 1. Code Generator
- Generate code from natural language prompts
- Supports multiple programming languages
- Real-time code generation with syntax highlighting
- Copy generated code with one click

### 2. Code Translator
- Translate code between different programming languages
- Support for 18+ programming languages
- Maintains code structure and logic during translation
- Interactive editor with syntax highlighting

### 3. Code Analyzer
- Analyze code for errors and potential issues
- Get detailed error descriptions with line numbers
- Receive suggestions for code improvements
- View corrected code examples

## Setup Instructions

### Prerequisites
- A modern web browser
- Google AI Studio API key

### Getting Your API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy your API key

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/writio.git
cd writio
```

2. Provide your API key (two options):
- Recommended: create `.env.local` in the project root with a single line:
  `GEMINI_API_KEY=YOUR_KEY_HERE`
- Or set it once in the browser console (useful when opening files directly):
  `localStorage.setItem('GEMINI_API_KEY', 'YOUR_KEY_HERE')`

3. Run locally (Express server with working `/api/gemini`):
   1. Install deps: `npm install`
   2. Start server: `npm run start`
   3. Open `http://localhost:8000`

   Notes:
   - The included Express server serves the static files and implements `POST /api/gemini` using `api/gemini.js`.
   - If you still prefer a static server (e.g. Python/VS Code Live Server), set your key client-side once:
     `localStorage.setItem('GEMINI_API_KEY', 'YOUR_KEY_HERE')` and reload. The app will fall back to client calls when the API route is unavailable.

4. Open the app:
- Navigate to `http://localhost:8000` in your browser

## Project Structure
```
writio/
├── css/
│   ├── style.css
│   ├── index.css
│   └── loader.css
├── fonts/
│   ├── BlenderProBook.woff2
│   ├── Cyberpunk.otf
│   └── Oxanium.woff2
├── videos/
│   ├── bg1.mp4
│   ├── bg3.mp4
│   ├── bg8.mp4
│   └── bg10.mp4
├── images/
│   └── writio-logos
├── index.html
├── code-generator.html
├── code-translator.html
├── code-analyzer.html
└── README.md
```

## Technologies Used
- HTML5/CSS3
- JavaScript (ES6+)
- Google Gemini AI API
- Monaco Editor
- CodeMirror

## Security Considerations
- Never commit your API key to version control
- Consider using environment variables for API key management in production
- Implement rate limiting and error handling
- Follow security best practices when deploying

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Created by Arpit

## Acknowledgments
- Google AI Studio for the Gemini API
- Monaco Editor and CodeMirror teams
- Cyberpunk 2077 for UI inspiration
