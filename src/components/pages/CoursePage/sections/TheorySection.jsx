import { InlineMath } from "react-katex";
import CourseTip from "../CourseTip";

const TheorySection = ({ theory, tip }) => (
  <div className="space-y-6">
    {theory.map((section, index) => (
      <section key={index}>
        <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          {section.content.split(/(\$.*?\$)/).map((part, i) => {
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
      </section>
    ))}
    {tip && <CourseTip content={tip} />}
  </div>
);

export default TheorySection;
