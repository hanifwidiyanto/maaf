import Image from "next/image";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setDate(true);
    }, 200);
  }, []);

  return (
    <nav className="px-6 py-4 flex justify-between h-fit items-center absolute top-0 w-full">
      <motion.div initial={{ x: "-200%" }} animate={{ x: "0%" }}>
        <Image
          src="/hanif.jpg"
          width={36}
          height={36}
          priority
          alt="x"
          className="rounded-full hover:saturate-50"
        />
      </motion.div>
      <motion.div
        initial={{ x: "200%" }}
        animate={{ x: "0%" }}
        className="bg-gray-600 text-sm rounded-full px-6 py-2"
      >
        {date && format(time, "HH:mm:ss")}
      </motion.div>
    </nav>
  );
}
