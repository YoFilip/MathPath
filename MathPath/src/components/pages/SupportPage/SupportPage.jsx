import { useState } from "react";
import SupportHeader from "./SupportHeader";
import SearchBox from "./SearchBox";
import FaqList from "./FaqList/FaqList";
import { useFaq } from "./hooks/useFaq";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredFaqItems } = useFaq(searchQuery);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <SupportHeader />
      <SearchBox searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FaqList items={filteredFaqItems} />
    </div>
  );
};

export default SupportPage;
