import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';

const Feedback = () => {
  return (
    <Wrapper>
      <section>
        <h3 className='title'>We Want Your Feedback!</h3>
        <form>
          <label htmlFor='Customer Name'>
            <input type='text' placeholder='Your Name' />
          </label>
        </form>
        <form>
          <label htmlFor='Restaurant Name'>
            <input type='text' placeholder='Restaurant Name' />
          </label>
        </form>
        <main className='container'>
          <form>
            <label htmlFor='Customer Name'>
              <input
                type='text'
                placeholder='Email Address'
                className='short-input'
              />
            </label>
          </form>
          <form>
            <label htmlFor='Phone Number'>
              <input
                type='text'
                placeholder='Phone Number'
                className='short-input'
              />
            </label>
          </form>
        </main>
        <form>
          <label htmlFor='Feedback'>
            <input type='text' placeholder='Tell Us About Your Order' />
          </label>
        </form>
        <button type='submit'>Submit</button>
      </section>
    </Wrapper>
  );
};

export default Feedback;

const Wrapper = styled.section`
  grid-column: 2 /-1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-40%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5rem;

  @media only screen and (max-width: 1250px) {
    box-shadow: none;
  }

  @media only screen and (max-width: 500px) {
    transform: translateX(-10%);
  }

  section {
    background: lightgrey;
    min-width: 30vw;
    min-height: 30vh;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1250px) {
      border-radius: 2.5rem;
    }

    @media only screen and (max-width: 700px) {
      border-radius: 1rem;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  input {
    padding: 0.5rem;
    min-width: 25vw;
    border-radius: 5rem;
    border: none;

    @media only screen and (max-width: 700px) {
      width: 6vw;
    }
  }

  .short-input {
    min-width: 12.5vw;

    @media only screen and (max-width: 1250px) {
      max-width: 12.5vw;
    }
  }

  button {
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 0.7rem;
    cursor: pointer;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0.5rem;

    &:hover {
      transform: translateY(-3%);
      background-color: rgba(0, 0, 0, 0.1);
      color: white;
    }

    @media only screen and (max-width: 800px) {
      padding: 0.3rem 1.1rem;
    }

    @media only screen and (max-width: 600px) {
      padding: 0.2rem 0.8rem;
    }
  }

  .title {
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0.5rem;
    text-align: center;
    @media only screen and (max-width: 1000px) {
      font-size: 0.7rem;
    }
  }
`;
