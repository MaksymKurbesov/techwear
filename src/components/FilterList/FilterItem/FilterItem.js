/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FilterItem.module.css';

const FilterItem = ({ filter, changeFilter }) => {
  return (
    <li className={styles.filterItem} key={filter.label}>
      <NavLink 
        activeClassName={styles.activeFilter} 
        onClick={() => changeFilter(filter.type)} 
        to={filter.link} 
        exact
      >
        {filter.label}
      </NavLink>
    </li>
  )
}

export default FilterItem;