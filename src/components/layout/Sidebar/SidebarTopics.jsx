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
          className="px-5 py-3 text-xs font-medium !justify-start cursor-pointer">
          <div className="flex items-center gap-2 w-full">
            <MdOutlinePlayLesson
              className={
                selectedTopic === topic.id
                  ? "text-activeTextColor"
                  : "text-inactiveTextColor"
              }
              size={15}
            />
            <span
              className={
                selectedTopic === topic.id
                  ? "text-activeTextColor"
                  : "text-inactiveTextColor"
              }>
              {topic.title}
            </span>
          </div>
        </Sidebar.Item>
      ))}
    </>
  );
};
export default SidebarTopics;
