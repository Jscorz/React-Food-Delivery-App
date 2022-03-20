import React from 'react';
import { useState } from 'react';
import { useSidebarContext } from '../context/Context';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import links from '../data/navbarData';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Sidebar = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  return (
    <SidebarContainer>
      <section className='hide-sidebar'>
        <aside className={`${isSidebarOpen ? 'show-sidebar' : 'sidebar'}`}>
          <div className='sidebar-header'>
            <img src={logo} className='logo' alt='meals 2 u' />
            <button className='close-btn' type='button' onClick={closeSidebar}>
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
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </section>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    left: 100vw;
    width: 100%;
    height: 100%;
    background: white;
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    position: fixed;
    top: 0;
    left: 100vw;
    width: 100%;
    height: 100%;
    background: white;
    transform: translate(-100%);
    z-index: 2;
  }

  .logo {
    margin-left: 15vw;
    max-height: 5rem;
  }

  .sidebar-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20vh;
  }

  .close-btn {
    font-size: 3.5rem;
    border: none;
    background-color: transparent;
    color: rgba(255, 72, 0, 0.7);
    cursor: pointer;
    transition: all 1s;
    margin-right: 15vw;

    &:hover {
      color: rgba(255, 72, 0, 0.9);
      transform: rotate(90deg);
    }
  }

  .links {
    min-height: 90vh;
    min-width: 100%;
    background: white;

    display: flex;
    flex-direction: column;
    margin-left: 15vw;
    margin-top: 10vh;
  }

  a {
    text-transform: capitalize;
    font-size: 3.5rem;
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
`;
