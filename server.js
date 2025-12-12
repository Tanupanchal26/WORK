const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Volatus Aerospace - Advanced Aviation Solutions',
        page: 'home'
    });
});

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Our Services - Volatus Aerospace',
        page: 'services'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us - Volatus Aerospace',
        page: 'about'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us - Volatus Aerospace',
        page: 'contact'
    });
});

// API Routes
app.get('/api/services', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Drone Operations',
            description: 'Professional UAV services for commercial and industrial applications',
            icon: '🚁'
        },
        {
            id: 2,
            name: 'Pilot Training',
            description: 'Comprehensive aviation training programs and certifications',
            icon: '✈️'
        },
        {
            id: 3,
            name: 'Consulting',
            description: 'Expert aerospace consulting and regulatory compliance support',
            icon: '🔧'
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`🚀 Volatus Aerospace server running on http://localhost:${PORT}`);
});