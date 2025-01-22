import React from "react";
import { Sidebar } from "flowbite-react";
import { FaRegCircleDot } from "react-icons/fa6";
import SidebarTopics from "./SidebarTopics";

const SidebarSection = ({
  section,
  isExpanded,
  isActive,
  onToggle,
  onTopicSelect,
  selectedTopic,
}) => {
  return (
    <Sidebar.Collapse
      label={
        <div
          className="flex items-center gap-2 mb-2 mt-2 cursor-pointer w-full hover:bg-transparent"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}>
          <FaRegCircleDot
            className={
              isActive ? "text-activeTextColor" : "text-inactiveTextColor"
            }
            size={15}
          />
          <span
            className={`font-bold text-sm ${
              isActive ? "text-activeTextColor" : "text-inactiveTextColor"
            }`}>
            {section.title}
          </span>
        </div>
      }
      open={isExpanded}
      className="bg-transparent pt-2 mt-1 pb-2 pl-5 pr-5"
      theme={{
        root: {
          base: "group",
          chevron: {
            base: `${
              isActive ? "text-activeTextColor" : "text-inactiveTextColor"
            } h-6 w-6 shrink-0 transition-transform`,
            open: {
              off: "",
              on: "rotate-180",
            },
          },
        },
      }}>
      <SidebarTopics
        topics={section.topics}
        onTopicSelect={onTopicSelect}
        selectedTopic={selectedTopic}
      />
    </Sidebar.Collapse>
  );
};

export default SidebarSection;
