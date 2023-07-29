var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});

router.post('/submit', (req, res) => {
  console.log("Submitted");
  const { name1, number1, name2, number2 } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, //ssl
    auth: {
      user: 'unknown2023i@zohomail.com', // Replace with your email address
      pass: 'uLDiM6h6V0cU', // Replace with your email password
    },
  });

  // Email details
  const mailOptions = {
    from: 'unknown2023i@zohomail.com',
    to: 'Swapjo.2022@gmail.com', // Replace with your email address
    subject: 'Form Submission',
    text: `
      اسم المتجر : ${name1}
      رقم الموبايل: ${number1}
      اسم المسوق: ${name2}
      رقم الموبايل على التطبيق: ${number2}
    `,
  };
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted successfully.');
    }
  });
  res.redirect("/");
});



module.exports = router;
