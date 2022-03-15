import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [links, setLinks] = useState(false);

  return (
    <Wrapper>
      <section className='section'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            porro. Velit a maxime ullam quae perferendis nesciunt explicabo
            nulla alias.
          </p>
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
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .toggle {
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  img {
    max-height: 5rem;
  }
`;
