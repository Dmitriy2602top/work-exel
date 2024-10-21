import z from "zod";

export const salarySchema = z.object({
  Год: z.number(),
  ЗП: z.number(),
  Месяц: z.number(),
  ФИО: z.string().optional(),
});

export type SalarySchema = z.infer<typeof salarySchema>;
