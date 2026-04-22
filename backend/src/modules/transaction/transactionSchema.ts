import { z } from "zod";

export const CreateTransactionSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE"]),
  amount: z.number().positive({ message: "Amount must be greater than 0" }),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
});

export const UpdateTransactionSchema = CreateTransactionSchema.partial();

export type CreateTransactionInput = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionInput = z.infer<typeof UpdateTransactionSchema>;
