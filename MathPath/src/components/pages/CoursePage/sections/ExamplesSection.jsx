import { InlineMath } from "react-katex";

const ExamplesSection = ({ examples }) => (
  <div className="space-y-6">
    {examples.map((example, index) => (
      <div key={index} className="border p-4 rounded-lg bg-gray-50">
        <p className="font-medium mb-2">Przykład {index + 1}:</p>
        <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          {example.content.split(/(\$.*?\$)/).map((part, i) => {
            if (part.startsWith("$") && part.endsWith("$")) {
              return (
                <span key={i} className="katex-wrapper">
                  <InlineMath math={part.slice(1, -1)} />
                </span>
              );
            }
            return part;
          })}
        </div>
        {example.solution && (
          <div className="text-gray-600 mt-4 flex gap-1 items-baseline">
            <span>Rozwiązanie:</span>
            <span className="mr-1">{example.solution.text}</span>
            <span>
              <InlineMath math={example.solution.math} />
            </span>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ExamplesSection;
