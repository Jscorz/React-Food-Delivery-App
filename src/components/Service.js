import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='main-text'>
            Here's our mission statement and why we love our customers!
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.section`
  .grid {
    background-color: lightgrey;
    min-height: 100vh;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 8%;

    &-second {
      margin: 2rem;
      min-width: 95%;
      background: white;
      border-radius: 5rem;

      display: grid;
      grid-template-columns: 40% 1fr 1fr;
    }
  }

  .main-text {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    background: linear-gradient(
      to right top,
      rgba(255, 72, 0, 0.8),
      rgba(255, 72, 0, 0.704)
    );
    border-radius: 5rem;
  }
`;
