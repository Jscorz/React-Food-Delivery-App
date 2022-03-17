import React, { useState, useRef } from 'react';
import '../index.css';
import styled from 'styled-components';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import links from '../navbarData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <Wrapper>
      <section className='section'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
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
              <button>
                <FaShoppingCart className='cart' />
                <div className='cart-total'>6</div>
              </button>
              <FaSearch className='search-icon' />
              <input
                type='text'
                name='text'
                placeholder='Search'
                className='search-input'
              />
            </div>
          </form>
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
  }

  img {
    max-height: 5rem;
    margin-left: 5rem;
    cursor: pointer;
    margin-left: 15vw;

    @media only screen and (max-width: 800px) {
      max-height: 3rem;
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

    &:hover,
    &:active {
      opacity: 1;
    }
  }

  .search-input {
    padding: 0.5rem;
    padding-left: 2rem;
    margin-right: 3rem;
    transition: all 0.2s;

    @media only screen and (max-width: 800px) {
      max-width: 20vw;
      position: relative;
      transform: translateX(-50%);
      padding: 0.2rem;
    }
  }

  .search-icon {
    color: rgba(200, 17, 54, 0.8);
    font-size: 1.2rem;
    z-index: 5;
    margin-bottom: -0.3rem;
    cursor: pointer;
    transform: translateX(135%);

    @media only screen and (max-width: 800px) {
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
    }
  }

  .links-container {
    @media only screen and (max-width: 1100px) {
      display: none;
    }
  }
`;
