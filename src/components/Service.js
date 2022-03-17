import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmailCard from './EmailCard';
import Feedback from './Feedback';

const Service = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='main-text'>
            <h1>
              Have Any <br />
              Questions Or <br />
              Suggestions ?
            </h1>
          </div>
          <Feedback />
          <EmailCard />
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
      grid-template-columns: 70% 1fr;
      transition: all 0.2s;
    }
  }

  .main-text {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background: linear-gradient(
      to right top,
      rgba(255, 72, 0, 0.8),
      rgba(255, 72, 0, 0.704)
    );
    border-radius: 5rem;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    margin-left: 10%;
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.65);

    @media only screen and (max-width: 1000px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 800px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`;
