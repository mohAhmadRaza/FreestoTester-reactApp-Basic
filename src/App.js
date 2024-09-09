import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [prompt, setPrompt] = useState('Enable Dark Mode');
  
  //Use States for Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      setPrompt('Enable Light Mode');
      document.body.style.backgroundColor = 'black';
      setMyStyle({
        color : 'white',
        backgroundColor : 'black'
      })
      showAlert("Dark mode enabled", "success");
    }
    else{
      setMode('light');
      setPrompt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
      })
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="FreesToTester" homeText="Home" mode={mode} toogleMode={toggleMode} prompt={prompt}/>
      <Alert alert={alert}/>
      <About mystyle={mystyle}/>
    </>
  );
}

export default App;
