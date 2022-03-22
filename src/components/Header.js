import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import MainText from './MainText';
import FoodOptions from './FoodOptions';

const Header = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <MainText />
          <FoodOptions />
        </article>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .grid {
    background-color: lightgrey;
    min-height: 100vh;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 5rem;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }

    &-second {
      margin: 2rem;
      min-width: 95%;
      background-color: orange;
      border-radius: 5rem;

      display: grid;
      grid-template-columns: 60% 1fr 1fr;
    }
  }
`;
