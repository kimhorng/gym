import React from "react";
import Image01 from "../assets/image/image1.png";
import Image02 from "../assets/image/image2.png";
import Image03 from "../assets/image/image3.png";
import Image04 from "../assets/image/image4.png";
import Image05 from "../assets/image/image5.png";
import Image06 from "../assets/image/image6.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function OurClass() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cards = [
    {
      img: Image01,
      title: "Weight Training Classes",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: Image02,
      title: "Yoga Classes",
      //   decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: Image03,
      title: "Ab Core Classes",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: Image04,
      title: "Adventure Classes",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: Image05,
      title: "Fitness Classes",
      //   decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: Image06,
      title: "Training Classes",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <section id="ourclass" className="py-20 bg-red-200 my-10">
      <div className="container w-10/12 mx-auto">
        <div>
          <h1 className="text-red-900 font-bold text-3xl">OUR CLASSES</h1>
          <p className="py-7 leading-8 text-lg">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. <br /> Mauris velit euismod elementum arcu
            neque facilisi. <br /> Amet semper tortor facilisis metus nibh.
            Rhoncus sit enim mattis odio in risus nunc.
          </p>
        </div>
        {/* ====card==== */}

        <Carousel responsive={responsive}>
          {cards.map((card) => (
            <div className="mx-1 group">
              <img src={card.img} alt="" />
              <div className="invisible  text-white absolute flex justify-center items-center z-10 top-0 h-full w-full group-hover:visible group-hover:bg-red-500 group-hover:bg-opacity-75 ease-in-out duration-500 translate-x-0">
                <div className="w-11/12 mx-auto text-center">
                  <h1 className="text-xl font-semibold">{card.title}</h1>
                  <p className="py-3">{card.decs}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default OurClass;
