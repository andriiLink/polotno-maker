import { FC } from "react";
import { CustomButton } from "./CustomButton";

interface CheckStudentMarksModalProps {
  onModalVisible: (isVisible: boolean) => void;
  onPrevStep: () => void;
}

const mockPreviewStudents = [
  {
    id: 1,
    name: "Лінкевич Андрій Володимирович",
    average: 92.4,
    status: "Держава",
  },
  { id: 2, name: "Іванів Марія Петрівна", average: 88.7, status: "Держава" },
  {
    id: 3,
    name: "Ковальчук Олег Миколайович",
    average: 74.2,
    status: "Контракт",
  },
];

export const CheckStudentMarksModal: FC<CheckStudentMarksModalProps> = ({
  onModalVisible,
  onPrevStep,
}) => {
  return (
    <div
      className="
        fixed inset-0 z-50 
        flex 
        items-center justify-center 
        bg-black/70 backdrop-blur-sm p-4
      "
    >
      <div
        className="
          w-full max-w-lg 
          rounded-2xl bg-[#161b22] border border-[#30363d] 
          p-6 
          shadow-2xl 
          flex flex-col 
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        <div className="mb-4">
          <div className="flex items-center gap-2 text-indigo-400 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider">
              Попередня перевірка
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Контрольний зріз розрахунків
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Будь ласка, перевірте середні бали кількох студентів, щоб
            переконатися у коректності імпорту.
          </p>
        </div>

        <div className="my-4 overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117]">
          <div
            className="
              grid grid-cols-12 
              bg-[#21262d] 
              px-4 py-2 
              text-xs font-bold text-slate-400 uppercase 
              tracking-wider 
              border-b border-[#30363d]
            "
          >
            <div className="col-span-8">ПІБ Студента</div>
            <div className="col-span-4 text-right">Середній бал</div>
          </div>

          <div className="divide-y divide-[#30363d]">
            {mockPreviewStudents.map((student) => (
              <div
                key={student.id}
                className="
                  grid grid-cols-12 
                  px-4 py-3 
                  text-sm 
                  items-center 
                  hover:bg-[#161b22]/50 
                  transition-colors
                "
              >
                <div
                  className="col-span-8 font-medium text-slate-200 truncate pr-2"
                  title={student.name}
                >
                  {student.name}
                </div>
                <div className="col-span-4 text-right font-mono font-bold text-indigo-400 text-base">
                  {student.average.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-md text-center text-slate-500 mb-6">
          Якщо бали збігаються з офіційними рейтингами — все супер!
        </p>

        <div className="flex gap-3 justify-end pt-4 border-t border-[#30363d]">
          <button
            type="button"
            onClick={() => {
              onModalVisible(false);
              onPrevStep();
            }}
            className="
              px-4 py-2.5 
              rounded-lg 
              border border-rose-500/30 
              text-rose-400 
              hover:text-rose-300 
              hover:bg-rose-500/10 
              active:scale-95 
              transition-all 
              text-sm font-medium 
              cursor-pointer
            "
          >
            Помилка в балах (Назад)
          </button>
          <CustomButton
            className="px-6 py-2.5 text-sm font-bold shadow-lg shadow-indigo-950/50"
            onClick={() => onModalVisible(false)}
          >
            Все правильно, продовжити
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
