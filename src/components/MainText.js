import React from 'react';
import styled from 'styled-components';

const MainText = () => {
  return (
    <Wrapper>
      <section>
        <article>bike delivery</article>
        <main>The Fastest Delivery in Your City</main>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          officiis id fugit iste exercitationem esse maxime, sequi dolor.
          Repudiandae, vitae.
        </div>
        <div className='button-container'>
          <button>order now</button>
          <button>some icon</button>
          <p>Order Process</p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    height: 100%;
    background-color: grey;
    border-radius: 8%;
    display: flex;
    flex-direction: column;
  }
`;

export default MainText;
