import { useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#ffffff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(13, 37, 56, 0.7);
  // box-shadow: 1px 1px 10px #FFF;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  margin: 0;
  height: 100vh;
  width: 200px;
  padding: 0 20px 20px 20px;
  z-index: 10;
  // padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  // li {
  //   padding: 18px 10px;
  //   color: #fff;
  // }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <Nav open={open}>
          <ul>
            <li>Milk</li>
            <li>Cheese</li>
          </ul>
      </Nav>
    </>
  );
};

export default Burger;