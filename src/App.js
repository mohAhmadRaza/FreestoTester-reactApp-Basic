import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="FreesToTester" homeText="Home"/>
      {/* <div className="container my-3"><TextForm Heading="Email Form"/></div> */}
      <About/>
    </>
  );
}

export default App;
