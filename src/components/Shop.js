import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import RestaurantData from '../data/RestaurantData';
import RestaurantDataTwo from '../data/RestaurantDataTwo';
import tacobell from '../assets/tacobell.jpg';
import pizzahut from '../assets/pizzahut.jpg';
import pho from '../assets/pho.jpg';
import burger from '../assets/burger.jpg';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Shop = () => {
  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='background'>
            <div className='main-container'>
              <main className='column-1'>
                {RestaurantData.map((rest) => {
                  return (
                    <section className='card-container-2'>
                      <div className='img-container'>
                        <img src={rest.img} alt='pizza hut' />
                      </div>
                      <div className='card-info-container'>
                        <div className='text-container'>
                          <h3>{rest.name}</h3>
                          <div className='text-container-second'>
                            <div className='distance-container'>
                              <h5 className='margin-right'>| {rest.miles}</h5>
                              <h5>| {rest.time}</h5>
                            </div>
                            <h5>| {rest.fee}</h5>
                          </div>
                        </div>
                        <article className='arrow-container'>
                          <h4>Popular Items</h4>
                          <IoIosArrowDropupCircle className='arrow' />
                        </article>
                      </div>
                    </section>
                  );
                })}
              </main>
              <main className='column-2'>
                {RestaurantDataTwo.map((rest) => {
                  return (
                    <section className='card-container'>
                      <div className='img-container'>
                        <img src={rest.img} alt='burger spot' />
                      </div>
                      <div className='card-info-container'>
                        <div className='text-container'>
                          <h3>{rest.name}</h3>
                          <div className='text-container-second'>
                            <div className='distance-container'>
                              <h5 className='margin-right'>| {rest.miles}</h5>
                              <h5>| {rest.time}</h5>
                            </div>
                            <h5>| {rest.fee}</h5>
                          </div>
                        </div>
                        <article className='arrow-container'>
                          <h4>Popular Items</h4>
                          <IoIosArrowDropupCircle className='arrow' />
                        </article>
                      </div>
                    </section>
                  );
                })}
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

    @media only screen and (max-width: 550px) {
      justify-content: center;
    }
  }

  .card-container {
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid lightgrey;
    margin-left: 15vw;
    margin-top: 10vh;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    border-radius: 0.5rem;

    @media only screen and (min-width: 800px) {
      &:hover {
        transform: scale(1.05);
      }
    }

    @media only screen and (max-width: 550px) {
      min-width: 40vw;
      margin-left: 5vw;
      margin-top: 10%;
    }
  }

  .card-container-2 {
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid lightgrey;
    margin-top: 10vh;
    margin-left: 15vw;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    border-radius: 0.5rem;

    @media only screen and (min-width: 800px) {
      &:hover {
        transform: scale(1.05);
      }
    }

    @media only screen and (max-width: 550px) {
      min-width: 40vw;
      margin-left: 25vw;
      margin-top: 10%;

      transform: translateY(-25%);
    }
  }

  .card-info-container {
    min-width: 30vw;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
      max-width: 10vw;
    }
  }

  img {
    min-width: 30vw;
    max-height: 20vh;
    object-fit: cover;
    display: block;
    border-radius: 0.5rem;

    @media only screen and (max-width: 1200px) {
      max-width: 30vw;
    }

    @media only screen and (max-width: 550px) {
      min-width: 40vw;
      height: 30vh;
    }
  }

  .text-container {
    display: flex;
    padding: 1rem 2rem 2rem 1rem;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (max-width: 1200px) {
      max-width: 5vw;
    }
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
    margin-bottom: 1vh;
    margin-top: 1vh;
  }

  .margin-right {
    margin-right: 1.5rem;
  }

  h3 {
    color: rgba(0, 0, 0, 0.8);
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
  }

  h4 {
    color: rgba(0, 0, 0, 0.7);

    @media only screen and (max-width: 1200px) {
      visibility: hidden;
    }
  }

  h5 {
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }

  .arrow-container {
    display: flex;
    align-items: center;
    padding: 1rem 2rem 2rem 1rem;
    align-self: flex-end;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      transform: translate(-45%, 60%);
    }

    @media only screen and (max-width: 550px) {
      transform: translate(-30%, 60%);
    }
    @media only screen and (max-width: 500px) {
      transform: translate(-40%, 60%);
    }
    @media only screen and (max-width: 450px) {
      transform: translate(-45%, 60%);
    }
    @media only screen and (max-width: 400px) {
      transform: translate(-55%, 60%);
    }
  }

  .arrow {
    font-size: 2.3rem;
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.4);
    transition: all 1s;
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 0.7);
      transform: rotate(90deg);
    }
  }
`;
