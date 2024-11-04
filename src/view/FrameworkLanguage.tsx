import NodeJs from "../assets/icons/node-js.svg";
import ExpressJs from "../assets/icons/expressjs.png";
import Laravel from "../assets/icons/laravel.png";
import React from "../assets/icons/React.webp";
import PHP from "../assets/icons/php.svg";
import Flutter from "../assets/icons/flutter.png";
import Bootstrap from "../assets/icons/bootstrap.png";
import Tailwind from "../assets/icons/Tailwind.svg";

const FrameworkLanguage = () => {
  return (
    <>
      <div className="mt-10 mb-20 items-center justify-center">
        <h2 className="text-center font-bold text-4xl mb-10">
          Framework & Language
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 justify-center">
          <div className="flex justify-center items-center">
            <img
              src={NodeJs}
              alt="Node.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={ExpressJs}
              alt="Express.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={PHP}
              alt="php Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Laravel}
              alt="Laravel Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={React}
              alt="React Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Flutter}
              alt="Flutter Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Bootstrap}
              alt="bootstap Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Tailwind}
              alt="Tailwind Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworkLanguage;
