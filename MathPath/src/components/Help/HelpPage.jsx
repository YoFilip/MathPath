import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { faqCategories } from "../../data/helpCenterData";
const animationVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqItems = Object.values(faqCategories).flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.title,
    }))
  );

  const filteredFaqItems = allFaqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <motion.div className="text-center mb-16">
        <motion.h1
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-blueTextColor mb-4">
          Centrum Pomocy
        </motion.h1>
        <p className="text-gray-600">
          Znajdź odpowiedzi na najczęściej zadawane pytania
        </p>
      </motion.div>

      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        className="mb-8 relative">
        <input
          type="text"
          placeholder="Wyszukaj pytanie..."
          className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </motion.div>

      <div className="space-y-4">
        {filteredFaqItems.map((item, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="border rounded-lg hover:shadow-md transition-all duration-300">
            <button
              className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-300"
              onClick={() => toggleFaq(index)}>
              <div>
                <span className="text-lg font-semibold block">
                  {item.question}
                </span>
                <span className="text-sm text-gray-500">{item.category}</span>
              </div>
              <FaChevronDown
                className={`transform transition-transform duration-300 text-blueTextColor
                ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden">
              <div className="px-6 pb-6 text-gray-600">{item.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
