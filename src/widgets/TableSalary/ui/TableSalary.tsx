import { useAtom } from "jotai";
import { useMemo } from "react";
import { fileSalaryAtom } from "~/features/AddFile/model/state";
import { tableDataCreate } from "../helper/tableDataCreate";
import styles from "./TableSalary.module.scss";

const TableSalary: React.FC = () => {
  const [data] = useAtom(fileSalaryAtom);

  const salaryEmployers = useMemo(() => {
    return data ? tableDataCreate(data) : [];
  }, [data]);

  return (
    <>
      {data && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Год</th>
              <th>Общий заработок</th>
              <th>Размер отпускных (28 дней)</th>
            </tr>
          </thead>
          <tbody>
            {salaryEmployers.map((employer, index) => (
              <tr key={employer.vacation.toString + index.toString()}>
                <td>{employer.fio}</td>
                <td>{employer.year}</td>
                <td>{employer.salary}</td>
                <td>{employer.vacation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
TableSalary.displayName = "TableSalary";

export default TableSalary;
