import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import links from '../navbarData';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  console.log(links);
  return (
    <Wrapper>
      <section className='section'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className='toggle'>
            <FaBars />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  .nav-header {
    min-width: 90vw;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0;
  }

  .toggle {
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    margin-right: 2rem;
    border: none;
    border-radius: 50%;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  img {
    max-height: 5rem;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    font-size: 1.5rem;
    text-transform: Capitalize;
    margin-left: 2rem;
    color: yellow;
    text-decoration: none;
  }
`;
