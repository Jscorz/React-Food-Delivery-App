import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import CardData from '../CardData';
import CardDataTwo from '../CardDataTwo';

const FoodOptions = () => {
  return (
    <Wrapper>
      <section className='two'>
        {CardDataTwo.map((item) => {
          return (
            <section className='card-container'>
              <div className='container'>
                <div className='img-background'>
                  <img src={item.img} />
                </div>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <p>${item.price}</p>
              </div>
            </section>
          );
        })}
      </section>

      <section className='one'>
        {CardData.map((item) => {
          return (
            <section className='card-container'>
              <div className='container'>
                <div className='img-background'>
                  <img src={item.img} />
                </div>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <p>${item.price}</p>
              </div>
            </section>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-column: 2 / 4;
  align-items: space-between;
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
transform: translateX(-50%);
 background: white;
 height: 40vh;
 min-width: 12vw;
 padding: 1rem;
 margin-top: 4vh;
 border-radius: 2rem;

 display: flex;
 flex-direction: column;
 align-items: center;
 box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  .img-background  {
background-color: rgba(255, 72, 0, 0.204);
padding: 1rem;
margin-top: .5rem;
border-radius: 50%;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  img {
      max-height: 15vh;
  }

  h2 {
      color: rgba(0, 0, 0, 0.8);
      margin-top: 1rem;
  }
   
  h3 {
    color: rgba(0, 0, 0, 0.6);
  }

  p {
      color: rgba(0,0,0,0.6)
      font-weight: 300;
  }
`;

export default FoodOptions;
