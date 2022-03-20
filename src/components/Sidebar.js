import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import links from '../data/navbarData';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Sidebar = () => {
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
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className='links-container'>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={`/{text}`}></Link>
                  <a href={url} onClick={() => setIsSidebarOpen(false)}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 100vw;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 1s;
    transform: translate(-100%);
    visibility: hidden;
  }

  .show-sidebar {
    position: fixed;
    top: 0;
    left: 100vw;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 1s;
    transform: translate(-100%);
    visibility: visible;
    z-index: 5;
  }

  .logo {
    margin-left: 5rem;
    max-height: 5rem;
  }

  .sidebar-header {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .close-btn {
    font-size: 3.5rem;
    border: none;
    background-color: transparent;
    color: rgba(255, 72, 0, 0.7);
    cursor: pointer;
    transition: all 1s;

    &:hover {
      color: rgba(255, 72, 0, 0.9);
      transform: rotate(90deg);
    }
  }
`;
