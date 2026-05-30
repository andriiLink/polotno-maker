import { FC, useState } from "react";
import { CheckStudentMarksModal } from "../components/CheckStudentMarksModal";

interface Step3ResultsViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step3ResultsView: FC<Step3ResultsViewProps> = ({ onPrevStep }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(true);

  const fileName = "Згенерована_відомість_групи.xlsx";

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert(`Файл "${fileName}" успішно збережено!`);
    }, 1500);
  };

  return (
    <div
      className="
        flex flex-col 
        items-center justify-center 
        min-h-[80vh] mt-5 px-4 
        animate-in fade-in zoom-in-95 duration-300
      "
    >
      {isCheckModalOpen && (
        <CheckStudentMarksModal
          onModalVisible={setIsCheckModalOpen}
          onPrevStep={onPrevStep}
        />
      )}

      <div
        className="
          w-full max-w-md 
          rounded-2xl bg-[#161b22] border border-[#30363d] 
          p-8 
          shadow-2xl 
          text-center 
          relative 
          overflow-hidden
        "
      >
        <div
          className="
            absolute 
            -top-24 -left-24 
            h-48 w-48 
            rounded-full 
            bg-emerald-500/10 
            blur-3xl 
            pointer-events-none
          "
        />
        <div
          className="
            absolute 
            -top-24 -right-24 
            h-48 w-48 
            rounded-full 
            bg-indigo-500/10 
            blur-3xl 
            pointer-events-none
          "
        />

        <div
          className="
            mx-auto 
            flex 
            items-center justify-center 
            h-20 w-20 mb-6 
            rounded-full 
            bg-emerald-500/10 
            text-emerald-400 
            border border-emerald-500/20
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-emerald-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="
                M19.5 14.25v-2.625a3.375 
                3.375 0 00-3.375-3.375h-1.5A1.125 
                1.125 0 0113.5 7.125v-1.5a3.375
                3.375 0 00-3.375-3.375H8.25m2.25 
                0H5.625c-.621 0-1.125.504-1.125 
                1.125v17.25c0 .621.504 1.125 
                1.125 1.125h12.75c.621 0 1.125-.504 
                1.125-1.125V11.25a9 9 0 00-9-9z
              "
            />
          </svg>
        </div>

        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">
          Роботу завершено!
        </h2>
        <p className="text-sm text-emerald-400 font-medium mb-6">
          Відомість успішно сформована
        </p>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          Я зібрав усі семестрові рейтинги, перевірив збіги по ПІБ студентів та
          підготував підсумковий файл.
        </p>

        <div
          className="
            flex 
            items-center gap-3 
            bg-[#0d1117] border border-[#30363d] 
            rounded-xl 
            p-4 mb-8 
            text-left 
            group 
            hover:border-slate-600 
            transition-colors
          "
        >
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden flex-1">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Готовий документ
            </p>
            <p
              className="text-sm font-medium text-slate-200 truncate"
              title={fileName}
            >
              {fileName}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="
            w-full py-3.5 px-6 
            bg-gradient-to-r from-emerald-500 to-teal-600 
            hover:from-emerald-400 
            hover:to-teal-500 
            text-white font-bold 
            rounded-xl 
            shadow-lg shadow-emerald-950/20 
            active:scale-98 
            transition-all 
            flex 
            items-center justify-center gap-2 
            cursor-pointer 
            text-sm 
            border border-emerald-400/20 
            disabled:opacity-50
          "
        >
          {isDownloading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="
                    M4 12a8 8 0 018-8V0C5.373 0 0 
                    5.373 0 12h4zm2 5.291A7.962
                    7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z
                  "
                ></path>
              </svg>
              Зберігання...
            </>
          ) : (
            <>
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
                  d="
                    M3 16.5v2.25A2.25 2.25 0 005.25 
                    21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 
                    12L12 16.5m0 0L7.5 12m4.5 4.5V3
                  "
                />
              </svg>
              Скачати відомість
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Step3ResultsView;
