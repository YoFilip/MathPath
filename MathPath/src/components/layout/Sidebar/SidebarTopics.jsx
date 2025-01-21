import React from "react";
import { Sidebar } from "flowbite-react";
import { MdOutlinePlayLesson } from "react-icons/md";

const SidebarTopics = ({ topics, onTopicSelect, selectedTopic }) => {
  return (
    <>
      {topics.map((topic) => (
        <Sidebar.Item
          key={topic.id}
          onClick={() => onTopicSelect(topic.id)}
          className={`text-gray-600 text-xs ml-5 font-medium !justify-start cursor-pointer ${
            selectedTopic === topic.id ? "bg-white" : ""
          }`}>
          <div className="flex items-center gap-2 w-full">
            <MdOutlinePlayLesson
              className={
                selectedTopic === topic.id
                  ? "text-activeTextColor"
                  : "text-inactiveTextColor"
              }
              size={15}
            />
            <span className="text-left">{topic.title}</span>
          </div>
        </Sidebar.Item>
      ))}
    </>
  );
};

export default SidebarTopics;
