// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import { Consultant } from "../models/ConsultantModel.js";
export const verifyConsultant = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Token missing");

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const consultant = await Consultant.findById(decoded._id);
    if (!consultant || consultant.role !== "consultant") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.consultant = consultant;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};
