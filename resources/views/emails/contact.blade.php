<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #697565;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 25px;
        }
        .content p {
            margin: 0 0 15px;
        }
        .message-box {
            border: 1px solid #e5e5e5;
            padding: 35px;
            background-color: #f9f9f9;
            border-radius: 4px;
            white-space: normal;
            word-wrap: break-word;
            text-align: justify;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="{{ config('app.url') }}" style="display: inline-block;">
                <img src="cid:logo.png" alt="Portfolio Logo" style="width: 75px; height: auto;">
            </a>
            <h2 style="margin-top: 7px;">New Message from Your Portfolio</h2>
        </div>
        <div class="content">
            <p>You have received a new message through your portfolio's contact form.</p>
            <p><strong>Name:</strong> {{ $name }}</p>
            <p><strong>Email:</strong> <a href="mailto:{{ $email }}">{{ $email }}</a></p>
            <p><strong>Message:</strong></p>
            <p class="message-box">
                {{ $msg }}
            </p>
        </div>
    </div>
</body>
</html>
