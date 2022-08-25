import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  StyledHeader,
  StyledLink,
  Title,
  ContactsIcon,
} from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import Spinner from 'components/Spinner';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const location = useLocation();
  const isHomePath = location.pathname === '/';

  return (
    <>
      <StyledHeader as="header">
        <Container>
          <StyledLink to={routesPath.home}>
            <Title>
              PHONEBOOK
              <ContactsIcon fontSize="large" />
            </Title>
          </StyledLink>
          {isHomePath && isLoggedIn && (
            <NavLink to={routesPath.contacts}>Back to ContactBook</NavLink>
          )}
          {isFetchingCurrentUser ? (
            Spinner.threeDots
          ) : isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthNavigation />
          )}
        </Container>
      </StyledHeader>

      <Outlet />
    </>
  );
};

export default Header;
