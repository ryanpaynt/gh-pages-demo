import React from 'react'

const NavItem = ({ currentPage, handlePageChange, page }) => {
  return (
    <li className="nav-item">
      <a
        href={"#" + page.toLowerCase()}
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? 'nav-link active' : 'nav-link'}
      >
        {page}
      </a>
    </li>
  );
};

export default NavItem;
