import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Input = styled.input`
    padding: 5px 10px;
    font-size: 16px;
    outline: 0px solid #e30b5c;
    border-radius: 4px;
    transition: border-color linear 250ms;
     &:focus {
        outline: 0;
        border-color: #e30b5c;
    }
`;

export const Button = styled.button`
    font-size: 18px;
    font-weight: 500;
    padding: 7px 12px;
    margin-left: 10px;
    background-color: white;
    border: 0;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    transition: background-color linear 250ms;
    &:hover {
        background-color: green;
        color: white;
    }
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: orangered;
    color: white;
  }
`;