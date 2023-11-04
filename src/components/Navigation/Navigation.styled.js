import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  margin-left: 20px;
  display: flex;
  gap: 20px;

  & > * {
    color: #1f37d0;
    text-underline-offset: 5px;
  }
`;
