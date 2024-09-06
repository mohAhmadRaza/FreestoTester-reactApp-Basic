import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [prompt, setPrompt] = useState('Enable Dark Mode');

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
    }
    else{
      setMode('light');
      setPrompt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
      })
    }
  }
  return (
    <>
      <Navbar title="FreesToTester" homeText="Home" mode={mode} toogleMode={toggleMode} prompt={prompt}/>
      <About mystyle={mystyle}/>
    </>
  );
}

export default App;
