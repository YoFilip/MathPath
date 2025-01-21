import { InlineMath } from "react-katex";

const ExercisesSection = ({ exercises }) => (
  <div className="space-y-6">
    {exercises.map((exercise, index) => (
      <div key={index} className="border p-4 rounded-lg text-sm bg-gray-50">
        <p className="font-medium mb-2">Ćwiczenie {index + 1}:</p>
        <div className="space-y-2">
          <p className="text-gray-600">
            {exercise.text.split(/(\$.*?\$)/).map((part, i) => {
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
          <p className="font-medium mt-2">
            <InlineMath math={exercise.math} />
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default ExercisesSection;
