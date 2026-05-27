import { FC } from "react";
import "../App.css";

interface Step3ResultsViewProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Step3ResultsView: FC<Step3ResultsViewProps> = () => {
  return (
    <div>
      Results
    </div>
  );
};

export default Step3ResultsView;
