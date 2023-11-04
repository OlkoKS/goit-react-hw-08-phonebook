import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LogFormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    font-size: 20px;
  }
`;

export const LogFormStyled = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  color: #1f37d0;
  text-underline-offset: 5px;
`;
