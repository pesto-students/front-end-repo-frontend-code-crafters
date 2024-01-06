import React from "react";
import LogoText from "./LogoText";
import whiteLogo from "../assets/logo/logo-no-bg-white.png";
import line from "../assets/landing/line.png"
import paymentGateways from "../assets/landing/payment.png"
import socialMedia from "../assets/landing/social-media.png"

const PageFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <section className="flex justify-between px-28 py-20">
        <div className="max-w-32">
          <LogoText
            div="flex items-center space-x-2 h-8"
            text="text-white text-2xl font-medium"
            src={whiteLogo}
          />
          <p className="font-normal text-xs mt-2">
            Harvestly provides fresh, hygienic, high quality ingredients and
            supplies to its customers
          </p>
        </div>
        <div className="mx-2">
          <h2 className="font-semibold text-white">Email</h2>
          <img className="my-2" src={line}/>
          <p className="font-normal text-xs mt-2">help@harvestly.com</p>
          <h2 className="font-semibold text-white mt-2">Phone</h2>
          <img className="my-2" src={line}/>
          <p className="font-normal text-xs mt-2">+91-9999999999</p>
        </div>
        <div className="mx-2">
          <h2 className="font-semibold text-white">Address</h2>
          <img className="my-2" src={line}/>
          <p className="font-normal text-xs mt-2">2609, Guru Raj Marg, Opposite State Bank of India, Bandra West, Mumbai, Maharashtra 400050, India</p>
          <h2 className="font-semibold text-white mt-2">FSSAI</h2>
          <p className="font-normal text-xs mt-2">License No. 10020064002537</p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Follow Us</h2>
          <img className="mt-2 mb-5" src={line}/>
          <img src={socialMedia} alt="social media logos"></img>
        </div>
      </section>
      <div className="flex items-center justify-between border-t border-gray-400 py-4">
        <p className="font-normal text-xs pl-10">Harvestly © 2023. All Rights Reserved</p>
        <p className="font-normal text-xs">Privacy Policy</p>
        <img src={paymentGateways} alt="payment gateways" className="pr-10"></img>
      </div>
    </footer>
  );
};

export default PageFooter;
