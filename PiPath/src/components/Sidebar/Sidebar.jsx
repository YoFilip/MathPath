import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { sections } from "../../data/sections";
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

const SidebarComponent = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <motion.div className="w-96 mt-10 ml-1" {...sidebarAnimation}>
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sections.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={expandedSections[section.id]}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </motion.div>
  );
};

export default SidebarComponent;
