import React, { useState } from "react";
import { COLOR, MODE } from "../constants/constant";

interface TextFormProps {
  label: string;
  mode: string;
}

const TextForm = (props: TextFormProps) => {
  const [text, setText] = useState("");

  function handleClearCase(e: any) {
    e.preventDefault();
    setText("");
  }

  const handleUpperCase = (e: any) => {
    e.preventDefault();
    setText(text.toUpperCase());
  };

  function handleLowerCase(e: any) {
    e.preventDefault();
    setText(text.toLowerCase());
  }

  function handleTitleCase(e: any) {
    e.preventDefault();
    const newText = text
      .split(" ")
      .map((txt) => txt.charAt(0).toUpperCase() + txt.slice(1, txt.length))
      .join(" ");
    setText(newText);
  }

  function handleSentenceCase(e: any) {
    e.preventDefault();
    const newText = text
      .split(". ")
      .map((txt) => txt.charAt(0).toUpperCase() + txt.slice(1, txt.length))
      .join(". ");
    setText(newText);
  }

  function handleReversedCase(e: any) {
    e.preventDefault();
    const newText = text.split("").reverse().join("");
    setText(newText);
  }

  function handleRemoveSpace(e: any) {
    e.preventDefault();
    let newText = text.trim();
    newText = newText.replace(/\s+/g, " ");
    setText(newText);
  }

  return (
    <>
      <div className="h-100 w-100">
        <div className="container">
          <form>
            <div className="form-group mt-5">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlTextarea1"
              >
                {props.label}
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={7}
                placeholder="Enter your text here..."
                style={{
                  backgroundColor:
                    props.mode === MODE.DARK ? COLOR.DARK_GREY : COLOR.WHITE,
                  color: props.mode === MODE.DARK ? COLOR.WHITE : COLOR.BLACK,
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={handleClearCase}
            >
              Clear Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2 ml-3"
              onClick={handleUpperCase}
            >
              Upper Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2  ml-3"
              onClick={handleLowerCase}
            >
              Lower Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2 ml-3"
              onClick={handleTitleCase}
            >
              Title Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2 ml-3"
              onClick={handleSentenceCase}
            >
              Sentence Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2 ml-3"
              onClick={handleReversedCase}
            >
              Reversed Case
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2 ml-3"
              onClick={handleRemoveSpace}
            >
              Remove Space
            </button>
          </form>
        </div>
        <div className="container my-3">
          <div className="container my-3">
            <h4>
              <i>Text Summery : </i>
            </h4>
            <span>
              Word count : {text.split(" ").length - 1} | Character count :{" "}
              {text.length}
            </span>
            <br />
            <span>
              take {((text.split(" ").length - 1) * 0.24) / 60} Minutes to read
              this text.
            </span>
          </div>
          <div className="container my-3">
            <h3>
              <i>Preview : </i>
            </h3>
            <p>
              {text.length > 0 ? text : "Enter something to preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;
