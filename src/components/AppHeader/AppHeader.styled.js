import { styled } from 'styled-components';

export const AppHeaderContainer = styled.header`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  padding: 20px 40px;
  border: 1px solid #c1c3cf;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > * {
    font-size: 24px;
  }
`;
