import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { useSidebarContext } from '../context/Context';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import links from '../data/navbarData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useSidebarContext();
  return (
    <Wrapper>
      <section className='section'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={`/{text}`}></Link>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <form>
            <div className='form-control'>
              <Link to='/shop'>
                <button>
                  <FaShoppingCart className='cart' />
                  <div className='cart-total'>6</div>
                </button>
              </Link>
              <Link to='/shop'>
                <FaSearch className='search-icon' />
              </Link>
              <input
                type='text'
                name='text'
                placeholder='Search'
                className='search-input'
              />
            </div>
          </form>
          <button className='toggle'>
            <FaBars className='toggle-icon' onClick={openSidebar} />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  .nav-header {
    min-width: 90vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0;

    @media only screen and (max-width: 400px) {
      padding: 0.5rem 0;
    }
  }

  img {
    max-height: 5rem;
    margin-left: 7rem;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
      max-height: 3rem;
    }
    @media only screen and (max-width: 600px) {
      max-height: 3rem;
      margin-left: 0.1rem;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    font-size: 1.5rem;
    text-transform: Capitalize;
    margin-left: 2rem;
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  li {
    &:hover {
      opacity: 1;
      transform: translateY(-3%);
    }
  }

  .search-input {
    padding: 0.5rem;
    padding-left: 2rem;
    margin-right: 7rem;
    transition: all 0.2s;

    @media only screen and (max-width: 800px) {
      max-width: 20vw;
      position: relative;
      transform: translateX(-50%);
      padding: 0.2rem;
    }

    @media only screen and (max-width: 900px) {
      visibility: hidden;
    }
  }

  .search-icon {
    color: rgba(200, 17, 54, 0.8);
    font-size: 1.2rem;
    z-index: 5;
    margin-bottom: -0.3rem;
    cursor: pointer;
    transform: translateX(135%);

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  button {
    position: relative;
    color: rgba(200, 17, 54, 0.9);
    border: none;
    margin-right: 1rem;
    font-size: 1.5rem;
    background: none;
  }

  .cart {
    cursor: pointer;
    color: grey;
    transition: all 0.2s;

    @media only screen and (max-width: 800px) {
      transform: translateX(550%);
      margin-bottom: -0.5rem;
    }

    @media only screen and (max-width: 550px) {
      transform: translateX(200%);
      margin-bottom: -0.5rem;
    }

    @media only screen and (max-width: 400px) {
      transform: translateX(200%);
      margin-bottom: -0.5rem;
    }

    &-total {
      font-size: 1rem;
      position: absolute;
      bottom: 50%;
      left: 50%;
      padding: 0.5rem;
      border-radius: 60%;
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;

      @media only screen and (max-width: 800px) {
        bottom: 10%;
        left: 650%;
        font-size: 0.7rem;
      }

      @media only screen and (max-width: 550px) {
        bottom: 10%;
        left: 300%;
        font-size: 0.7rem;
      }

      @media only screen and (max-width: 400px) {
        bottom: 10%;
        left: 300%;
        font-size: 0.7rem;
      }
    }
  }

  .links-container {
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  .toggle {
    border: 2px solid rgba(255, 72, 0, 0.7);
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
    margin-right: 7rem;

    &:hover {
      border: 2px solid rgba(200, 17, 54, 0.9);
    }

    @media only screen and (max-width: 1000px) {
      padding: 0.3rem;
      transform: translateX(-150%);
    }
    @media only screen and (max-width: 800px) {
      transform: translateX(-200%);
    }
    @media only screen and (max-width: 750px) {
      padding: 0.3rem;
      transform: translateX(-100%);
    }

    @media only screen and (max-width: 600px) {
      margin-right: 20%;
    }
    @media only screen and (max-width: 450px) {
      margin-right: 25%;
    }

    @media only screen and (min-width: 1200px) {
      display: none;
    }

    &-icon {
      font-size: 2.2rem;
      color: rgba(255, 72, 0, 0.7);
      transition: all 1s;
      margin-bottom: -0.35rem;

      &:hover {
        transform: rotate(-90deg);
        margin-bottom: -0.35rem;
        color: rgba(255, 72, 0, 0.8);
      }

      @media only screen and (max-width: 800px) {
        font-size: 1.7rem;
      }

      @media only screen and (min-width: 1200px) {
        display: none;
      }
    }
  }
`;
