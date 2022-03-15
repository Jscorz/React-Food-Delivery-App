import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import links from '../navbarData';

const Navbar = () => {
  const [links, setLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  console.log(links);
  return (
    <Wrapper>
      <section className='section'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />

          <button className='toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {/* {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })} */}
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  .nav-header {
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .toggle {
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    border: 2px solid black;
    border-radius: 50%;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  img {
    max-height: 5rem;
  }
`;
