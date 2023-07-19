import React from "react";

const MoreThanGym = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container w-10/12 mx-auto">
        <div>
          <h1 className="text-red-900 font-bold text-3xl">
            MORE THAN JUST GYM.
          </h1>
          <p className="py-7 leading-8 text-lg">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. <br />
            We provide true care into each and every member.
          </p>
        </div>

        {/* ======== card ========== */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="text-center py-20 px-6 bg-white border-2 border-red-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-red-200 w-12 h-12  border-2 border-red-300  rounded-full m-auto  flex justify-center items-center">
              <svg
                className="w-4 h-4 text-red-900 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
            </div>
            <a href="#">
              <h5 className="py-3 text-red-900 text-xl font-semibold tracking-tight  dark:text-white">
                State of the Art Facilities
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a
              in lectus pellentesque. Ullamcorper et.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-red-400 font-bold hover:underline"
            >
              Learn More
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div className="text-center py-20 px-6 bg-white border-2 border-red-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-red-200 w-12 h-12  border-2 border-red-300 rounded-full m-auto  flex justify-center items-center">
              <svg
                className="w-4 h-4 text-red-900 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
            </div>
            <a href="#">
              <h5 className="py-3 text-red-900 text-xl font-semibold tracking-tight  dark:text-white">
                100's of Diverse Classes
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Eu ipsum id egestas risus tempus enim semper felis quis. Nec
              consectetur ac venenatis facilisi est. Eget ac turpis id.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-red-400 font-bold hover:underline"
            >
              Learn More
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div className="text-center py-20 px-6 bg-white border-2 border-red-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-red-200 w-12 h-12  border-2 border-red-300  rounded-full m-auto  flex justify-center items-center">
              <svg
                className="w-4 h-4 text-red-900 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
            </div>
            <a href="#">
              <h5 className="py-3 text-red-900 text-xl font-semibold tracking-tight  dark:text-white">
                Expert and Pro Trainers
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl.
              Lacus at mi sit pellentesque. Congue parturient.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-red-400 font-bold hover:underline"
            >
              Learn More
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanGym;
