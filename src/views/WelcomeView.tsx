import { FC } from "react";
import "../App.css";

interface WelcomeViewProps {
  onSetNewStep: () => void;
};

const WelcomeView: FC<WelcomeViewProps> = ({ onSetNewStep }) => {
  return(<div>hello starosta <button onClick={onSetNewStep}>next setp</button></div>)
}

export default WelcomeView;
