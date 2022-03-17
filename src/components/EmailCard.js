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

  section {
    background: lightgrey;
    min-width: 30vw;
    min-height: 15vh;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 2rem;
    white-space: nowrap;
    margin-right: 1rem;
  }

  button {
    font-size: 2.5rem;
    color: rgba(255, 72, 0, 0.6);
    background: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: -1rem;
  }
`;
