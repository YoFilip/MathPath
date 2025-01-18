import React from "react";
import { Sidebar } from "flowbite-react";
import { FaRegCircleDot } from "react-icons/fa6";
import SidebarTopics from "./SidebarTopics";

const SidebarSection = ({
  section,
  isExpanded,
  onToggle,
  onTopicSelect,
  selectedTopic,
}) => {
  return (
    <Sidebar.Collapse
      label={
        <div
          className="flex items-center gap-2 mt-2 cursor-pointer w-full"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}>
          <FaRegCircleDot
            className={
              isExpanded ? "text-activeTextColor" : "text-inactiveTextColor"
            }
            size={15}
          />
          <span className="font-bold">{section.title}</span>
        </div>
      }
      open={isExpanded}
      className={`${
        isExpanded ? "!text-activeTextColor" : "!text-inactiveTextColor"
      }`}>
      <SidebarTopics
        topics={section.topics}
        onTopicSelect={onTopicSelect}
        selectedTopic={selectedTopic}
      />
    </Sidebar.Collapse>
  );
};

export default SidebarSection;
