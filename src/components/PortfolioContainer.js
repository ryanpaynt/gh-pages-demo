import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const pageData = { Home, About, Blog, Contact };

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    if (window.location.hash) {
      const hashValue = window.location.hash.split('#')[1];
      const pages = Object.keys(pageData).map(page => page.toLowerCase());
      const index = pages.indexOf(hashValue);
      const hashPage = Object.keys(pageData)[index];
      setCurrentPage(hashPage);
    }
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);
  const Page = pageData[currentPage];
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  return (
    <div>
      <NavTabs {...data} />
      <Page />
    </div>
  );
}
