import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderOnlinePage from './pages/OrderOnlinePage';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navbar onPageChange={handlePageChange} />
      <div>
        {activePage === 'home' && <HomePage />}
        {activePage === 'menu' && <MenuPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'order' && <OrderOnlinePage />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
