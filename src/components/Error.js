import React from 'react';
import { Link } from 'react-router-dom';
import BackHome from './BackHome';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <div className='grid-second'>
          <article className='main-text'>
            <div className='container'>
              <h2>404 page not found </h2>
              <BackHome className='btn' />
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

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
    align-items: flex-end;
    min-width: 100%;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }
  }

  h2 {
    font-size: 5rem;
    font-weight: 600;
    margin-left: 10%;
    margin-top: 5%;
    color: rgba(0, 0, 0, 0.65);
    text-transform: lowercase;
    word-spacing: 0.2rem;

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

  .btn {
    padding: 0.75rem 1.5rem;
    background-color: grey;
    color: #fff;
    font-size: 1rem;
    margin-right: 2rem;
  }

  .container {
    margin-top: 5vh;
    min-width: 40vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;
  }
`;

export default Error;
