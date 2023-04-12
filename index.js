const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.example.com',
  port: 465,
  auth: {
    user: 'example@domain.com',
    pass: 'your_password'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOptions = {
  from: 'example@domain.com',
  subject: 'Subject of the email',
};

const filePath = path.resolve(__dirname, 'path/to/file'); // chemin du fichier de mail.txt

fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  const emails = data.toString().split('\n');
  emails.forEach((email, index) => {
    const timeout = (index + 1) * 20000;
    setTimeout(() => {
      mailOptions.to = email.trim();
      mailOptions.text = "Hello,\n\nThis is a demo email.";
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent to: ' + email);
        }
      });
    }, timeout); // wait for 20 seconds times the index of the email in the array
  });
});
