import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { LogOutBtn, UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  return (
    <UserMenuContainer>
      <p>{email}</p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserMenuContainer>
  );
};
