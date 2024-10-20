import { useState } from "react";

import styles from "./pageOne.module.scss";
import { AddFile, useHandleFile } from "~/features/AddFile";

const PageOne = () => {
  const [data, handleFileUpload] = useHandleFile();
  console.log(data);
  return (
    <div>
      <AddFile handleFileUpload={handleFileUpload} />
    </div>
  );
};

export default PageOne;
