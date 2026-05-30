import { FC, useState } from "react";

import { UploadStudentsFileModal } from "../components/UploadStudentsFileModal";
import { UploadStudentsManuallyModal } from "../components/UploadStudentsManuallyModal";
import { CustomButton } from "../components/CustomButton";

interface Step1StudentsViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step1StudentsView: FC<Step1StudentsViewProps> = ({
  onPrevStep,
  onNextStep,
}) => {
  const [studentsUploadManuallyModal, setStudentsManuallyUploadModal] =
    useState(false);
  const [studentsUploadFileModal, setStudentsFileUploadModal] = useState(false);

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
    <div className="flex flex-col gap-25 p-20">
      {studentsUploadFileModal && (
        <div>
          <UploadStudentsFileModal
            onConfirm={handleConfirmFileModal}
            onClose={handleCloseFileModal}
          />
        </div>
      )}
      {studentsUploadManuallyModal && (
        <div>
          <UploadStudentsManuallyModal
            onConfirmModal={handleConfirmManuallyModal}
            onClose={handleCloseManuallModal}
          />
        </div>
      )}

      <section className="flex flex-col gap-5">
        <h1 className="text-4xl text-center">Завантаження студентів</h1>
        <p>
          На цьому етапі нам потрібно зрозуміти для яких студентів ми будемо
          створювати відомість
        </p>
        <p>Ти можеш обрати два способи як ти хочеш вказати студентів групи</p>
      </section>

      <section className="flex justify-around">
        <CustomButton className="w-1/3" onClick={handleOpenFileyModal}>
          Завантажити як файл
        </CustomButton>
        <CustomButton className="w-1/3" onClick={handleOpenManuallyModal}>
          Ввести вручну
        </CustomButton>
      </section>

      <button
        onClick={onPrevStep}
        className="
          px-4 py-2.5 w-1/4 
          rounded-lg border border-[#30363d] 
          text-slate-300 
          hover:text-white 
          hover:bg-[#21262d] 
          active:scale-95 transition-all 
          text-sm font-medium 
          ursor-pointer
        "
      >
        Назад
      </button>
    </div>
  );
};

export default Step1StudentsView;
