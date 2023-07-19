import React from "react";
import HomePageText from "../assets/image/HomePageText.png";
import HomePageGraphic from "../assets/image/HomePageGraphic.png";
const Banner = () => {
  return (
    <section id="home" className="bg-orange-50">
      <section className="bg">
        <div className="container grid lg:grid-cols-2  align-items-center w-10/12 mx-auto pt-10 lg:py-0">
          <div className={`grid items-center `}>
            <div>
              <img className="object-contain " src={HomePageText} alt="" />
              <p className="py-5">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
              <div className="flex items-center">
                <button
                  type="button"
                  className="text-red-900 bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-10 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Join Now
                </button>
                <a className="mx-5 text-red-500 font-bold">Learn More</a>
              </div>
            </div>
          </div>
          <div className="grid lg:justify-end">
            <div className="">
              <img
                className="w-11/12 object-contain"
                src={HomePageGraphic}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
