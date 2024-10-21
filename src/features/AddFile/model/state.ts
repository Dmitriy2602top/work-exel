import { atom } from "jotai";
import { TransformSalarySchema } from "./types";
export const fileSalaryAtom = atom<undefined | TransformSalarySchema>(
  undefined
);
