import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FoodOptions from './FoodOptions';
import tacobell from '../assets/tacobell.png';

const Shop = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='background'>
            <div className='main-container'>
              <main className='column-1'>
                <section className='card-container-2'>
                  <div className='img-container'>
                    <img src={tacobell} alt='taco bell' />
                  </div>
                  <div className='text-container'>
                    <h3>Taco Bell</h3>
                    <div className='text-container-second'>
                      <h5>0.4mi</h5>
                      <h5>11 min</h5>
                      <h5>$3.99 delivery fee</h5>
                    </div>
                  </div>
                </section>
                <section className='card-container-2'>
                  <div className='img-container'>
                    <img src={tacobell} alt='taco bell' />
                  </div>
                  <div className='text-container'>
                    <h3>Taco Bell</h3>
                    <div className='text-container-second'>
                      <h5 className='margin-left'>0.4mi</h5>
                      <h5>11 min</h5>
                      <h5>$3.99 delivery fee</h5>
                    </div>
                  </div>
                </section>
              </main>
              <main className='column-2'>
                <section className='card-container'>
                  <div className='img-container'>
                    <img src={tacobell} alt='taco bell' />
                  </div>
                  <div className='text-container'>
                    <h3>Taco Bell</h3>
                    <div className='text-container-second'>
                      <h5>0.4mi</h5>
                      <h5>11 min</h5>
                      <h5>$3.99 delivery fee</h5>
                    </div>
                  </div>
                </section>
                <section className='card-container'>
                  <div className='img-container'>
                    <img src={tacobell} alt='taco bell' />
                  </div>
                  <div className='text-container'>
                    <h3>Taco Bell</h3>
                    <div className='text-container-second'>
                      <div className='distance-container'>
                        <h5 className='margin-left'>| 0.4mi </h5>
                        <h5>| 11 min</h5>
                      </div>
                      <h5>$3.99 delivery fee</h5>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Shop;

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
        to bottom,
        rgba(255, 72, 0, 0.7),
        rgba(255, 72, 0, 0.1)
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
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.2s;
  }

  .card-container {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    background-color: white;
    border: 1px solid lightgrey;
    margin-left: 15vw;
    margin-top: 10vh;
  }

  .card-container-2 {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    background-color: white;
    border: 1px solid lightgrey;
    margin-top: 10vh;
    margin-left: 15vw;
  }

  img {
    min-width: 20vw;
    object-fit: cover;
    display: block;
  }

  .text-container {
    display: flex;
    padding: 2rem 2rem 2rem 1rem;
    flex-direction: column;
    justify-content: space-around;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
  }

  .main-container {
    display: flex;
  }

  .distance-container {
    display: flex;
    flex-direction: row;
  }

  .margin-left {
    margin-right: 1.5rem;
  }

  h3 {
    color: rgba(0, 0, 0, 0.8);
  }

  h5 {
    color: rgba(0, 0, 0, 0.6);
  }
`;
