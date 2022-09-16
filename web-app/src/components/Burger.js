import { useState } from 'react';

import { BurgerNav, Nav } from './Burger.styled';
import { BurgerLink } from '../style-constants/base-styles';


const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerNav open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerNav>

      <Nav open={open}>
          <ul>
            <li>A propos</li>
            <BurgerLink to="/student">Je suis étudiant</BurgerLink>
            <BurgerLink to="/volunteer">Je suis bénévole</BurgerLink>
            <BurgerLink to="/partners">Je suis partenaire</BurgerLink>
          </ul>
      </Nav>
    </>
  );
};

export default Burger;