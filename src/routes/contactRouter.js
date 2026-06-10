import { creatContact, getAllContact, getContactById, deleteContactById} from "../controllers/contactController.js";

import express from "express";

const contactRouter = express.Router();

contactRouter.post("/create", creatContact);
contactRouter.get("/getContacts", getAllContact);
contactRouter.get("/getContact/:id", getContactById);
contactRouter.delete("/deleteContact/:id", deleteContactById);


export default contactRouter;

