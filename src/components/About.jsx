import React from "react";
import about1 from "./homeimage/about-1.png";
const About = () => {
  return (
    <>
     
     <div className="p-8 px-36">

      <header className="mb-8 text-left">
        <h1 className="text-3xl font-bold">About Us</h1>
      </header>

      <div className="flex items-center justify-center">
        <div className="flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={about1} alt="About Us" />
        </div>
        <div className="ml-8 max-w-lg">
          <p className="text-lg">
            Welcome to our company! We are dedicated to providing the best service.
            Our team is composed of professionals with a wealth of experience in the industry.
            We believe in quality, commitment, and customer satisfaction. Join us on our journey
            to make a difference.
          </p>
        </div>
      </div>

      <div className="flex pt-10 items-center justify-center"> 
        <div className="ml-8 max-w-lg">
          <p className="text-lg">
            Welcome to our company! We are dedicated to providing the best service.
            Our team is composed of professionals with a wealth of experience in the industry.
            We believe in quality, commitment, and customer satisfaction. Join us on our journey
            to make a difference.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={about1} alt="About Us" />
        </div>
      </div>

      <div className="flex pt-10 items-center justify-center"> 
      <div className="flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={about1} alt="About Us" />
        </div>
        <div className="ml-8 max-w-lg">
          <p className="text-lg">
            Welcome to our company! We are dedicated to providing the best service.
            Our team is composed of professionals with a wealth of experience in the industry.
            We believe in quality, commitment, and customer satisfaction. Join us on our journey
            to make a difference.
          </p>
        </div>
      </div>

    </div>
    </>
  );
};

export default About;
