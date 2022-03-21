import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import CardData from '../data/CardData';
import CardDataTwo from '../data/CardDataTwo';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const FoodOptions = () => {
  return (
    <Wrapper>
      <section className='two'>
        {CardDataTwo.map((item) => {
          return (
            <Link to='/Shop'>
              <section className='card-container'>
                <div className='container'>
                  <div className='img-background'>
                    <img src={item.img} />
                  </div>
                  <h2>{item.name}</h2>
                  <h3>{item.description}</h3>
                  <p className='price'>${item.price}</p>
                  <div className='btn-container'>
                    <BsArrowRightCircle className='btn hollow' />
                    <BsArrowLeftCircle className='btn filled' />
                  </div>
                </div>
              </section>
            </Link>
          );
        })}
      </section>

      <section className='one'>
        {CardData.map((item) => {
          return (
            <Link to='/Shop'>
              <section className='card-container'>
                <div className='container'>
                  <div className='img-background'>
                    <img src={item.img} />
                  </div>
                  <h2>{item.name}</h2>
                  <h3>{item.description}</h3>
                  <p className='price'>${item.price}</p>
                  <div className='btn-container'>
                    <BsArrowRightCircle className='btn hollow' />
                    <BsArrowLeftCircle className='btn filled' />
                  </div>
                </div>
              </section>
            </Link>
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
    text-align: center;
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
 transition: all .2s;
 cursor: pointer;


 @media only screen and (max-width: 1300px) {
    width: 10vw;
  }

  @media only screen and (max-width: 1000px) {
    width: 8vw;
    padding:2.5rem 3rem;
  }

  @media only screen and (max-width: 800px) {
    transform: translateX(0);

  }

  @media only screen and (max-width: 700px) {
    transform: translateX(0);
    padding: .5rem 1.5rem;

    &:hover {
      transform: scale(1.1);
    }

  }

  @media only screen and (min-width: 850px) {

    &:hover {
      transform: translateX(-48%);
    }
  }
}

  .img-background  {
background-color: rgba(255, 72, 0, 0.204);
padding: 1rem;

border-radius: 50%;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

@media only screen and (max-width: 1300px) {
    padding: .25rem;
  }
  }

  img {
      max-height: 15vh;

      @media only screen and (max-width: 1200px) {
        max-height: 12vw;
      }

      @media only screen and (max-width: 1000px) {
        max-height: 10vw;
      }
  }

  h2 {
      color: rgba(0, 0, 0, 0.8);
      margin-top: 1rem;

      @media only screen and (max-width: 1200px) {
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 800px) {
        font-size: 1.2rem;

        @media only screen and (max-width: 700px) {
           font-size: 1.2rem;
           margin-bottom: 1.5rem;
          }

          @media only screen and (max-width: 500px) {
            font-size: .9rem;
            margin-bottom: 1.5rem;
           }
      }
  }
   
  h3 {
    color: rgba(0, 0, 0, 0.6);
    @media only screen and (max-width: 700px) {
        font-size: .7rem;
       }
  }

  .price {
    color: rgba(255, 72, 0, 0.7);
      font-weight: 500;

      @media only screen and (max-width: 700px) {
display: none;
      }
  }

  .btn {
    font-size: 3rem;

    @media only screen and (max-width: 700px) {
      font-size: 2rem;
       }

    &-container {
      display: flex:
      justify-content: space-between;
    }
  }

  .filled {
color: rgba(255, 72, 0, 0.8);
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
margin-left:.5rem;

@media only screen and (max-width: 700px) {
margin-left: 0;
 }

  }

  .hollow {
    color: rgba(0, 0, 0, 0.6);
    background-color: white;
    border-radius: 50%;
    margin-right: .5rem;

    @media only screen and (max-width: 700px) {
      margin-right: 0;
     }
  }
`;

export default FoodOptions;
