import React from 'react';
import styled from 'styled-components';
import { MdDirectionsBike } from 'react-icons/md';

const MainText = () => {
  return (
    <Wrapper>
      <section>
        <article>
          <p>bike delivery</p>
          <button className='bike'>
            <MdDirectionsBike />
          </button>
        </article>
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
    background-color: white;
    border-radius: 8%;
    display: flex;
    flex-direction: column;
  }
  article {
    background-color: rgba(251, 86, 48, 0.8);
    padding: 0.2 1.25rem;
    width: 15%;
    margin-top: 10%;
    margin-left: 5%;
    border-radius: 5rem;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bike {
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 0.2rem;
    border: none;
    color: rgba(200, 17, 54, 0.8);
  }

  article {
    & p {
      display: flex;
      flex-wrap: nowrap;
      text-transform: capitalize;
      margin-left: 1rem;
      font-weight: 800;
      color: rgba(200, 17, 54, 0.8);
    }
  }
`;

export default MainText;
