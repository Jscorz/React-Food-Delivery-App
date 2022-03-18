import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Menu = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='background'>
            <main className='card'>
              <p>No menu from us, but here are some </p>
              <span>great options</span>
              <div className='button-container'>
                <Link to='/'>
                  <button className='home'>Back to Home</button>
                </Link>
                <Link to='/Shop'>
                  <button className='button'>
                    <BsArrowRightCircle />
                  </button>
                </Link>
              </div>
            </main>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Menu;

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
      background: linear-gradient(
        to right top,
        rgba(255, 72, 0, 0.8),
        rgba(255, 72, 0, 0.704)
      );
      border-radius: 5rem;

      display: grid;
      grid-template-columns: 70% 1fr;
      transition: all 0.2s;
    }
  }

  .background {
    background-color: white;
    border-radius: 5rem;
    grid-column: 1 / 2;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.2s;
  }

  .card {
    background-color: lightgrey;
    min-height: 55vh;
    width: 65vw;
    border-radius: 5rem;

    transform: translateX(20%);
    text-transform: capitalize;
  }

  .card {
    font-size: 4rem;
    font-weight: 800;

    color: rgba(0, 0, 0, 0.65);
    padding: 3rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .button {
    color: rgba(255, 72, 0, 0.6);
    font-size: 3.5rem;
    margin-bottom: -10%;

    background: transparent;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    transform: translateY(35%);

    &:hover {
      transform: translateY(37%);
      color: rgba(255, 72, 0, 0.9);
    }
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  span {
    color: rgba(255, 72, 0, 0.6);
  }

  .home {
    background-color: light-grey;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;

    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;

    &:hover {
      transform: translateY(-3%);
      background-color: rgba(0, 0, 0, 0.1);
      color: white;
    }
    & Link {
      text-decoration: none;
    }
  }
`;
