import { useState } from "react";
import { fileReader } from "../helper/fileReader";
import { TransformSalarySchema } from "./types";
import { fileSalaryAtom } from "./state";
import { useAtom } from "jotai";

export const useHandleFile = () => {
  const [data, setData] = useAtom(fileSalaryAtom);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    fileReader(file, setData);
  };

  return { data, handleFileUpload };
};
