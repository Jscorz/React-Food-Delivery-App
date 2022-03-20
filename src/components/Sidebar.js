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
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='meals 2 u' />
        <button className='close-btn' type='button'>
          <FaTimes />
        </button>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 100vw;
  width: 100%;
  height: 100%;
  background: white;
  transition: all 1s;
  transform: translate(-100%);
  //   z-index: -1;
  z-index: 1;

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
      transform: rotateY(180deg);
    }
  }
`;
