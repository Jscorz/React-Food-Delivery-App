import React, { useState, useRef } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';

import '../index.css';
import styled from 'styled-components';

const EmailCard = () => {
  return (
    <Wrapper>
      <section>
        <a
          rel='noreferrer'
          target='_blank'
          href='mailto:jkscorzafava@gmail.com'
        >
          <h1 className='email'>Send Us an email</h1>
          <button>
            <AiTwotoneMail />
          </button>
        </a>
      </section>
    </Wrapper>
  );
};

export default EmailCard;

const Wrapper = styled.section`
  grid-column: 2 /-1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-40%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5rem;
  margin-top: 5rem;

  @media only screen and (max-width: 1250px) {
    box-shadow: none;
  }

  section {
    background: lightgrey;
    min-width: 30vw;
    min-height: 15vh;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 800px) {
      min-height: 10vh;
    }
    @media only screen and (max-width: 600px) {
      border-radius: 1rem;
      min-height: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3%);
    }
  }

  .email {
    font-weight: 300;
    font-size: 2rem;
    white-space: nowrap;
    margin-right: 1rem;

    @media only screen and (max-width: 1250px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 800px) {
      font-size: 0.7rem;
    }
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  button {
    font-size: 2.5rem;
    color: rgba(255, 72, 0, 0.4);
    background: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: -1rem;

    @media only screen and (max-width: 800px) {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;
