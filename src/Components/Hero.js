import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] realative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px]  flex flex-col justify-center ">
          <h1 className="px-4 text-4xl sm-text-5xl md-text-6xl lg-text-7xl font-bold">
            The <span className="text-amber-600 ">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm-text-5xl md-text-6xl lg-text-7xl font-bold">
            Foods <span className="text-orange-600 ">Services</span>
          </h1>
        </div>
        <div>
          <button>Helo</button>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img.freepik.com/free-vector/phone-repair-service-flat-composition-with-engineers-disassembling-smartphone-blue-background-vector-illustration_1284-80867.jpg?w=1800&t=st=1686297217~exp=1686297817~hmac=4fe821dd827d5a3e5dff581ffec2fcc4654423ddd1af36438722b9fdb33c61fd"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
