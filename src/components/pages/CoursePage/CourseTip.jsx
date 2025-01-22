import { FaLightbulb } from "react-icons/fa";
import { InlineMath } from "react-katex";

const CourseTip = ({ content }) => {
  return (
    <div className="bg-blue-50 px-6 py-4 rounded-lg my-8">
      <h4 className="font-semibold mb-2 text-base flex items-center gap-2">
        <FaLightbulb className="text-blueBgColor" />
        Wskazówka
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {content.split(/(\$.*?\$)/).map((part, i) => {
          if (part.startsWith("$") && part.endsWith("$")) {
            return (
              <span key={i} className="katex-wrapper">
                <InlineMath math={part.slice(1, -1)} />
              </span>
            );
          }
          return part;
        })}
      </p>
    </div>
  );
};

export default CourseTip;
