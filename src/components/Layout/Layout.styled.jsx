import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.27);
  padding-left: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;

  &.active {
    color: red;
  }
`;
