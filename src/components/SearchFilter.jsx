import React from "react";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
