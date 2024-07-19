const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // dotenv'i yükleyin
const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// Nodemailer konfigürasyonu
const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail kullanıyorsanız
    auth: {
        user: process.env.EMAIL, // Buraya kendi e-posta adresinizi girin
        pass: process.env.PASSWORD // Buraya kendi e-posta şifrenizi girin
    }
});

// E-posta gönderme endpointi
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL, // Gönderen e-posta adresi
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
