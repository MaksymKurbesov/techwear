import React from "react";
import FilterItem from "./FilterItem/FilterItem";
import styles from "./FilterList.module.css";

const FilterList = ({
  filters,
  handleClick,
  isVisibleFilter,
  setIsVisibleFilter,
}) => {
  const filterElements = filters.map((filter) => {
    return (
      <FilterItem
        filter={filter}
        changeFilter={handleClick}
        key={filter.label}
        setIsVisibleFilter={setIsVisibleFilter}
      />
    );
  });

  return (
    <ul
      className={`${styles.filterList} ${
        !isVisibleFilter ? styles.filterListActive : ""
      }`}
    >
      {filterElements}
    </ul>
  );
};

export default FilterList;
