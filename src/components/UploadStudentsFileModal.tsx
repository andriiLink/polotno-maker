import { FC } from "react";

interface UploadStudentsFileModalProps {
  onConfirm: () => void;
  onClose: () => void;
};

export const UploadStudentsFileModal: FC<UploadStudentsFileModalProps> = ({ onConfirm, onClose }) => {
  return(
    <div>
      Upload File
      <button onClick={onClose}>Назад</button>
      <button onClick={onConfirm}>Підтвердити</button>
    </div>
  );
};
