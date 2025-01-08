import { FaLightbulb } from "react-icons/fa";

const CourseTip = ({ content }) => {
  return (
    <div className="bg-blue-50 px-6 py-10 rounded-lg my-8">
      <h4 className="font-semibold mb-2 flex items-center gap-2">
        <FaLightbulb className="text-blueBgColor" />
        Wskazówka
      </h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default CourseTip;
