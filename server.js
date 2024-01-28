
const express = require('express');
const nodemailer = require('nodemailer');


// Create an instance of Express
app = express();


app.get("/email", (req, res) => {
    
    const emails=req.query.param1
   // Create a transporter using Gmail's SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nkumawat34@gmail.com', // Your Gmail username
        pass: 'gycqvhkemgzcirqu' // Your Gmail password
    }
});

// Function to send email
function sendEmail(email) {
    // Define email options
    const mailOptions = {
        from: 'nkumawat34@gmail.com', // Sender address (should be your Gmail address)
        to: email.email, // Recipient address
        subject: email.subject, // Subject line
        text: email.body // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Schedule sending emails with delay
emails.forEach((email) => {
   
        console.log(`Scheduling email to be sent to ${email.to}...`);
        setTimeout(() => {
            sendEmail(email);
        }, email.timeDelay);
    
});


   
 });




 app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });