import { motion } from "framer-motion";

const DeviceWarning = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4 lg:hidden">
      <div className="text-center max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-blueTextColor">Przepraszamy!</h2>
        <p className="text-gray-600">
          MathPath jest obecnie dostępny tylko w wersji desktopowej. Aby w pełni
          korzystać z platformy, odwiedź nas na komputerze.
        </p>
        <div className="text-sm text-gray-500">
          Pracujemy nad wersją mobilną!
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceWarning;
