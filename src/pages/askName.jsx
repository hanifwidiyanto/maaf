import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AskName({ setUsername, maafText }) {
const [nameUser, setNameUser] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    setUsername(name);
    setNameUser(name)
    const data ={
        "Nama": name,
        "PesanSaya": maafText,
        "TanggalSubmit": Date.now()
    }
    axios.defaults.headers.post["Content-Type"] = "text/plain";
    try {
         const res = await axios.post('https://script.google.com/macros/s/AKfycbwgBqpJKRzKMsL_FOXJ6T-1KizTtF6ZeXDTEwD8Qy1DNN3zA1MWVLTrlYddH4BKkSkM/exec', data)
    } catch(err) {
        console.log(err)
    }
    console.log(data)
  };
  return (
    <motion.div
      initial={{ y: "-200%" }}
      animate={{ y: "0%" }}
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="rounded-md flex flex-col items-center justify-center gap-3 bg-slate-100 w-64 h-48">
        <h1 className="text-slate-950 font-bold text-lg tracking-wide">
          Siapa namamu
        </h1>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <input
            autoComplete="off"
            type="text"
            className="border-t-0 border-x-0 border-b-2 border-slate-950 focus:border-b-4 focus:outline-none bg-slate-100 rounded-md p-2 text-slate-950 text-center hover:"
            id="name"
          />
          <button
            type="submit"
            className="text-slate-100 text-sm rounded-md py-2 bg-slate-950 w-fit px-4"
          >
            submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
