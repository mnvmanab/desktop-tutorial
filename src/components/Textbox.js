import React, { useState } from 'react';

export default function Textbox(props) {
  //functions--
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    myFunc(newText);
    props.showAlert('Converted to uppercase !', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    myFunc(newText);
    props.showAlert('Converted to lowercase !', 'success');
  };

  const handleClear = () => {
    let newText = '';
    myFunc(newText);
    props.showAlert('Text cleared !', 'success');
  };

  const handleCopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    // text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard !', 'success');
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    myFunc(newText.join(' '));
    props.showAlert('Extra spaces are removed !', 'success');
  };

  const handleOnChange = (event) => {
    // console.log('On change hua');
    myFunc(event.target.value);
  };

  const [text, myFunc] = useState('');

  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>
          convert lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClear}>
          clear text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpace}>
          remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(' ').length} minutes read</p>

        <h2>Preview</h2>
        <p>
          <i>{text.length > 0 ? text : 'enter text to preview'}</i>
        </p>
      </div>
    </>
  );
}
