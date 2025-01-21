import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CourseNavigation = ({ prevLesson, nextLesson, onNavigate }) => {
  return (
    <div className="mt-8 flex justify-between items-center pt-6 border-t">
      {prevLesson ? (
        <button
          onClick={() => onNavigate(prevLesson.id)}
          className="text-gray-600 hover:text-blueBgColor text-sm flex items-center gap-2">
          <FaArrowLeft size={12} />
          {prevLesson.title}
        </button>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <button
          onClick={() => onNavigate(nextLesson.id)}
          className="bg-blueBgColor text-white text-sm px-6 py-2 rounded-lg hover:opacity-90 flex items-center gap-2">
          {nextLesson.title}
          <FaArrowRight size={12} />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default CourseNavigation;
