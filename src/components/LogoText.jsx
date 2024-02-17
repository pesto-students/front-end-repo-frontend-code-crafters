import React from "react";
function LogoText(props) {
  const {text, src, div} = props
  return (
    <div className={div}>
      <img className="h-8 w-8" src={src} alt="Harvestly" />
      <span className={text}>Harvestly</span>
    </div>
  );
}

export default LogoText;
