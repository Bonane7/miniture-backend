import Contact from "../model/contactModel.js";

export const creatContact = async (req, res) => {
  try {
    const { fullNames, email, subject, message } = req.body;

    if (!fullNames || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const contact = await Contact.create({
      fullNames,
      email,
      subject,
      message,
    });
    res.status(201).json({ message: "contact created successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

export const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      message: "Contact retrieved successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const getContact = await Contact.findById(id);

    res
      .status(200)
      .json({ message: "contact retreived successfuly", getContact });
  } catch (error) {
    res.status(500).json({ message: "error server", error: error.message });
  }
};

export const deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecontact = await Contact.findByIdAndDelete(id);

    res.status(200).json({message: "Contact deleted successfuly", data: deletecontact})


  } catch (error) {
    res.status(500).json({message:"server error", error:error.message})
  }
};
