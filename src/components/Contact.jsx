import React from "react";
import HomePageText from "../assets/image/HomePageText.png";
import ContactUsPageGraphic from "../assets/image/ContactUsPageGraphic.png";
const Contact = () => {
  return (
    <section id="contect" className="py-10 my-5  bg1">
      <div className="container grid lg:grid-cols-2  align-items-center w-10/12 mx-auto pt-10 lg:py-0">
        <div className={`grid items-center py-6 lg:py-0 `}>
          <div>
            <div>
              <h1 className="text-red-900 font-bold text-3xl">
                <span className="text-red-400"> JOIN NOW</span> TO GET IN SHAPE
              </h1>
              <p className="py-7 leading-8 text-lg">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat
                nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                adipiscing leo egestas nisi elit risus sit. Nunc cursus
                sagittis.
              </p>
            </div>
            {/* === form === */}

            <form>
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  className="bg-red-300 border placeholder-white border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-400 dark:focus:border-red-400"
                  placeholder="Your name"
                  required
                  name="name"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-red-300 border placeholder-white border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm placeholder-white text-gray-900 bg-red-300 rounded-lg border border-red-300 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-red-900 uppercase  bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="grid lg:justify-end">
          <div>
            <img className="w-full " src={ContactUsPageGraphic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
