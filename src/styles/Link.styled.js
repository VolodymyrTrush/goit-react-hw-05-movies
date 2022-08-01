import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: background-color linear 250ms;
  &.active {
    color: white;
    background-color: green;
  }
`;