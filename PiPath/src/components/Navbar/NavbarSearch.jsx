import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { sections } from "../../data/sections";

const allTopics = sections.flatMap((section) => section.topics);

const searchStyles = {
  "& .MuiOutlinedInput-root": {
    height: "50px",
    border: "none",
    outline: "none",
    "&, &:hover, &.Mui-focused": {
      "& fieldset, & .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },
  "& .MuiAutocomplete-paper": {
    backgroundColor: "#F7F8FA",
  },
  "& .MuiInputBase-input:focus": {
    boxShadow: "none",
    border: "none",
    outline: "none",
  },
};

function NavbarSearch() {
  return (
    <div className="relative flex items-center w-full max-w-2xl">
      <Autocomplete
        freeSolo
        className="min-w-72"
        id="free-solo-2-demo"
        options={allTopics.map((option) => option.title)}
        filterOptions={(options, state) =>
          state.inputValue === ""
            ? []
            : options.filter((option) =>
                option.toLowerCase().includes(state.inputValue.toLowerCase())
              )
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search..."
            InputProps={{
              ...params.InputProps,
              type: "text",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-500" />
                </InputAdornment>
              ),
            }}
            className="p-2 pl-10 rounded bg-navSearchBgColor"
            fullWidth
            sx={searchStyles}
          />
        )}
        sx={searchStyles}
      />
    </div>
  );
}

export default NavbarSearch;
