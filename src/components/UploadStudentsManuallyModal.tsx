import { FC, useState } from "react";
import { CustomButton } from "../components/CustomButton";

interface UploadStudentsManuallyModalProps {
  onConfirmModal: () => void;
  onClose: () => void;
}

export const UploadStudentsManuallyModal: FC<
  UploadStudentsManuallyModalProps
> = ({ onConfirmModal, onClose }) => {
  const [students, setStudents] = useState<string[]>(Array(10).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const updatedStudents = [...students];
    updatedStudents[index] = value;
    setStudents(updatedStudents);
  };

  const addStudentInput = () => {
    setStudents([...students, ""]);
  };

  const removeStudentInput = (index: number) => {
    if (students.length === 1) {
      setStudents([""]);
      return;
    }
    setStudents(students.filter((_, i) => i !== index));
  };

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
          w-full max-w-xl rounded-2xl 
          bg-[#161b22] border border-[#30363d] 
          p-6 shadow-2xl 
          flex flex-col 
          max-h-[85vh] 
          animate-in fade-in zoom-in-95 duration-150
        "
      >
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">
            Введення списку студентів
          </h3>
          <p className="text-sm text-slate-400">
            Введіть ПІБ студентів групи вручну. Ви можете додавати нові поля або
            видаляти зайві.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 my-4 space-y-3 custom-scrollbar">
          {students.map((student, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3 
                group animate-in fade-in slide-in-from-top-1 duration-100
              "
            >
              <span
                className="
                  text-xs font-mono 
                  text-slate-500 
                  w-6 text-right 
                  select-none
                "
              >
                {index + 1}.
              </span>

              <input
                type="text"
                value={student}
                placeholder="Прізвище Ім'я По батькові"
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="
                  flex-1 px-4 py-2 
                  rounded-xl bg-[#0d1117] border border-[#30363d] 
                  text-white 
                  placeholder-slate-600 
                  focus:border-indigo-500 
                  focus:ring-1 
                  focus:ring-indigo-500 
                  transition-all 
                  text-sm outline-none
                "
              />

              <button
                type="button"
                onClick={() => removeStudentInput(index)}
                  title="Видалити студента"
                  className="p-2 text-slate-500 
                  hover:text-rose-400 
                  hover:bg-rose-500/10 
                  rounded-lg 
                  cursor-pointer 
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Інтерактивна кнопка-блок для додавання нового поля (+) */}
          <button
            type="button"
            onClick={addStudentInput}
            className="
              w-full py-2.5 ml-9 
              border border-dashed border-[#30363d] 
              hover:border-indigo-500/50 text-slate-400 
              hover:text-indigo-400 
              hover:bg-indigo-950/10 
              rounded-xl 
              cursor-pointer transition-all 
              flex items-center justify-center gap-2 
              text-sm font-medium 
              group
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4 transform group-hover:scale-110 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Додати поле для студента
          </button>
        </div>

        <div className="flex gap-3 justify-end w-full pt-4 border-t border-[#30363d]">
          <button
            type="button"
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

          <CustomButton
            className="px-5 py-2.5 text-sm"
            onClick={onConfirmModal}
          >
            Підтвердити
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
