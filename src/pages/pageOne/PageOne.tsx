import { useState } from "react";

import styles from "./pageOne.module.scss";
import { AddFile, useHandleFile } from "~/features/AddFile";
import { FormSalary } from "~/widgets/FormSalary";
import { TableSalary } from "~/widgets/TableSalary";

const PageOne = () => {
  return (
    <div>
      <FormSalary />
      <TableSalary />
    </div>
  );
};

export default PageOne;
