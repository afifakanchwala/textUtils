import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //function for button
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase(); //use to change the text to uppercase.
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Clear text!", "success");
  };
  const handleReverseClick = () => {
    let reverseText = text.split("");
    reverseText = reverseText.reverse();
    reverseText = reverseText.join("");
    reverseText = reverseText.replace(",", "");
    setText(reverseText);
    props.showAlert("Converted to reverse text!", "success");
  };
  const handleOnChange = (event) => {
    //function for textarea
    //console.log("On Change");
    setText(event.target.value);
  };
  // this is array of stored colors
  //   const color = [
  //     "red",
  //     "blue",
  //     "yellow",
  //     "orange",
  //     "green",
  //     "black",
  //     "pink",
  //     "salmon",
  //     "teal",
  //   ];
  // this is function
  //   const changeColor = (number) => {
  //     document.getElementById("textArea").style.color = color[number];
  //   };

  const [text, setText] = useState(""); //syntax for State using  Hooks i.e.useState.
  //text="new text";  // wrong way to change the state.
  //setText("new text"); //Right way to change the state.
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : " #042743",
        }}
      >
        {/* <div class="extt-bg-info "> */}
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} //value of text will come from state.
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : " white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        {/* this is onclick function call to change textarea color.  */}
        {/* <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={() => changeColor(Math.floor(Math.random() * 5))}
        >
          Change Color
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : " black",
        }}
      >
        <h2> Your Text Summary</h2>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>

        {/* <div class="text-bg-info "> */}
        {/* </div> */}
        <h3> Preview</h3>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it "}
        </p>
      </div>
    </>
  );
}
