import { FC, useState } from "react";
import { UploadSemestersModal } from "../components/UploadSemestersModal";
import { CustomButton } from "../components/CustomButton";

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
    <div className="flex flex-col gap-25 p-20">
      {uploadSemestersModal && (
        <UploadSemestersModal
          onClose={handleCloseSemestersModal}
          onConfirm={handleConfirmSemestersModal}
        />
      )}

      <section className="flex flex-col gap-5">
        <h1 className="text-4xl text-center">Завантаження семестрів</h1>
        <p>
          На цьому етапі нам потрібно завантажити 
          файли рейтингів за всі семестри навчання
        </p>
      </section>

      <CustomButton className="w-1/3 m-auto" onClick={handleOpenSemestersModal}>
        Завантажити файли
      </CustomButton>

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

export default Step2SemestersView;
