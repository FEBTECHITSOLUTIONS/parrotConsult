// routes/assistantRoute.js
import { Router } from "express";
import { suggestConsultant } from "../controllers/assistantcontroller.js";


const assistantRoute = Router();

assistantRoute.post("/suggest", suggestConsultant);

export default assistantRoute;
