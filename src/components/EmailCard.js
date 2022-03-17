import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';

const EmailCard = () => {
  return (
    <Wrapper>
      <section>Email Component</section>
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
  }
`;
