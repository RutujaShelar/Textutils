import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enable dark mode ", "success");
      document.title = "textutils-dark mode";

      // setTimeout(() => {
      //   document.title="textutils is amazing"
      // }, 2000);
      // setTimeout(() => {
      //   document.title="install textutils"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enable light mode ", "success");
      document.title = "textutils-light mode";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>
          <TextForm
            mode={mode}
            heading="Enter the text below to analyze"
            showAlert={showAlert}
          />
        
    </>
  );
}

export default App;
