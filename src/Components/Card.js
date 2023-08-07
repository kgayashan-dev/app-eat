import React from "react";

const Card = () => {
  return (
    <div className="max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out, Bogo's out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5">
            Order now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3304057/pexels-photo-3304057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
{/* card 2 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurent</p>
          <p className="px-2">Added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5">
            Order now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>


      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurent</p>
          <p className="px-2">Added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5">
            Order now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
