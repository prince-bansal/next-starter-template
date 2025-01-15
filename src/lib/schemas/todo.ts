import * as z from "zod";

// schema to validate todo in form
export const todoSchema = z.object({
  title: z.string().min(6, { message: "Title must be at least 6 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
});

// type to use as interface/class
export type ITodo = z.infer<typeof todoSchema>;
