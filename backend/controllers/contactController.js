import Contact from '../models/contact.js';
import nodemailer from 'nodemailer';

// Configure nodemailer (you'll need to set these environment variables)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Create new contact message
export const createContact = async (req, res) => {
  try {
    const contact = new Contact({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const savedContact = await contact.save();

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: contact.email,
      subject: 'Thank you for contacting DisasterWatch',
      html: `
        <h2>Thank you for reaching out to us, ${contact.name}!</h2>
        <p>We have received your message regarding "${contact.subject}".</p>
        <p>Our team will review your message and get back to you as soon as possible.</p>
        <p>Your reference number is: ${savedContact._id}</p>
        <br>
        <p>Best regards,</p>
        <p>The DisasterWatch Team</p>
      `
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Reference ID:</strong> ${savedContact._id}</p>
      `
    };

    // Send emails asynchronously
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: savedContact
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to send message'
    });
  }
};

// Get all contact messages (admin only)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get contact by ID (admin only)
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update contact status (admin only)
export const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    contact.status = req.body.status;
    contact.updatedAt = new Date();
    
    const updatedContact = await contact.save();

    // Send status update email to user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contact.email,
      subject: `Update on your message to DisasterWatch`,
      html: `
        <h2>Hello ${contact.name},</h2>
        <p>The status of your message regarding "${contact.subject}" has been updated to: ${contact.status}</p>
        <p>Reference number: ${contact._id}</p>
        <br>
        <p>Best regards,</p>
        <p>The DisasterWatch Team</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      data: updatedContact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete contact (admin only)
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    await contact.deleteOne();
    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
