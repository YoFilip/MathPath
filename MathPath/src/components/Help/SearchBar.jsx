import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";

export const SearchBar = ({ searchQuery, onSearchChange }) => {
  const animationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      className="mb-8 relative">
      <input
        type="text"
        placeholder="Wyszukaj pytanie..."
        className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchQuery}
      />
      <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </motion.div>
  );
};
