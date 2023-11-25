import React from 'react';


function CustomButton({ text, onClick, fontSize, width, height,children }) {
  const defaultFontSize = '12px'; // Set your default font size here
  const defaultWidth = ' '; // Set your default width here
  const defaultHeight = '';

  const buttonStyle = {
   
    // ... (existing styles)
    fontSize: fontSize !== undefined ? fontSize : defaultFontSize,
    width: width !== undefined ? width : defaultWidth,
    height: height!== undefined ? height : defaultHeight,
  };
  

  return (
    <button onClick={onClick} className="custom-button" style={buttonStyle}>
      <span>{children}</span>
    </button>
  );
}

export default CustomButton;
