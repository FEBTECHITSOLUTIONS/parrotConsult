import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { ApplyAsconsultant, consultanteditProfile, loginAsConsultant } from "../controllers/Consultant.controller.js";
import { verifyConsultant } from "../middlewares/consultantMiddleware.js";

const ConsultantRouter = Router();

ConsultantRouter.route("/registerasconsultant").post(
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "aadhaarCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "certificates", maxCount: 8 },
  ]),
  ApplyAsconsultant
);



ConsultantRouter.route("/updateProfile").put(verifyConsultant , upload.single("profilePicture"), consultanteditProfile );

ConsultantRouter.route("/loginconsultant").post(loginAsConsultant);

export default ConsultantRouter;




