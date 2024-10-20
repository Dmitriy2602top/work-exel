import { useState } from "react";
import * as XLSX from "xlsx";

export const useHandleFile = () => {
  const [data, setData] = useState<any>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = (ev) => {
      const binaryString = ev.target.result;
      const workBook = XLSX.read(binaryString, { type: "binary" });
      const firstSheet = workBook.SheetNames[0];
      const sheet = workBook.Sheets[firstSheet];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    };
  };

  return [data, handleFileUpload]
};
