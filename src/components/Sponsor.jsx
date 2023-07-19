import React from "react";
import SponsorRedBull from "../assets/image/SponsorRedBull.png";
import forbes from "../assets/image/forbes.png";
import fortune from "../assets/image/fortune.png";
const Sponsor = () => {
  return (
    <section className="bg-red-200 py-10 md:-mt-8">
      <div className="container w-10/12 mx-auto grid grid-cols-3 md:grid-cols-5 items-center">
        <div>
          <img
            src={SponsorRedBull}
            className="object-contain md:w-auto w-8/12"
            alt=""
          />
        </div>
        <div>
          <img
            src={forbes}
            className="object-contain md:w-auto w-8/12"
            alt=""
          />
        </div>
        <div>
          <img
            src={fortune}
            className="object-contain md:w-auto w-8/12"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
