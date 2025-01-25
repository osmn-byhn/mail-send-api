# Send Email API

This API allows you to send emails using different email services like Gmail, Outlook, and Yandex. You can dynamically specify the email service, or if none is provided, it defaults to Gmail.

## API Endpoint

**URL:**  
`https://mail-send-api2.onrender.com/send-email`

**Method:**  
`POST`

## Request Body Parameters

| Parameter  | Type    | Description                                                                                         | Required |
|------------|---------|-----------------------------------------------------------------------------------------------------|----------|
| `email`    | string  | Your email address                                                                                 | Yes      |
| `password` | string  | Your email account's app password                                                                   | Yes      |
| `to`       | string  | Recipient's email address                                                                            | Yes      |
| `subject`  | string  | Subject of the email                                                                                 | Yes      |
| `text`     | string  | Body of the email                                                                                   | Yes      |
| `service`  | string  | (Optional) Email service provider (`gmail`, `outlook`, `yandex`). Defaults to `gmail` if not provided. | No       |

## Example Usage

### Sending an Email with Gmail (Default)

```bash
curl -X POST https://mail-send-api2.onrender.com/send-email \
-H "Content-Type: application/json" \
-d '{
  "email": "your-email@gmail.com",
  "password": "your-gmail-app-password",
  "to": "send-to-email@mail.com",
  "subject": "Subject",
  "text": "message text"
}'
