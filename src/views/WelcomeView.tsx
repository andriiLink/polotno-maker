import { FC } from "react";
import "../App.css";
import "../styles/WelcomePage.css";

interface WelcomeViewProps {
  onNextStep: () => void;
}

const WelcomeView: FC<WelcomeViewProps> = ({ onNextStep }) => {
  return (
    <div className="welcome-view-wrapper">
      <div className="welcome-view-text-wrapper">
        <h1 className="greetings">Вітаю, Старосто!</h1>
        <p className="goal-text">Якщо ти тут - це означає, що тобі потрібно скласти відомість за всі роки, що саме по собі є дуже енергозатратною та довгою роботою...</p>
        <p className="help-suggestion-text">Але я тобі допоможу зекономити час на монотонній роботі, то ж давай почнемо???</p>
      </div>

      <button className="start-button" onClick={onNextStep}>Почати</button>
    </div>
  );
};

export default WelcomeView;
