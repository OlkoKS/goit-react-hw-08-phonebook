import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <div>
      <NavLink>Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
