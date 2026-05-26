import { useState } from "react";
import "./App.css";
import WelcomeView from "./views/WelcomeView";

function App() {
  const [ viewNum, setViewNum ] = useState(0);

  const nextStep = () => setViewNum(prev => prev + 1);
  const prevStep = () => setViewNum(prev => prev - 1);

  switch (viewNum) {
    case 0: return <WelcomeView onSetNewStep={nextStep}/>;
  };
}

export default App;
