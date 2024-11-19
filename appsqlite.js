const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 209;


app.use(bodyParser.json());

app.use(express.static('public'));


const db = new sqlite3.Database('neurosign.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});


db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);`);


app.post('/registration', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.run(query, [name, email, hashedPassword], function (err) {
        if (err) {
            console.error('Error inserting user:', err.message); // Log the actual error message from SQLite
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }

        
        console.log('Inserted new user with ID:', this.lastID);

        
        res.status(201).json({
            message: 'User registered successfully',
            userId: this.lastID
        });
    });
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.get(query, [email], async (err, user) => {
        if (err) {
            console.error('Error fetching user:', err.message);
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

       
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

       
        res.status(200).json({ message: 'Logged in successfully!' });
    });
});

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/homepage.html'));
});

app.get('/chatgpt', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/chatgpt.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/registration.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
