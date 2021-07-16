import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { hashToIndex } from './utils';

const PortfolioContainer = () => {
  useEffect(() => setCurrentPage(hashToIndex(pageData)), []);
  
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  const Page = pageData[currentPage];
  return (
    <>
      <NavTabs {...data} />
      {Page ? <Page /> : <h1> 404 Not Found</h1>}
    </>
  );
}

export default PortfolioContainer;
