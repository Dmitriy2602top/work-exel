import { AddFile, useHandleFile } from "~/features/AddFile";
import { tableDataCreate } from "~/widgets/TableSalary/helper/tableDataCreate";

type FormSalaryProps = {};

const FormSalary: React.FC<FormSalaryProps> = () => {
  const { data, handleFileUpload } = useHandleFile();
  const newDate = data && tableDataCreate(data);
  // console.log(data);
  console.log(newDate);

  return <AddFile handleFileUpload={handleFileUpload} />;
};

FormSalary.displayName = "FormSalary";

export default FormSalary;
