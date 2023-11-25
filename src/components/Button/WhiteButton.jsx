import React from 'react';

function WhiteButton({  onClick, fontSize, width, borderColor, border, fontColor, children }) {
  const defaultFontSize = '16px'; // Set your default font size here
  const defaultWidth = '15%'; // Set your default width here
  const defaultFontColor = '';
  const defaultBorderColor = '#0C64FC';

  const buttonStyle = {
    fontSize: fontSize !== undefined ? fontSize : defaultFontSize,
    width: width !== undefined ? width : defaultWidth,
    color: fontColor || defaultFontColor, 
    border: border !== undefined ? border : ` ${borderColor || defaultBorderColor}`,
    
  };

  const handleHover = (event) => {
    event.target.style.color = 'white';
  };

  const handleHoverExit = (event) => {
    event.target.style.color = fontColor || defaultFontColor;
  };

  return (
    <button
      onClick={onClick}
      className="white-button"
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <span>{children}</span>
    </button>
  );
}

export default WhiteButton;
