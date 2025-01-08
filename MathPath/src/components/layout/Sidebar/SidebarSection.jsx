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
      key={section.id}
      label={
        <div className="flex items-center gap-2 mt-2">
          <FaRegCircleDot
            className={
              isExpanded ? "text-activeTextColor" : "text-inactiveTextColor"
            }
            size={15}
          />
          <span className="font-bold float-left">{section.title}</span>
        </div>
      }
      open={isExpanded}
      onClick={onToggle}
      className={
        isExpanded ? "!text-activeTextColor" : "!text-inactiveTextColor"
      }
      renderChevronIcon={() => null}>
      <SidebarTopics
        topics={section.topics}
        onTopicSelect={onTopicSelect}
        selectedTopic={selectedTopic}
      />
    </Sidebar.Collapse>
  );
};

export default SidebarSection;
