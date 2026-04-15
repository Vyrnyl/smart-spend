import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
  updateTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.post("/", createTransaction);
router.get("/", getAllTransactions);
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
