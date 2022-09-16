import { useState } from 'react';
import { RiHomeSmile2Fill, RiInformationFill } from "react-icons/ri";
import { MdSchool, MdVolunteerActivism } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb"

import { BurgerNav, Nav } from './Burger.styled';
import { BurgerLink } from '../style-constants/base-styles';
import styles from '../App.module.css';


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
        <BurgerLink to="/"><RiHomeSmile2Fill className={styles.icons}/>Accueil</BurgerLink>
        <BurgerLink to="/infos"><RiInformationFill className={styles.icons}/>A propos de nous</BurgerLink>
        <BurgerLink to="/student"><MdSchool className={styles.icons}/>Je suis étudiant</BurgerLink>
        <BurgerLink to="/volunteer"><MdVolunteerActivism className={styles.icons}/>Je suis bénévole</BurgerLink>
        <BurgerLink to="/partners"><TbHeartHandshake className={styles.icons}/>Je suis partenaire</BurgerLink>
      </Nav>
    </>
  );
};

export default Burger;