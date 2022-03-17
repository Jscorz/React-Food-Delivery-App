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

  section {
    background: grey;
    min-width: 30vw;
    min-height: 15vh;
    border-radius: 5rem;
  }
`;
