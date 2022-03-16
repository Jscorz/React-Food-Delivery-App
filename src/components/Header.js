import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'></article>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .grid {
    background-color: lightgrey;
    min-height: 80vh;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 8%;

    &-second {
      margin: 2rem;
      min-width: 95%;
      background-color: white;
      border-radius: 8%;
    }
  }
`;
