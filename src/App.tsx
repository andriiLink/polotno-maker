import { useState } from "react";
import WelcomeView from "./views/WelcomeView";
import Step1StudentsView from "./views/Step1StudentsView";
import Step2SemestersView from "./views/Step2SemestersView";
import Step3ResultsView from "./views/Step3ResultsView";


function App() {
  const [ viewNum, setViewNum ] = useState(0);

  const prevStep = () => setViewNum(prev => prev - 1);
  const nextStep = () => setViewNum(prev => prev + 1);

  return (
    <div className="
      relative 
      min-h-screen w-full overflow-hidden 
      bg-[#0d1117] font-sans text-white"
    >    
      <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden">
        <div className="
          absolute 
          -left-[10%] -top-[10%] h-[500px] w-[500px] 
          rounded-full 
          bg-gradient-to-r from-cyan-400/25 to-blue-500/0 blur-[80px]" 
        />
        <div className="
          absolute 
          -right-[5%] top-[30%] h-[600px] w-[600px] 
          rounded-full 
          bg-gradient-to-r from-purple-600/20 to-transparent blur-[100px]"
        />
        <div className="
          absolute 
          bottom Lod-[10%] left-[15%] h-[450px] w-[450px] 
          rounded-full 
          bg-gradient-to-r from-emerald-400/15 to-transparent blur-[90px]"
        />
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
}

export default App;
