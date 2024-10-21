import { z } from "zod";
import { salarySchema } from "~/shared/schema";

export const transformSalarySchema = z.array(salarySchema).transform((item) =>
  item.map((data) => ({
    year: data.Год,
    salary: data.ЗП,
    month: data.Месяц,
    fio: data.ФИО,
  }))
);

export type TransformSalarySchema = z.infer<typeof transformSalarySchema>;
