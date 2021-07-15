import React from 'react';
import NavItem from './NavItem';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ pages, currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {pages.map(page => {
        const data = { page, currentPage, handlePageChange }; 
        return <NavItem key={page} {...data} />;
      })}
    </ul>
  );
}

export default NavTabs;
