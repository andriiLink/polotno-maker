import { FC, useState } from "react";
import "../App.css";
import "../styles/Step1StudentsView.css";

import { UploadStudentsFileModal } from "../components/UploadStudentsFileModal";
import { UploadStudentsManuallyModal } from "../components/UploadStudentsManuallyModal";

interface Step1StudentsViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step1StudentsView: FC<Step1StudentsViewProps> = ({
  onPrevStep,
  onNextStep,
}) => {
  const [ studentsUploadManuallyModal, setStudentsManuallyUploadModal ] =
    useState(false);
  const [ studentsUploadFileModal, setStudentsFileUploadModal ] = useState(false);

  const handleOpenManuallyModal = () => {
    setStudentsManuallyUploadModal(true);
  };
  const handleOpenFileyModal = () => {
    setStudentsFileUploadModal(true);
  };

  const handleCloseManuallModal = () => {
    setStudentsManuallyUploadModal(false);
  };
  const handleCloseFileModal = () => {
    setStudentsFileUploadModal(false);
  };

  const handleConfirmManuallyModal = () => {
    setStudentsManuallyUploadModal(false);
    onNextStep();
  };
  const handleConfirmFileModal = () => {
    setStudentsFileUploadModal(false);
    onNextStep();
  };

  return (
    <div className="first-step-wrapper">
      {studentsUploadFileModal && (
        <div className="upload-students-modal">
          <UploadStudentsFileModal
            onConfirm={handleConfirmFileModal}
            onClose={handleCloseFileModal}
          />
        </div>
      )}
      {studentsUploadManuallyModal && (
        <div className="upload-students-modal">
          <UploadStudentsManuallyModal
            onConfirmModal={handleConfirmManuallyModal}
            onClose={handleCloseManuallModal}
          />
        </div>
      )}

      <div className="first-step-text-wrapper">
        <h1 className="uppload-studenst-text">Завантаження студентів</h1>
        <p>
          На цьому етапі нам потрібно зрозуміти для яких студентів ми будемо
          створювати відомість
        </p>
        <p>Ти можеш обрати два способи як ти хочеш вказати студентів групи</p>
      </div>

      <div className="options-wrapper">
        <button onClick={handleOpenFileyModal}>Завантажити як файл</button>
        <button onClick={handleOpenManuallyModal}>Ввести вручну</button>
      </div>

      <button onClick={onPrevStep}>Prev setp</button>
      {/* <button onClick={onNextStep}>Next setp</button> */}
    </div>
  );
};

export default Step1StudentsView;
