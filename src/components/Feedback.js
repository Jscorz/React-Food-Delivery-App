import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';

const Feedback = () => {
  return (
    <Wrapper>
      <section>Feedback Component</section>
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

  section {
    background: lightgrey;
    min-width: 30vw;
    min-height: 30vh;
    border-radius: 5rem;
  }
`;
