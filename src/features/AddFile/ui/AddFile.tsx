import { useState } from "react";
import styles from "./AddFile.module.scss";

type AddFileProps = {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddFile: React.FC<AddFileProps> = ({ handleFileUpload }) => {
  const [fileName, setFileName] = useState<string | undefined>();
  return (
    <div className={styles.fileUpload}>
      <label className={styles.fileUploadLabel}>
        <input
          type="file"
          onChange={(e) => {
            handleFileUpload(e);
            setFileName(e.target.files[0].name);
          }}
          className={styles.fileUploadInput}
          accept=".xlsx"
        />
        <span className={styles.fileUploadText}>
          {fileName || "Выберите файл"}
        </span>
      </label>
    </div>
  );
};

AddFile.displayName = "AddFile";

export default AddFile;
