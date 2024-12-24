import React, { useState } from "react";
import { HelpHeader } from "./HelpHeader";
import { SearchBar } from "./SearchBar";
import { FaqList } from "./FaqList";
import { useFaqItems } from "./hooks/useFaqItems";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredFaqItems } = useFaqItems(searchQuery);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <HelpHeader />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FaqList items={filteredFaqItems} />
    </div>
  );
};

export default HelpPage;
