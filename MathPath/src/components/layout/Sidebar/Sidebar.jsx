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
  const [activeSection, setActiveSection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const customTheme = {
    root: {
      base: "h-full w-64",
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4",
    },
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => {
      const newState = {
        ...prev,
        [sectionId]: !prev[sectionId],
      };

      if (newState[sectionId]) {
        setActiveSection(sectionId);
      } else if (sectionId === activeSection) {
        setActiveSection(null);
      }

      return newState;
    });
  };

  const handleTopicSelect = (topicId) => {
    onTopicSelect(topicId);
  };

  return (
    <motion.div className="w-60 mt-10" {...sidebarAnimation}>
      <Sidebar theme={customTheme}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sections.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={expandedSections[section.id]}
                isActive={activeSection === section.id}
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
