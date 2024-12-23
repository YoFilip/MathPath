import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { sections } from "../../data/sections";
import SidebarSection from "./SidebarSection";

const SidebarComponent = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="w-96 mt-10 ml-1">
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
    </div>
  );
};

export default SidebarComponent;
