import React from "react";
import BenefitsPageGraphic from "../assets/image/BenefitsPageGraphic.png";
import line from "../assets/image/line.png";
const HappyMember = () => {
  return (
    <section>
      <div className="container grid lg:grid-cols-2  align-items-center w-10/12 mx-auto pt-10 lg:py-0">
        <div className="grid lg:justify-start">
          <div className="">
            <img
              className="w-11/12 object-contain"
              src={BenefitsPageGraphic}
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center ">
          <div>
            <img src={line} className="-ml-14" alt="" />
            <h1 className="mb-2 text-red-900 text-4xl tracking-tight font-bold dark:text-white">
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-red-400">FIT</span>
            </h1>
            <div className="pb-8">
              <p className="py-5 leading-8">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="leading-8">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="text-red-900 bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-10 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyMember;
