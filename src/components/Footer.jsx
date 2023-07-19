import React from "react";
import logo from "../assets/image/logo.png";
const Footer = () => {
  return (
    <section className="bg-red-200 py-10">
      <div className="container w-10/12 mx-auto grid lg:grid-cols-2 ">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt=" Logo" />
          </a>
          <p className="py-5 lg:w-11/12 leading-8">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="grid sm:grid-cols-2 py-5 lg:py-0">
          <div className="lg:mx-auto">
            <h1 className="text-lg text-red-900 font-bold">Link</h1>
            <ul className="leading-8 py-5">
              <li>
                <a href="#" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">Our Classes</a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h1 className="text-lg text-red-900 font-bold">Contact Us</h1>
            <div className="leading-8 py-5">
              <p>Tempus metus mattis risus volutpat egestas.</p>
              <p>(333)425-6825</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
