const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/send-email', async (req, res) => {
    const { to, subject, text, email, password, service } = req.body;

    if (!to || !subject || !text || !email || !password) {
        return res.status(400).send('Missing required fields');
    }

    let transporterConfig;

    switch (service) {
        case 'gmail':
            transporterConfig = {
                service: 'gmail',
                auth: {
                    user: email,
                    pass: password
                }
            };
            break;
        case 'outlook':
            transporterConfig = {
                host: 'smtp-mail.outlook.com',
                port: 587,
                secure: false,
                auth: {
                    user: email,
                    pass: password
                }
            };
            break;
        case 'yandex':
            transporterConfig = {
                host: 'smtp.yandex.com',
                port: 465,
                secure: true,
                auth: {
                    user: email,
                    pass: password
                }
            };
            break;
        default:
            return res.status(400).send('Unsupported email service');
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    const mailOptions = {
        from: email,
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