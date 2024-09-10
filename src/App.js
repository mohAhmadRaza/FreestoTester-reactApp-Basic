import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [prompt, setPrompt] = useState('Enable Dark Mode');
  
  // Use States for Alert
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
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
    if (prompt.includes('Dark')) {
      setMode('dark');
      setPrompt('Enable Light Mode');
      document.body.style.backgroundColor = 'black';
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      showAlert("Dark mode enabled", "success");
    } else if (prompt.includes('Light')) {
      setMode('light');
      setPrompt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      showAlert("Light mode enabled", "success");
    }
  };
  
  const EnableSpecificMode = (newMode) => {
    setMode(newMode); // Update the mode
    document.body.style.backgroundColor = newMode; // Use the newMode directly
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode enabled`, "success");
  };

  return (
    <>
      <Navbar 
        title="FreesToTester" 
        homeText="Home" 
        mode={mode} 
        toogleMode={toggleMode} 
        prompt={prompt} 
        EnableSpecificMode={EnableSpecificMode}
      />
      <Alert alert={alert} />
      <About mystyle={mystyle} />
    </>
  );
}

export default App;
