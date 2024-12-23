import React from "react";
import { Sidebar } from "flowbite-react";
import { MdOutlinePlayLesson } from "react-icons/md";

const SidebarTopics = ({ topics }) => {
  return (
    <>
      {topics.map((topic) => (
        <Sidebar.Item
          key={topic.id}
          href={`#${topic.id}`}
          className="text-gray-600 text-sm ml-5 font-medium">
          <div className="flex items-center gap-2">
            <MdOutlinePlayLesson className="text-inactiveTextColor" size={15} />
            {topic.title}
          </div>
        </Sidebar.Item>
      ))}
    </>
  );
};

export default SidebarTopics;
