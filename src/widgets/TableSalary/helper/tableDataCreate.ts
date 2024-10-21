import { TransformSalarySchema } from "~/features/AddFile/model/types";

export type TableData = {
  year: number;
  salary: number;
  month: number;
  fio: string;
  vacation: number;
};

export const tableDataCreate = (data: TransformSalarySchema) => {
  const result: TableData[] = [];
  let name = data[0].fio;
  let salaryObject: TableData = { ...data[0], vacation: 0, salary: 0 };
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i].fio === name || !data[i].fio) {
      salaryObject.salary += data[i].salary;
      if (i === data.length - 1) {
        salaryObject.vacation = Math.round(
          (salaryObject.salary / data[i].month / 29.3) * 28
        );
        result.push(salaryObject);
      }
    } else {
      salaryObject.vacation = Math.round(
        (salaryObject.salary / data[i - 1].month / 29.3) * 28
      );
      result.push(salaryObject);
      name = data[i].fio;
      salaryObject = { ...data[i], vacation: 0 };
    }
  }
  return result;
};
