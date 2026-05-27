import { useState } from "react";
import "./App.css";
import WelcomeView from "./views/WelcomeView";
import Step1StudentsView from "./views/Step1StudentsView";
import Step2SemestersView from "./views/Step3ResultsView";
import Step3ResultsView from "./views/Step3ResultsView";

function App() {
  const [ viewNum, setViewNum ] = useState(0);

  const prevStep = () => setViewNum(prev => prev - 1);
  const nextStep = () => setViewNum(prev => prev + 1);

  return (
    <div className="welcome-window-wrapper">
      <div className="bg-aurora">
        <div className="blob-one"></div>
        <div className="blob-two"></div>
        <div className="blob-three"></div>
      </div>

      {viewNum === 0 && <WelcomeView onNextStep={nextStep} />}
      {viewNum === 1 && <Step1StudentsView onPrevStep={prevStep} onNextStep={nextStep}/>}
      {viewNum === 2 && <Step2SemestersView onPrevStep={prevStep} onNextStep={nextStep}/>}
      {viewNum === 3 && <Step3ResultsView onPrevStep={prevStep} onNextStep={nextStep}/>}
      {/* {![0, 1, 2, 3, 4].includes(viewNum)
        && <ErrorView onPrevStep={prevStep} onNextStep={nextStep}/>} */}
      {/* {viewNum === 4 && <GoodbyeView onPrevStep={prevStep} onNextStep={nextStep}/>} */}
    </div>
  );

  // switch (viewNum) {
  //   case 0: return <WelcomeView onNextStep={nextStep}/>;
  //   case 1: return <Step1StudentsView onPrevStep={prevStep} onNextStep={nextStep}/>;
  //   case 2: return <Step2SemestersView onPrevStep={prevStep} onNextStep={nextStep}/>;
  //   case 3: return <Step3ResultsView onPrevStep={prevStep} onNextStep={nextStep}/>
  //   default: return;
  // };
}

export default App;
