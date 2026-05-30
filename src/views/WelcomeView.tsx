import { FC } from "react";
import { CustomButton } from "../components/CustomButton";

interface WelcomeViewProps {
  onNextStep: () => void;
}

const WelcomeView: FC<WelcomeViewProps> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col gap-30 p-20">
      <section className="flex flex-col gap-10 items-center">
        <h1 className="text-4xl">Вітаю, Старосто!</h1>
        <p>
          Якщо ти тут - це означає, що тобі потрібно скласти відомість за всі
          роки, що саме по собі є дуже енергозатратною та довгою роботою...
        </p>
        <p>
          Але я тобі допоможу зекономити час на монотонній роботі, то ж давай
          почнемо???
        </p>
      </section>

      <CustomButton className="w-2/3 m-auto" onClick={onNextStep}>
        Почати
      </CustomButton>
    </div>
  );
};

export default WelcomeView;
