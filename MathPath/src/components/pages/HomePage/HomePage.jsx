import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const transition = {
  duration: 0.8,
  ease: "easeOut",
};

const HomePage = ({ onNavigate }) => {
  const cards = [
    { title: "X Działów", desc: "Kompleksowy program nauczania" },
    { title: "X Tematów", desc: "Szczegółowo opracowane zagadnienia" },
    { title: "X+ Zadań", desc: "Praktyczne ćwiczenia z rozwiązaniami" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
      <motion.h1
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        transition={transition}
        className="text-7xl font-bold text-blueTextColor mt-32">
        MathPath
      </motion.h1>

      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        transition={{ ...transition, delay: 0.2 }}
        className="flex flex-col gap-4 text-center">
        <p className="text-lg text-gray-600 max-w-3xl">
          Platforma edukacyjna stworzona, aby pomóc Ci zrozumieć matematykę
          poprzez interaktywne materiały i praktyczne przykłady
        </p>
      </motion.div>

      <motion.button
        variants={{ ...animationVariants, ...buttonVariants }}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ ...transition, delay: 0.4 }}
        className="bg-blueBgColor hover:bg-blueBgColor text-white text-lg font-semibold 
                   py-4 px-8 rounded-lg transform transition-all duration-200 
                   shadow-lg hover:shadow-xl mt-4"
        onClick={() => onNavigate("topics")}>
        Rozpocznij naukę
      </motion.button>

      <div className="mt-16 grid grid-cols-3 gap-8 text-center w-full">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.6 }}
            className="p-8 bg-blueBgColor bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
