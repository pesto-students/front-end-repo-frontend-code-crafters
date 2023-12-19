import React from 'react';

export const BUTTON_TYPE_CLASSES = {
  google: 'bg-blue-500 hover:bg-blue-600',
  inverted: 'bg-white border border-black text-black hover:bg-black hover:text-white',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  let buttonClass = 'min-w-165 w-auto h-12 tracking-wide leading-12 px-8 text-sm bg-black text-white uppercase font-semibold border-none cursor-pointer flex justify-center';

  if (buttonType) {
    buttonClass += ` ${BUTTON_TYPE_CLASSES[buttonType]}`;
  }

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
