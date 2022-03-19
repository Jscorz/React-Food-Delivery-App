import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import links from '../data/navbarData';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Sidebar = () => {
  //   const { isSidebarOpen, closeSidebar } = useProductsContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='meals 2 u' />
          <button
            className='close-btn'
            type='button'
            onClick={setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to='/' onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
