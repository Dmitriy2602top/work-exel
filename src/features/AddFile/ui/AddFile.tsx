type AddFileProps = {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddFile: React.FC<AddFileProps> = ({ handleFileUpload }) => {
  return <input type="file" accept=".xlsx" onChange={handleFileUpload} />;
};

AddFile.displayName = "AddFile";

export default AddFile;
