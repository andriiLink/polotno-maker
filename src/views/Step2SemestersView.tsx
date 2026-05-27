import { FC } from "react";
import "../App.css";

interface Step2SemestersViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step2SemestersView: FC<Step2SemestersViewProps> = ({ onPrevStep, onNextStep }) => {
  return (
    <div>
      Upload semesters files
      <button onClick={onPrevStep}>Prev setp</button>
      <button onClick={onNextStep}>Next setp</button>
    </div>
  );
};

export default Step2SemestersView;
