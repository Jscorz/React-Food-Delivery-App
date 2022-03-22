import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmailCard from './EmailCard';
import Feedback from './Feedback';
import BackHome from './BackHome';

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
            <div className='shadow'>
              <BackHome />
            </div>
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
    border-radius: 5rem;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }

    &-second {
      margin: 2rem;
      min-width: 95%;
      background: white;
      border-radius: 5rem;

      display: grid;

      grid-template-columns: 70% 1fr;
      transition: all 0.2s;

      @media only screen and (max-width: 600px) {
        justify-items: center;
      }

      @media only screen and (max-width: 550px) {
        justify-items: center;
        border-radius: 1rem;
      }
    }
  }

  .main-text {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background: linear-gradient(
      to bottom,
      rgba(255, 72, 0, 0.7),
      rgba(255, 72, 0, 0.05)
    );
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    margin-left: 10%;
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.65);

    @media only screen and (max-width: 1200px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 800px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`;
