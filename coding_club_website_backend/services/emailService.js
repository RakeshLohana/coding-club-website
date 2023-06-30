// This file can be used to handle any additional business logic related to the email service.
// For this example, we will just simulate saving email data.
exports.saveEmailData = async (name, email, subject, message) => {
    try {
      // Save the email data to the database or any storage system here.
      // For this example, we will just log the email data to the console.
      console.log('Email data saved:', { name, email, subject, message });
    } catch (error) {
      console.error('Error while saving email data:', error);
      throw new Error('Error while saving email data');
    }
  };
  