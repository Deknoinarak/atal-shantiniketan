import React from "react";
import ShantiniketanLogo from "../img/shantiniketan-logo.png";

export const Footer = () => {
  return (
    <div className="transition-all dark:bg-lime-500 bg-sky-600 dark:text-gray-800 text-slate-50 w-full">
      <div className=" flex container mx-auto justify-between p-5">
        <div className="flex items-center">
          <img className="w-16 mr-3" src={ShantiniketanLogo} />
        </div>
        <div className="flex items-center">
          <a href="https://www.youtube.com/channel/UChnds8hw0N9cZmx9BwKOwOw" target="_blank">
            <i className="fa-brands fa-youtube text-3xl mr-2"></i>
          </a>
          <a href="https://www.instagram.com/Shantiniketankop/" target="_blank">
            <i className="fa-brands fa-instagram text-3xl mr-2"></i>
          </a>
          <a href="https://www.facebook.com/shantiniketankop/" target="_blank">
            <i className="fa-brands fa-facebook text-3xl mr-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
