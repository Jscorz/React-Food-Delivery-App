import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { MdDirectionsBike } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const MainText = () => {
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
      y: -30,
      delay: 1.2,
    });
  });
  useEffect(() => {
    gsap.from(boxRefThree.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      delay: 1.4,
    });
  });

  return (
    <Wrapper>
      <section ref={boxRef}>
        <article ref={boxRefThree}>
          <p>bike delivery</p>
          <button className='bike'>
            <MdDirectionsBike />
          </button>
        </article>
        <main ref={boxRefTwo}>
          The Fastest <br />
          Delivery in <br />
          <span>Your City</span>
        </main>
        <div className='short-text' ref={boxRefThree}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          officiis id fugit iste exercitationem esse maxime, sequi dolor.
          Repudiandae, vitae.
        </div>
        <Link to='Shop'>
          <div className='button-container' ref={boxRefThree}>
            <button className='order'>order now</button>
            <button className='play'>
              <BiPlayCircle />
            </button>
            <p className='process'>Order Process</p>
          </div>
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    height: 100%;
    background-color: white;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 550px) {
      border-radius: 1rem;
    }
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
        background: transparent;
        box-shadow: none;
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
        margin-bottom: 20%;
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
    margin-left: 10%;
    margin-top: 2%;

    display: flex;
    align-items: center;
    transition: all .2s;

    @media only screen and (max-width: 500px) {
      margin-top: 20%;
     }
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

    @media only screen and (max-width: 600px) {
      padding: .5rem 1rem;
      border-radius: .5rem;
    }

    &:hover {
      transform: translateY(-3%);
    }
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

    &:hover {
      transform: translateY(-3%);
    }
  }

  .process {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
        display: none;
      }

      &:hover {
        transform: translateY(-3%);
      }
  }

  span {
    color: rgba(251, 86, 48, 0.8);
  }
`;

export default MainText;
