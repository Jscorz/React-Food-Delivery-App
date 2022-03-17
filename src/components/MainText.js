import React from 'react';
import styled from 'styled-components';
import { MdDirectionsBike } from 'react-icons/md';
import { BiPlayCircle } from 'react-icons/bi';

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
        <main>
          The Fastest <br />
          Delivery in <br />
          <span>Your City</span>
        </main>
        <div className='short-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          officiis id fugit iste exercitationem esse maxime, sequi dolor.
          Repudiandae, vitae.
        </div>
        <div className='button-container'>
          <button className='order'>order now</button>
          <button className='play'>
            <BiPlayCircle />
          </button>
          <p className='process'>Order Process</p>
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
    width: 8vw;
    margin-top: 10%;
    margin-left: 10%;
    border-radius: 5rem;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;


    @media only screen and (max-width: 1600px) {
        width: 10vw;
      }

      @media only screen and (max-width: 1400px) {
        width: 14vw;
      }

      @media only screen and (max-width: 1000px) {
        width: 18vw;
      }

      @media only screen and (max-width: 700px) {
        width: 22vw;
      }
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
      white-space: nowrap;
      text-transform: capitalize;
      margin-left: 1rem;
      font-weight: 800;
      color: rgba(200, 17, 54, 0.8);
      m
    }
  }

  main {
    font-size: 5rem;
    font-weight: 800;
    margin-left: 10%;
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.75);

    @media only screen and (max-width: 1000px) {
        font-size: 3rem;
      }
      @media only screen and (max-width: 800px) {
        font-size: 3rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
       }
  }

  .short-text {
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 70%;
    margin-left: 10%;
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.6);

    @media only screen and (max-width: 500px) {
        font-size: .8rem;
        margin-bottom: 1.5rem;
       }
  }
  .button-container {
    // background-color: grey;
    margin-left: 10%;
    margin-top: 2%;

    display: flex;
    align-items: center;
  }

  .order {
    background-color: rgba(251, 86, 48, 0.8);
    color: #fff;
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;

    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }

  .play {
    background-color: transparent;
    color: rgba(251, 86, 48, 0.8);
    border: none;
    border-radius: 50rem;
    font-size: 3rem;

    cursor: pointer;
    margin-left: 1.1rem;
    margin-right: 1.1rem;

    display: flex;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  .process {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
        display: none;
      }
  }

  span {
    color: rgba(251, 86, 48, 0.8);
  }
`;

export default MainText;
