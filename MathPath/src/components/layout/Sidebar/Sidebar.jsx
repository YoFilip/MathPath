import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { sections } from "../../../data/topicsData";
import SidebarSection from "./SidebarSection";
import { motion } from "framer-motion";

const sidebarAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: 0.5,
    type: "spring",
    stiffness: 100,
  },
};

const SidebarComponent = ({ onTopicSelect }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(null);

  const customTheme = {
    root: {
      base: "h-full w-64",
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4",
    },
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleTopicSelect = (topicId) => {
    onTopicSelect(topicId);
  };

  return (
    <motion.div className="w-96 mt-10 ml-1" {...sidebarAnimation}>
      <Sidebar theme={customTheme}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sections.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={expandedSections[section.id]}
                onToggle={() => toggleSection(section.id)}
                onTopicSelect={handleTopicSelect}
                selectedTopic={selectedTopic}
              />
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </motion.div>
  );
};

export default SidebarComponent;
