# Volatus Aerospace - Node.js Web Application

## Overview
Professional aerospace company website built with Node.js, Express, and EJS templating.

## Features
- **Express.js Server** - Fast, minimalist web framework
- **EJS Templates** - Dynamic content rendering
- **RESTful API** - Service data endpoints
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Professional aerospace styling

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

### Access the Application
- **Local Development**: http://localhost:3000
- **Production**: Deploy to Heroku, Vercel, or similar

## Project Structure
```
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── views/             # EJS templates
│   ├── layout.ejs     # Main layout
│   ├── index.ejs      # Homepage
│   ├── services.ejs   # Services page
│   └── contact.ejs    # Contact page
├── public/            # Static assets
│   ├── css/          # Stylesheets
│   └── js/           # Client-side JavaScript
└── README.md         # This file
```

## API Endpoints
- `GET /` - Homepage
- `GET /services` - Services page
- `GET /contact` - Contact page
- `GET /api/services` - Services JSON data

## Deployment Options

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create volatus-aerospace

# Deploy
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with animations
- **Responsive**: Mobile-first design

## Key Features
- Dynamic navigation with active states
- API-driven service content
- Contact form with validation
- Mobile-responsive design
- Professional aerospace branding

## Development
```bash
# Install nodemon for development
npm install -g nodemon

# Run in development mode
npm run dev
```

## Production Ready
- Optimized for deployment
- Environment variable support
- Static asset serving
- SEO-friendly URLs