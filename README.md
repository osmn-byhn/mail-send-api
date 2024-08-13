
```markdown
# Send Email API

This API allows you to send emails using different email services like Gmail, Outlook, and Yandex. You can dynamically specify the email service, or if none is provided, it defaults to Gmail.

## API Endpoint

**URL:** `https://mail-send-api2.onrender.com/send-mail`

**Method:** `POST`

## Request Body Parameters

| Parameter | Type   | Description                                      | Required |
|-----------|--------|--------------------------------------------------|----------|
| `email`   | string | Your email address                               | Yes      |
| `password`| string | Your email account's app password                | Yes      |
| `to`      | string | Recipient's email address                        | Yes      |
| `subject` | string | Subject of the email                             | Yes      |
| `text`    | string | Body of the email                                | Yes      |
| `service` | string | (Optional) Email service provider (`gmail`, `outlook`, `yandex`). Defaults to `gmail` if not provided. | No       |

## Example Usage

### Sending an Email with Gmail (Default)
```sh
curl -X POST https://mail-send-api2.onrender.com/send-mail \
-H "Content-Type: application/json" \
-d '{
  "email": "your-email@gmail.com",
  "password": "your-gmail-app-password",
  "to": "send-to-email@mail.com",
  "subject": "Subject",
  "text": "message text"
}'
```

### Sending an Email with Outlook
```sh
curl -X POST https://mail-send-api2.onrender.com/send-mail \
-H "Content-Type: application/json" \
-d '{
  "email": "your-email@outlook.com",
  "password": "your-outlook-app-password",
  "to": "send-to-email@mail.com",
  "subject": "Subject",
  "text": "message text",
  "service": "outlook"
}'
```

### Sending an Email with Yandex
```sh
curl -X POST https://mail-send-api2.onrender.com/send-mail \
-H "Content-Type: application/json" \
-d '{
  "email": "your-email@yandex.com",
  "password": "your-yandex-app-password",
  "to": "send-to-email@mail.com",
  "subject": "Subject",
  "text": "message text",
  "service": "yandex"
}'
```

## Notes

- Make sure you have enabled "Less secure app access" or generated an "App Password" for your email account to use this API.
- The `service` parameter is optional. If not provided, the API will default to using Gmail.

## Error Handling

- If any required fields are missing, the API will return a `400 Bad Request` status with an appropriate error message.
- If there is an issue with sending the email, the API will return a `500 Internal Server Error` status with the error details.
```
