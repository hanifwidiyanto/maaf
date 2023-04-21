import React, { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ setBalas }) {
  const [thumb, setThumb] = useState(false);
  return (
    <div className="w-full px-12 flex h-fit items-center justify-between">
      <div
        className="flex flex-col gap-2"
      >
        <span className="text-sm">ingin membalas pesan ini?</span>
        <button
          onClick={() => setBalas(true)}
          className="bg-slate-50 px-4 py-2 rounded-md text-slate-950 w-fit text-xs"
        >
          membalas
        </button>
      </div>
      {thumb ? (
        <div className="flex gap-2 relative">
          <FaThumbsUp
            onClick={() => setThumb(!thumb)}
            className=" duration-100 text-slate-50 text-2xl cursor-pointer hover:-rotate-45"
          />
          <span className="text-xs absolute top-8 w-44 text-end right-0">
            kamu menyukai pesan ini
          </span>
        </div>
      ) : (
        <FaRegThumbsUp
          onClick={() => setThumb(!thumb)}
          className=" duration-100 text-slate-50 text-2xl cursor-pointer hover:-rotate-45"
        />
      )}
    </div>
  );
}
