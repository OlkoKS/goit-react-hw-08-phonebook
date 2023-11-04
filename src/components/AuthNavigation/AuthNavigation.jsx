import { NavLink } from 'react-router-dom';
import { AuthNavContainer } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <AuthNavContainer>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavContainer>
  );
};
