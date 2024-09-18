import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [prompt, setPrompt] = useState("Enable Dark Mode");

  // Use States for Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Changing background of accordian
  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const removeClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('bg-' + cls)
    
    const colorMap = {
      primary : '#4d79ff',
      danger : '#ff4d4d',
      success : '#4dff88',
      warning : '#ffdb4d',
    }

    setMyStyle({
      color : colorMap[cls],
      backgroundColor : 'white',
    })

    if (cls === null){
      if (prompt.includes("Dark")) {
        setMode("dark");
        setPrompt("Enable Light Mode");
        document.body.style.backgroundColor = "black";
        setMyStyle({
          color: "white",
          backgroundColor: "black",
        });
        showAlert("Dark mode enabled", "success");
        document.title = "FreesToTester - Dark Mode Enabled";
      } else if (prompt.includes("Light")) {
        setMode("light");
        setPrompt("Enable Dark Mode");
        document.body.style.backgroundColor = "white";
        setMyStyle({
          color: "black",
          backgroundColor: "white",
        });
        showAlert("Light mode enabled", "success");
        document.title = "FreesToTester - Dark Mode Enabled";
      }
      setTimeout(() => {
        document.title = "FreesToTester - Home";
      }, 1500);
    }
    
  };


  return (
    <>
      <Router>
        <Navbar
          title="FreesToTester"
          aboutText="About"
          homeText="Home"
          mode={mode}
          toogleMode={toggleMode}
          prompt={prompt}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/About" element={<About mystyle={mystyle} />} />
          <Route exact path="/Home" element={<TextForm Heading="FreestoTester"/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
