import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../modules/category/category.controller";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
