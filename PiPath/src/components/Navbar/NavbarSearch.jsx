import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const topics = [
  { title: "Pojęcie ciągu" },
  { title: "Sposoby określania ciągu" },
  { title: "Ciągi monotoniczne" },
  { title: "Ciągi określone rekurencyjnie" },
  { title: "Ciąg arytmetyczny" },
  { title: "Suma początkowych wyrazów ciągu arytmetycznego" },
  { title: "Ciąg geometryczny" },
  { title: "Suma początkowych wyrazów ciągu geometrycznego" },
  { title: "Ciągi arytmetyczne i ciągi geometryczne - zadania" },
  { title: "Ciągi liczb całkowitych - warto wiedzieć" },
  { title: "Procent składany" },
  { title: "Granica ciągu" },
  { title: "Ciągi rozbieżne" },
  { title: "Obliczanie granic ciągów" },
  { title: "Szereg geometryczny" },
  { title: "Zagadnienia uzupełniające" },
];

function NavbarSearch() {
  return (
    <div className="relative flex items-center w-full max-w-2xl">
      <Autocomplete
        freeSolo
        className="min-w-72"
        id="free-solo-2-demo"
        disableClearable
        options={topics.map((option) => option.title)}
        filterOptions={(options, state) => {
          if (state.inputValue === "") {
            return [];
          }
          return options.filter((option) =>
            option.toLowerCase().includes(state.inputValue.toLowerCase())
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search..."
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-500" />
                </InputAdornment>
              ),
            }}
            className="p-2 pl-10 rounded bg-navSearchColor active:bg-navSearchColor focus:outline-none"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                height: "50px",
              },
            }}
          />
        )}
        sx={{
          width: "100%",
          "& .MuiAutocomplete-paper": {
            backgroundColor: "#F7F8FA",
          },
          height: "50px",
        }}
      />
    </div>
  );
}

export default NavbarSearch;
