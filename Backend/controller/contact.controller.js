import Contact from "../model/contact.model.js";

export const getcontact= async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      const newContact = new Contact({
        name,
        email,
        message,
      });
  
      await newContact.save();
      res.status(200).json({ message: 'Message submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error submitting message' });
    }
  };