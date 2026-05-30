import { FC, useState } from "react";
import "../App.css";
import { UploadSemestersModal } from "../components/UploadSemestersModal";

interface Step2SemestersViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step2SemestersView: FC<Step2SemestersViewProps> = ({
  onPrevStep,
  onNextStep,
}) => {
  const [uploadSemestersModal, setUploadSemestersModal] = useState(false);

  const handleOpenSemestersModal = () => {
    setUploadSemestersModal(true);
  };
  const handleCloseSemestersModal = () => {
    setUploadSemestersModal(false);
  };
  const handleConfirmSemestersModal = () => {
    setUploadSemestersModal(false);
    onNextStep();
  };

  return (
    <div>
      {uploadSemestersModal && (
        <UploadSemestersModal
          onClose={handleCloseSemestersModal}
          onConfirm={handleConfirmSemestersModal}
        />
      )}
      Upload semesters files
      <button onClick={handleOpenSemestersModal}>
        Завантажити файли семестрів
      </button>
      <button onClick={onPrevStep}>Prev setp</button>
    </div>
  );
};

export default Step2SemestersView;
