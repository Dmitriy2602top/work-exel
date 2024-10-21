import * as XLSX from "xlsx";
import { SalarySchema } from "~/shared/schema";
import { TransformSalarySchema, transformSalarySchema } from "../model/types";

export const fileReader = (
  file: File,
  setData: (file: TransformSalarySchema) => void
) => {
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = (ev) => {
    const binaryString = ev.target.result;
    const workBook = XLSX.read(binaryString, { type: "binary" });
    const firstSheet = workBook.SheetNames[0];
    const sheet = workBook.Sheets[firstSheet];
    const jsonData = XLSX.utils.sheet_to_json(sheet) as SalarySchema[];
    setData(transformSalarySchema.parse(jsonData));
  };
};
