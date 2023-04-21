import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

const CardFlip = ({ setFlipped, maafText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setFlipped(true);
  };

  return (
    <div
      
      className={`card cursor-pointer ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front bg-yellow-600 p-6">
        <div className="w-full h-full border-2 text-center font-semibold text-md p-4 border-slate-950 rounded-md flex items-center justify-center">
          buka kartu permintaan maaf dari saya
        </div>
      </div>
      <div className="card-back bg-slate-100 p-6">
        <div className="w-full h-full border-2 text-center text-sm p-2 border-slate-950 rounded-sm flex items-center justify-center text-slate-950 relative ">
          <BsMoonStarsFill className="absolute top-4 text-slate-950" />
          {maafText}
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
