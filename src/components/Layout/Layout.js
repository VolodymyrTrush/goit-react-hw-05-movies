import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, NavigationLink, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Nav>
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
