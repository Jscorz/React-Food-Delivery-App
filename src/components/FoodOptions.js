import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import CardData from '../CardData';
import CardDataTwo from '../CardDataTwo';

const FoodOptions = () => {
  return (
    <Wrapper>
      <section className='one'>
        {CardData.map((item) => {
          return (
            <section className='card-container'>
              <div className='container'>card container</div>
            </section>
          );
        })}
      </section>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-column: 2 / 4;
  background-color: lightgrey;
  border-radius: 5rem 0 0 5rem;

  .one {
    background: linear-gradient(rgba(255, 72, 0, 0.704), rgba(255, 72, 0, 0.204));
      grid-column 2 / 3;
    grid-row: 1 / -1;
    border-radius: 5rem;

  }

.card-container {
    display: flex;
    justify-content: center;
    align-items: space-between;
}

  .container {
 background: white;
 height: 40vh;
 min-width: 60%;
 margin-top: 4vh;
 border-radius: 2rem;

  }
`;

export default FoodOptions;
