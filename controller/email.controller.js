import Email from '../model/eMail.model.js'
import { emailSender } from '../utils/emailUtils.js';

const emailController = async (req, res) => {
try {
    const {to, message, subject} = req.body;
    
    // Setup email data
const mailOptions = {
    from: 'kshitish.naxtre@gmail.com', // Sender address
    to: to, // List of recipients
    subject: subject, // Subject line
    text: message, // Plain text body
    // html: '<b>Hello, this is a test email sent from Node.js.</b>' // HTML body
};

const isSuccess = emailSender(mailOptions)
if(!isSuccess){
   return res.status(503).json({message: "something went wrong"})
} 

return res.status(200).json({message: "email sent successfully"})
} catch (error) {
    res.status(500).json({message: error.message})
}
}

export {emailController}