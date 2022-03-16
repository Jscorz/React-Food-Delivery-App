import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';

const FoodOptions = () => {
  return (
    <Wrapper>
      <section className='one'>card section</section>;
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-column: 2 / 4;
  background-color: lightgrey;
  border-radius: 5rem;

  .one {
    background: linear-gradient(rgba(255, 72, 0, 0.704), rgba(255, 72, 0, 0.204));
      grid-column 2 / 3;
    grid-row: 1 / -1;
    border-radius: 5rem;
  }
`;

export default FoodOptions;
