import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import axios from "axios";

export default function Membalas({ name }) {
  const [nameUser, setNameUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if(name) setNameUser(name)
  }, [name]);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pesan = e.target.elements.pesan.value;
    console.log(pesan);
    if (pesan) setLoading(true);
    const data = {
      Nama: nameUser,
      PesanKamu: pesan,
      TanggalSubmit: Date.now(),
    };
    axios.defaults.headers.post["Content-Type"] = "text/plain";
    // console.log(data)
    try {
      const res = await axios.post(
        "https://script.google.com/macros/s/AKfycbw84USC5rNAVoUF4CwMXQPIJW1ngYnbbtJx-ktKcjOk1P7ydc3F4YUz_H0NBG6lNIgk/exec",
        data
      );
      console.log(res)
      setTimeout(() => {
        setSent(true);
        e.target.elements.pesan.value = "";
        setLoading(false);
        setTimeout(() => {
          setSent(false);
          setTimeout(() => {
            router.reload();
          }, 600);
        }, 1200);
      }, 1200);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };
  return (
    <motion.div
      initial={{ y: "-200%" }}
      animate={{ y: "0%" }}
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="rounded-md flex flex-col items-center justify-center gap-3 bg-slate-100 w-80 h-64">
        <h1 className="text-slate-950 font-bold text-md tracking-wide">
          Pesanmu
        </h1>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <textarea
            autoComplete="off"
            type="text"
            className="border-t-0 border-x-0 w-72 border-b-2 border-slate-950 focus:border-b-4 focus:outline-none bg-slate-100 rounded-md p-2 text-slate-950 text-center hover:"
            id="pesan"
          ></textarea>
          <button
            type="submit"
            className="text-slate-100 rounded-md bg-slate-950 w-28 h-12 flex text-sm items-center justify-center"
          >
            {loading ? (
              <div className="flex gap-2 p-2 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-slate-50"></span>
                <span className="w-2 h-2 rounded-full bg-slate-50"></span>
                <span className="w-2 h-2 rounded-full bg-slate-50"></span>
              </div>
            ) : (
              "kirim pesan"
            )}
          </button>
          {sent ? <span className="text-slate-950">pesan terkirim</span> : ""}
        </form>
      </div>
    </motion.div>
  );
}
