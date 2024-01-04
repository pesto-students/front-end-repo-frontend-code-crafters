import React from "react";
import harvestlyLogo from "../assets/logo/logo-no-bg.png";
function LogoText() {
  return (
    <div className="flex items-center space-x-2 h-20 w-auto ml-5">
      <img className="h-8 w-8" src={harvestlyLogo} alt="Harvestly" />
      <span className="text-black text-2xl font-medium">Harvestly</span>
    </div>
  );
}

export default LogoText;
