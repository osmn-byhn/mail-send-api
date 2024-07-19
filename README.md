# API for send-email

**API URL:**
*https://mail-send-api2.onrender.com/send-mail*

**Body Parameters:**
- `email`: `your-email@mail.com`
- `password`: `your email app password`
- `to`: `send-to-email@mail.com`
- `subject`: `Subject`
- `text`: `message text`

**Example:**
```sh
curl -X POST https://mail-send-api2.onrender.com/send-mail \
-H "Content-Type: application/json" \
-d '{
  "email": "your-email@mail.com",
  "password": "your email app password",
  "to": "send-to-email@mail.com",
  "subject": "Subject",
  "text": "message text"
}'
