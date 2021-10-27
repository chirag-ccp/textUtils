import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleState = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#101150";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("success", "Dark mode has been enabled !");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("success", "Light mode has been enabled !");
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>


      {/* <Router> */}
       
          <Navbar title="TextUtils" mode={mode} toggleState={toggleState} />
          <Alert alert={alert} />
          {/* <Switch> */}
            {/* <Route exact path="/"> */}
              <TextForm
                heading="Enter your text below"
                mode={mode}
                showAlert={showAlert}
              />
            {/* </Route> */}
            {/* <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        
      </Router> */}
    </>
  );
}

export default App;
