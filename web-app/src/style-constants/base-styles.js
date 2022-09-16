import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const PageTitleLink = styled(Link)`
  color: inherit; 
  text-decoration: none; 
`

export const BurgerLink = styled(NavLink)`
  color: inherit; 
  text-decoration: none; 
  &:hover {
    color: #946d46; 
  };
`
