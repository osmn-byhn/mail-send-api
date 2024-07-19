const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // dotenv'i yükleyin
const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// E-posta gönderme endpointi
app.post('/send-email', async (req, res) => {
    const { to, subject, text, email, password } = req.body;

    if (!to || !subject || !text || !email || !password) {
        return res.status(400).send('Missing required fields');
    }

    // Dinamik olarak transporter oluştur
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Gmail kullanıyorsanız
        auth: {
            user: email, // Buraya dinamik olarak e-posta adresini girin
            pass: password // Buraya dinamik olarak e-posta şifresini girin
        }
    });

    const mailOptions = {
        from: email, // Gönderen e-posta adresi
        to,
        subject,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent: ' + info.response);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
