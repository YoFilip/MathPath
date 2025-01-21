import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { sections } from "../../../data/topicsData";
import { useNavigate } from "react-router-dom";

const NavbarSearch = ({ onNavigate }) => {
  const navigate = useNavigate();
  const allTopics = sections
    .flatMap((section) => ({
      ...section,
      topics: section.topics.map((topic) => ({
        ...topic,
        sectionTitle: section.title,
      })),
    }))
    .flatMap((section) => section.topics);

  const handleTopicSelect = (_, topic) => {
    if (topic) {
      const selectedTopic = allTopics.find(
        (t) =>
          t.title === topic || (typeof topic === "object" && t.id === topic.id)
      );
      if (selectedTopic) {
        onNavigate("topics");
        navigate(`/lesson/${selectedTopic.id}`);
      }
    }
  };

  return (
    <Autocomplete
      freeSolo
      className="min-w-80"
      options={allTopics}
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : `${option.title} (${option.sectionTitle})`
      }
      onChange={handleTopicSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Wyszukaj lekcję..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="text-gray-500" />
              </InputAdornment>
            ),
          }}
          className="rounded bg-navSearchBgColor"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              border: "none",
              "&, &:hover, &.Mui-focused": {
                "& fieldset": { border: "none" },
              },
            },
          }}
        />
      )}
    />
  );
};

export default NavbarSearch;
