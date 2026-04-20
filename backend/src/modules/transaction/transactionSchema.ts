import { z } from "zod";

export const CreateTransactionSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE"]),
  amount: z.number().positive({ message: "Amount must be greater than 0" }),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
  userId: z.string().min(1, "User is required"),
});

export const UpdateTransactionSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE"]).optional(),
  amount: z.number().positive("Amount must be greater than 0").optional(),
  description: z.string().min(1, "Description cannot be empty").optional(),
  categoryId: z.string().min(1, "Category is required").optional(),
});

export type CreateTransactionInput = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionInput = z.infer<typeof UpdateTransactionSchema>;
