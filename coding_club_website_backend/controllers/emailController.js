const nodemailer = require('nodemailer');
const joinTeamService = require('../services/emailService');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rakeshlohana15@gmail.com',
    pass: 'ozdjgkxusxxixqft',
    // got to manage account in google id -> then find security -> then 2 factor authentication-> scroll down for App Passwords -> create pass words and paste here to work properly
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send an email
    await transporter.sendMail({
      from: 'rakeshlohana15@gmail.com',//put sender gmail
      to: email,// put gmail of receipent
      subject: subject,
      text: `Hi ${name}!\n
      Thanks For suggestion, We Will shortly contact with you
      Regards ,\n Binary Beasts`,
    });

    // Call the service to save email data (optional)
    await joinTeamService.saveEmailData(name, email, subject, message);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};
