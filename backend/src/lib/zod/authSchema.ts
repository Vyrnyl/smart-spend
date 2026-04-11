import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email cannot be empty").email("Invalid email"),
  password: z.string().min(1, "Password cannot be empty"),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, "First Name cannot be empty")
      .max(50, "First Name is too long"),
    email: z.string().min(1, "Email cannot be empty").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password cannot be empty")
      .min(6, "Password must be at least 6 characters"),
    //   .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
