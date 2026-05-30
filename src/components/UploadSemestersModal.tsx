import { FC, useState } from "react";
import { CustomButton } from "../components/CustomButton";

interface UploadSemestersModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

interface SemesterFile {
  id: number;
  number: number;
  fileName: string | null;
}

export const UploadSemestersModal: FC<UploadSemestersModalProps> = ({
  onClose,
  onConfirm,
}) => {
  const [semesters, setSemesters] = useState<SemesterFile[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleInitialize = (count: number) => {
    const initialSemesters = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      number: i + 1,
      fileName: null,
    }));
    setSemesters(initialSemesters);
    setIsInitialized(true);
  };

  const addSemester = () => {
    const nextNumber =
      semesters.length > 0
        ? Math.max(...semesters.map((s) => s.number)) + 1
        : 1;
    setSemesters([
      ...semesters,
      { id: Date.now(), number: nextNumber, fileName: null },
    ]);
  };

  const removeSemester = (id: number) => {
    const filtered = semesters.filter((s) => s.id !== id);

    const recalculated = filtered.map((semester, index) => ({
      ...semester,
      number: index + 1,
    }));

    setSemesters(recalculated);
  };

  const handleFileChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSemesters(
        semesters.map((s) =>
          s.id === id ? { ...s, fileName: files[0].name } : s,
        ),
      );
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50 
        flex items-center justify-center 
        bg-black/60 backdrop-blur-sm 
        p-4
      "
    >
      <div
        className="
          w-full max-w-4xl 
          rounded-2xl bg-[#161b22] border border-[#30363d] 
          p-6 shadow-2xl 
          flex flex-col 
          max-h-[85vh] animate-in fade-in zoom-in-95 duration-150
        "
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1">
            Завантаження рейтингів по семестрах
          </h3>
          <p className="text-sm text-slate-400">
            Оберіть базову кількість семестрів, завантажте відповідні PDF-файли
            або налаштуйте структуру вручну.
          </p>
        </div>

        {!isInitialized ? (
          <div
            className="
              flex-1 flex flex-col 
              items-center justify-center 
              py-12 px-4 
              border border-dashed border-[#30363d] 
              rounded-xl 
              bg-[#0d1117] 
              my-4 gap-6 
              animate-in fade-in duration-200
            "
          >
            <p className="text-base font-medium text-slate-300 text-center">
              З якою формою навчання працюємо? Оберіть базовий шаблон:
            </p>
            <div className="flex gap-4 w-full max-w-md">
              <button
                type="button"
                onClick={() => handleInitialize(3)}
                className="
                  flex-1 py-4 px-6 
                  bg-[#21262d] border border-[#30363d] 
                  hover:border-indigo-500 
                  text-white 
                  rounded-xl 
                  font-semibold 
                  text-sm 
                  cursor-pointer 
                  hover:bg-[#30363d] transition-all active:scale-98
                "
              >
                💥 3 Семестри
                <span className="block text-xs font-normal text-slate-400 mt-1">
                  (Скорочена / Магістри)
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleInitialize(8)}
                className="
                  flex-1 py-4 px-6 
                  bg-[#21262d] border border-[#30363d] 
                  hover:border-indigo-500 
                  rounded-xl 
                  text-white 
                  font-semibold 
                  cursor-pointer t
                  ext-sm 
                  hover:bg-[#30363d] 
                  transition-all 
                  active:scale-98
                "
              >
                🎓 8 Семестрів
                <span className="block text-xs font-normal text-slate-400 mt-1">
                  (Повний Бакалаврат)
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 my-4 flex flex-col min-h-0">
            <div className="flex-1 overflow-x-auto pb-4 pt-2 flex items-stretch gap-4 custom-scrollbar">
              {semesters.map((semester) => (
                <div
                  key={semester.id}
                  className="
                    relative 
                    w-44 
                    flex-shrink-0 flex flex-col 
                    justify-between 
                    rounded-xl 
                    bg-[#0d1117] border border-[#30363d] 
                    p-4 transition-all 
                    hover:border-slate-500 
                    group 
                    animate-in fade-in zoom-in-95 duration-150"
                >
                  <button
                    type="button"
                    onClick={() => removeSemester(semester.id)}
                    className="
                      absolute top-2 right-2 p-1 
                      text-slate-500 
                      hover:text-rose-400 
                      hover:bg-rose-500/10 
                      rounded-md opacity-0 
                      group-hover:opacity-100 
                      transition-all 
                      cursor-pointer
                    "
                    title="Видалити семестр"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="mt-2">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      Семестр
                    </span>
                    <h4 className="text-3xl font-black text-white leading-tight">
                      {semester.number}
                    </h4>
                  </div>

                  <label 
                    className="
                      mt-4 p-3 h-24
                      flex flex-col 
                      items-center justify-center 
                      rounded-lg 
                      border border-dashed border-[#30363d] 
                      hover:border-indigo-500 bg-[#161b22] 
                      cursor-pointer 
                      transition-colors 
                      text-center 
                    "
                  >
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(semester.id, e)}
                      className="hidden"
                    />

                    {semester.fileName ? (
                      <div className="w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mx-auto text-emerald-400 mb-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p
                          className="text-[11px] text-emerald-400 font-medium truncate px-1"
                          title={semester.fileName}
                        >
                          {semester.fileName}
                        </p>
                      </div>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-slate-500 mb-1 group-hover:text-indigo-400 transition-colors"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="
                              M12 16.5V9.75m0 0l3 3m-3-3l-3 
                              3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 
                              5.25 5.25 0 0110.233-2.33 3 3 0 
                              013.758 3.848A3.752 3.752 0 0118 19.5H6.75z
                            "
                          />
                        </svg>
                        <p className="text-[11px] text-slate-400 group-hover:text-indigo-400 transition-colors">
                          Додати PDF
                        </p>
                      </>
                    )}
                  </label>
                </div>
              ))}

              <button
                type="button"
                onClick={addSemester}
                className="
                  w-44 flex-shrink-0 flex flex-col 
                  items-center justify-center 
                  rounded-xl 
                  border border-dashed border-[#30363d] 
                  hover:border-indigo-500 
                  text-slate-500 
                  hover:text-indigo-400 
                  hover:bg-indigo-950/5 
                  cursor-pointer t
                  ransition-all 
                  gap-2 
                  group
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-xs font-medium">Додати семестр</span>
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-3 justify-end w-full pt-4 border-t border-[#30363d]">
          <button
            type="button"
            onClick={onClose}
            className="
              px-4 py-2.5 
              rounded-lg 
              border border-[#30363d] 
              text-slate-300 
              hover:text-white 
              hover:bg-[#21262d] 
              active:scale-95 
              transition-all 
              text-sm font-medium 
              cursor-pointer
            "
          >
            Назад
          </button>

          <CustomButton
            className="px-5 py-2.5 text-sm"
            onClick={onConfirm}
            disabled={!isInitialized || semesters.length === 0}
          >
            Підтвердити
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
