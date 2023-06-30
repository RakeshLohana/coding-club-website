const nodemailer = require('nodemailer');
const joinTeamService = require('../services/emailService');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',// put your gmail id
    pass: '',// got to manage account in google id -> then find security -> then 2 factor authentication-> scroll down for App Passwords -> create pass words and paste here to work properly
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send an email
    await transporter.sendMail({
      from: '',//put sender gmail
      to: '',// put gmail of receipent
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
