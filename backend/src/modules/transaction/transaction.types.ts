export interface CreateTransactionDTO {
  type: "INCOME" | "EXPENSE";
  amount: number;
  description: string;
  categoryId: string;
  userId: string;
}

export interface UpdateTransactionDTO {
  type?: "INCOME" | "EXPENSE" | undefined;
  amount?: number | undefined;
  description?: string | undefined;
  categoryId?: string | undefined;
}