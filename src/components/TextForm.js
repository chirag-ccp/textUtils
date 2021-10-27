import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleToUpper = (event) => {
    setText(text.toUpperCase());
    props.showAlert("success", "Text has been converted to uppercase");
  };

  const handleToLower = (event) => {
    setText(text.toLowerCase());
    props.showAlert("success", "Text has been converted to lowercase");
  };

  const handleClearText = (event) => {
    setText("");
    props.showAlert("success", "Text cleared");
  };

  const handleCopy = () => {
    var myText = document.getElementById("myBox");
    myText.select();
    navigator.clipboard.writeText(myText.value);
    props.showAlert("success", "Text copied to clipboard !");
  };

  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            onChange={handleTextChange}
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#322f3e",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button onClick={handleToUpper} className="btn btn-primary mx-3">
          Convert to Uppercase
        </button>
        <button onClick={handleToLower} className="btn btn-primary mx-3">
          Convert to Lowercase
        </button>
        <button onClick={handleClearText} className="btn btn-primary mx-3">
          Clear Text
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-3">
          Copy
        </button>
      </div>
      <div className="container my-3">
        <hr />
        <h3>Text Summary</h3>
        <ul>
          <li>{text.split(" ").length} words</li>
          <li>{text.length} characters</li>
          <li>
            {Math.ceil(text.split(" ").length * (1 / 300))} minute read 🧾
          </li>
        </ul>
        <hr />
        <h3>Preview</h3>
        {text}
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TextForm;
