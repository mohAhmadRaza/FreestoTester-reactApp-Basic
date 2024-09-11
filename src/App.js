import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

  const toggleMode = () => {
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
  };

  const GreenMode = () => {
    document.body.style.backgroundColor = "green"; // Use the newMode directly
    setMyStyle({
      color: "green",
      text: "white",
    });
  };
  const BlueMode = () => {
    document.body.style.backgroundColor = "blue"; // Use the newMode directly
    setMyStyle({
      color: "white",
      backgroundColor: "blue",
    });
  };
  const YellowMode = () => {
    document.body.style.backgroundColor = "yellow"; // Use the newMode directly
    setMyStyle({
      color: "black",
      backgroundColor: "yellow",
    });
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
          GreenMode={GreenMode}
          BlueMode={BlueMode}
          YellowMode={YellowMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/About" element={<About mystyle={mystyle} />} />
          <Route path="/Home" element={<TextForm Heading="FreestoTester"/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
