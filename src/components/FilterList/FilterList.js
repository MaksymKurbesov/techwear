/* eslint-disable react/prop-types */
import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import styles from './Filter.module.css';


const FilterList = ({ filters, handleClick }) => {
  const filterElements = filters.map(filter => {
    return (
      <FilterItem 
        filter={filter} 
        changeFilter={handleClick} 
        key={filter.label}
      />
    )
  })

  return (
    <ul className={styles.filterList}>
      {filterElements}
    </ul>
  )
};

export default FilterList;