import React, { useState } from "react";

export default function TextForm(probs) {
  const UpperCaseHandle = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const LowerCaseHandle = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const GetGmail = () => {
    let newText = text.split(/\s|,/);
    let gmail = newText.filter(email => email.includes("@gmail.com"))
    setText(gmail.join(', '));
  };

  const OnHandle = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container">
        <h1>{probs.Heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={OnHandle} id="MyBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={UpperCaseHandle}>Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={LowerCaseHandle}>lowercase</button>
        <button className="btn btn-primary" onClick={GetGmail}>Get Gmail</button>
      </div>

      <div className="container my-3">
        <h1>You Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} Characters </p>
        <p>{0.0010 * text.split(" ").length} minutes to read full</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
