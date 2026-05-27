import { FC } from "react";
import "../App.css";

interface Step1StudentsViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step1StudentsView: FC<Step1StudentsViewProps> = ({ onPrevStep, onNextStep }) => {
  return (
    <div className="first-step-wrapper">
      <div className="first-step-text-wrapper">
        <h1 className="uppload-studenst-text">Завантаження студентів</h1>
        <p>На цьому етапі нам потрібно зрозуміти для яких студентів ми будемо створювати відомість</p>
        <p>Ти можеш обрати два способи як ти хочеш вказати студентів групи</p>
      </div>

      <button>Завантажити як файл</button>
      <button>Ввести вручну</button>

      <button onClick={onPrevStep}>Prev setp</button>
      <button onClick={onNextStep}>Next setp</button>
    </div>
  );
};

export default Step1StudentsView;
