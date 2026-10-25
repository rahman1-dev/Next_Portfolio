"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="flex h-full min-h-0 flex-col overflow-y-auto px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="relative z-0 h-[35vh] min-h-56 w-full shrink-0 sm:h-[40vh] lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* text container */}
        <div className="flex w-full flex-col items-center justify-center gap-6 px-2 py-8 text-center sm:gap-8 lg:h-full lg:w-1/2 lg:items-start lg:px-0 lg:py-0 lg:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          <p className="md:text-xl">
            Bridging the gap between elegant design and high-performance,
            responsive web applications through modern, scalable code.
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <button className="whitespace-nowrap rounded-lg bg-black p-3 text-white ring-1 ring-black sm:p-4">
              View My Work
            </button>
            <button className="whitespace-nowrap rounded-lg p-3 ring-1 ring-black sm:p-4">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
