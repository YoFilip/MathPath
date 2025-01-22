import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="border rounded-lg hover:shadow-md transition-all duration-300">
      <button
        className="w-full p-6 text-left flex justify-between items-center bg-white hover:transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}>
        <div>
          <span className="text-lg font-semibold block">{item.question}</span>
          <span className="text-sm text-gray-500">{item.category}</span>
        </div>
        <FaChevronDown
          className={`transform transition-transform duration-300 text-blueTextColor
          ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">
        <div className="px-6 pb-6 text-gray-600">{item.answer}</div>
      </motion.div>
    </motion.div>
  );
};

export default FaqItem;
