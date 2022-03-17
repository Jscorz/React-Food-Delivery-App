import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackHome = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
    </Wrapper>
  );
};

export default BackHome;

const Wrapper = styled.section`
  button {
    background-color: light-grey;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;
    margin-left: 10%;
    margin-top: 10%;

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
