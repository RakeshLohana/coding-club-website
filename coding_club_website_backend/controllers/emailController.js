const nodemailer = require('nodemailer');
const joinTeamService = require('../services/emailService');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rakeshlohana15@gmail.com',
    pass: 'ozdjgkxusxxixqft',
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send an email
    await transporter.sendMail({
      from: 'rakeshlohana15@gmail.com',
      to: 'rakeshlohana51@gmail.com ',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Call the service to save email data (optional)
    await joinTeamService.saveEmailData(name, email, subject, message);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};
