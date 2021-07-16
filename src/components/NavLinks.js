import React from 'react'

const NavLink = ({ currentPage, handlePageChange, page }) => {
  const onClick = () => handlePageChange(page);
  const to = "/" + (page === 'Home' ? '' : page.toLowerCase());
  const className = currentPage === page ? 'nav-link active' : 'nav-link';
  const data = { onClick, to, className };

  return (
    <li className="nav-item">
      <a {...data}>{page}</a>
    </li>
  );
};

const NavLinks = ({ currentPage, handlePageChange, pages }) => {
  return pages.map(page => {
    const data = { page, currentPage, handlePageChange }; 
    return <NavLink key={page} {...data} />;
  }); 
};


export default NavLinks;