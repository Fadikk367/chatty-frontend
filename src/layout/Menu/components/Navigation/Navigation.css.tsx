import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  list-style-type: none;
`;

export const NavItem = styled.li`
  display: flex;
  /* padding: 10px; */
`;

export const NavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  border-bottom: 1px solid black;

  &:hover {
    background-color: lightgrey;
  }
`;