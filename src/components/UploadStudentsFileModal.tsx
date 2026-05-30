import { FC } from "react";
import { CustomButton } from "../components/CustomButton"; // Імпортуємо твою індиго-кнопку

interface UploadStudentsFileModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const UploadStudentsFileModal: FC<UploadStudentsFileModalProps> = ({
  onConfirm,
  onClose,
}) => {
  return (
    <div
      className="
        fixed inset-0 z-50 
        flex items-center justify-center 
        bg-black/60 backdrop-blur-sm p-4
      "
    >
      <div
        className="
          w-full max-w-md 
          rounded-2xl bg-[#161b22] 
          border border-[#30363d] 
          p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150
        "
      >
        <h3 className="text-xl font-bold text-white mb-2">
          Завантаження файлу
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Будь ласка, виберіть або перетягніть PDF, Word або TXT-файл із списком
          студентів (ПІБ) де кожен студент починається новим рядком.
        </p>

        <label
          className="
            flex flex-col items-center justify-center 
            w-full h-44 
            border-2 border-dashed border-[#30363d] 
            hover:border-indigo-500 bg-[#0d1117] 
            hover:bg-indigo-950/10 
            rounded-xl 
            cursor-pointer transition-colors 
            group mb-6
          "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <svg
              className="
                w-10 h-10 mb-3 text-slate-400 
                group-hover:text-indigo-400 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor
            "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="
                  M12 16.5V9.75m0 0l3 
                  3m-3-3l-3 3M6.75 19.5a4.5 
                  4.5 0 01-1.41-8.775 5.25 
                  5.25 0 0110.233-2.33 3 3 
                  0 013.758 3.848A3.752 3.752 
                  0 0118 19.5H6.75z
                "
              />
            </svg>
            <p className="text-sm text-slate-300 font-medium">
              <span className="text-indigo-400 group-hover:underline">
                Натисніть, щоб обрати
              </span>{" "}
              або перетягніть файл
            </p>
            <p className="text-xs text-slate-500 mt-1">
              PDF, Word або TXT (макс. 10MB)
            </p>
          </div>
          <input
            type="file"
            accept="
              .pdf, .txt, 
              .doc, .docx, 
              application/msword, 
              application/vnd.openxmlformats-officedocument.wordprocessingml.document
            "
            className="hidden"
          />
        </label>

        <div className="flex gap-3 justify-end w-full">
          <button
            onClick={onClose}
            className="
              px-4 py-2.5 
              rounded-lg border border-[#30363d] 
              text-slate-300 
              hover:text-white 
              hover:bg-[#21262d] 
              active:scale-95 transition-all 
              text-sm font-medium 
              cursor-pointer
            "
          >
            Назад
          </button>

          <CustomButton className="px-5 py-2.5 text-sm" onClick={onConfirm}>
            Підтвердити
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
