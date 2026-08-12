import { Router } from "express";
import {
  createInquiry,
  getInquiries,
  deleteInquiry,
} from "../controllers/inquiryController";

const router = Router();

router.post("/", createInquiry);
router.get("/", getInquiries);
router.delete("/:id", deleteInquiry);

export default router;
