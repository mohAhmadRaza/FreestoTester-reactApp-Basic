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
  
  const GreenMode = () => {
    document.body.style.backgroundColor = 'green'; // Use the newMode directly
    setMyStyle({
      color : 'green',
      text : 'white'
    })
  };
  const BlueMode = () => {
    document.body.style.backgroundColor = 'blue'; // Use the newMode directly
    setMyStyle({
      color : 'white',
      backgroundColor: 'blue'
    })
  };
  const YellowMode = () => {
    document.body.style.backgroundColor = 'yellow'; // Use the newMode directly
    setMyStyle({
      color : 'black',
      backgroundColor: 'yellow'
    })
  };

  return (
    <>
      <Navbar 
        title="FreesToTester" 
        homeText="Home" 
        mode={mode} 
        toogleMode={toggleMode} 
        prompt={prompt} 
        GreenMode={GreenMode}
        BlueMode={BlueMode}
        YellowMode={YellowMode}
      />
      <Alert alert={alert} />
      <About mystyle={mystyle} />
    </>
  );
}

export default App;
