# Portfolio Project

## Overview
A modern personal portfolio website built to showcase projects, skills, and professional experience.

## Requirements
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser
- Git

## Setup Instructions

### 1. Clone Repository
```bash
git clone <repository-url>
cd newPortfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENVIRONMENT=development
```

### 4. Start Development Server
```bash
npm start
```
The application will open at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
```

## Project Structure
```
newPortfolio/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.js
├── public/
├── package.json
└── README.md
```

## Technologies
- React.js
- CSS3 / Tailwind CSS
- JavaScript (ES6+)

## Available Scripts
- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to hosting
