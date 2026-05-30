import { FC } from "react";

interface UploadSemestersModalProps {
  onClose: () => void;
  onConfirm: () => void;
};

export const UploadSemestersModal: FC<UploadSemestersModalProps> = ({ onClose, onConfirm }) => {
  return(
    <div>
      UploadModal
      <button onClick={onClose}>Назад</button>
      <button onClick={onConfirm}>Підтвердити</button>
    </div>
  );
};
