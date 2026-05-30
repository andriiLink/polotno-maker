import { FC } from "react";

interface UploadStudentsManuallyModalProps {
  onConfirmModal: () => void;
  onClose: () => void;
};

export const UploadStudentsManuallyModal: FC<UploadStudentsManuallyModalProps> = ({ onConfirmModal, onClose }) => {
  return(
    <div>
      Upload manually
      <button onClick={onClose}>Назад</button>
      <button onClick={onConfirmModal}>Підтвердити</button>
    </div>
  );
};
