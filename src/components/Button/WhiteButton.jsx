import React from 'react';

function WhiteButton({ text, onClick, fontSize, width, borderColor, border, fontColor,backgroundColor }) {
  const defaultFontSize = '16px'; // Set your default font size here
  const defaultWidth = '126px'; // Set your default width here
  const defaultBorderColor = '#0C64FC';
  const defaultFontColor = 'black';
  const defaultBackgroundColor = 'white';

  const buttonStyle = {
    fontSize: fontSize !== undefined ? fontSize : defaultFontSize,
    width: width !== undefined ? width : defaultWidth,
    border: border !== undefined ? border : ` ${borderColor || defaultBorderColor}`,
    color: fontColor || defaultFontColor, 
    backgroundColor: backgroundColor || defaultBackgroundColor, 
  };

  return (
    <button onClick={onClick} className="white-button" style={buttonStyle}>
      {text}
    </button>
  );
}

export default WhiteButton;
