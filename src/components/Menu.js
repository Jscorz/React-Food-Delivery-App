import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const Menu = () => {
  const boxRef = useRef();
  const boxRefTwo = useRef();
  const boxRefThree = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, {
      duration: 1,
      opacity: 0,
      x: -100,
    });
  });
  useEffect(() => {
    gsap.from(boxRefTwo.current, {
      duration: 1,
      opacity: 0,
      x: -30,
      delay: 1.3,
    });
  });
  useEffect(() => {
    gsap.from(boxRefThree.current, {
      duration: 1,
      opacity: 0,
      x: 30,
      delay: 1.2,
    });
  });

  return (
    <Wrapper>
      <section className='grid'>
        <article className='grid-second'>
          <div className='background'>
            <main className='card'>
              <p>No menu from us, but here are some </p>
              <Link to='/Shop' ref={boxRef}>
                <span>great options</span>
              </Link>
              <div className='button-container'>
                <Link to='/' ref={boxRefThree}>
                  <button className='home'>Back to Home</button>
                </Link>
                <Link to='/Shop' ref={boxRefTwo}>
                  <button className='button'>
                    <BsArrowRightCircle />
                  </button>
                </Link>
              </div>
            </main>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.section`
  .grid {
    background-color: lightgrey;
    min-height: 100vh;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 5rem;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }

    &-second {
      margin: 2rem;
      min-width: 95%;
      background: linear-gradient(
        to bottom,
        rgba(255, 72, 0, 0.7),
        rgba(255, 72, 0, 0.05)
      );
      border-radius: 5rem;

      display: grid;
      grid-template-columns: 70% 1fr;
      transition: all 0.2s;

      @media only screen and (max-width: 550px) {
        border-radius: 1rem;
      }
    }
  }

  .background {
    background-color: white;
    border-radius: 5rem;
    grid-column: 1 / 2;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.2s;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }
  }

  .card {
    background-color: lightgrey;
    min-height: 55vh;
    width: 65vw;
    border-radius: 5rem;

    transform: translateX(20%);
    text-transform: capitalize;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }
  }

  .card {
    font-size: 4rem;
    font-weight: 500;

    color: rgba(0, 0, 0, 0.55);
    padding: 3rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media only screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  .button {
    color: rgba(255, 72, 0, 0.6);
    font-size: 3.5rem;
    margin-bottom: -10%;

    background: transparent;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    transform: translateY(35%);

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }

    &:hover {
      transform: translateY(37%);
      color: rgba(255, 72, 0, 0.9);
    }
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  span {
    color: rgba(255, 72, 0, 0.6);
    cursor: pointer;

    &:hover {
      color: rgba(255, 72, 0, 0.8);
    }
  }

  .home {
    background-color: light-grey;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;

    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    white-space: nowrap;

    @media only screen and (max-width: 550px) {
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      font-weight: 400;
    }

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
