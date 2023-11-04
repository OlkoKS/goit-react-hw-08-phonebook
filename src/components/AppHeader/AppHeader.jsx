import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppHeaderContainer } from './AppHeader.styled';

export const AppHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppHeaderContainer>
      <b>PHONEBOOK</b>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </AppHeaderContainer>
  );
};
