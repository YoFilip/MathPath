import { motion } from "framer-motion";

const SupportHeader = () => {
  const animationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
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
  );
};

export default SupportHeader;
