import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h4 className='footer'>
        &copy;{new Date().getFullYear()} Meals 2 U. All rights reserved
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    word-spacing: 0.3rem;
    height: 5rem;
  }
`;

export default Footer;
