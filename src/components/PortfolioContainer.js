import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { hashToIndex } from './utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const PortfolioContainer = () => {
  useEffect(() => setCurrentPage(hashToIndex(pageData)), []);
  
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  const Page = pageData[currentPage];
  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}/>
      <Route path={`${process.env.PUBLIC_URL}{/about`} exact component={About}/>
      <Route path={`${process.env.PUBLIC_URL}{/blog`} exact component={Blog}/>
      <Route path={`${process.env.PUBLIC_URL}{/contact`} exact component={Contact}/>
    </BrowserRouter>
  );
}

export default PortfolioContainer;
