import React from "react";

const Hero = () => {
  return (
    <section style={{ backgroundColor: "#f8f8f8" }}>
      <div className="container d-flex flex-row    align-items-center">
        <div className="m-4 m-md-0">
          <h1 className="display-4 font-weight-bold text-secondary">
            INTRODUCING.... *DRUM ROLL*
          </h1>
          <h5 className="mt-3 text-justify">
            Our NEW white sauce base Whiteout Topper and 5-cheese Italian ‘Stix
            for a limited time
          </h5>
          <h5 className="mt-3">
            Cheese is fatty, meat toppings tend to be rich, and the sauce is
            sweet.
          </h5>
          <button className="btn btn-lg pizza-button mt-3">Order Now</button>
        </div>
        <div>
          <img src="images/hero.jpg" className="img-fluid d-none d-md-block " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
