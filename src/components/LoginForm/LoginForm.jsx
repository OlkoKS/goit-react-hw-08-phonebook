import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LogFormContainer,
  LogFormLabel,
  LogFormStyled,
  StyledNavLink,
} from './LoginForm.styled';
import {
  BtnElement,
  InputContainer,
} from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <LogFormContainer>
      <LogFormStyled
        className="LogForm"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <LogFormLabel className="LogLabel">
          Email
          <InputContainer type="email" name="email" />
        </LogFormLabel>
        <LogFormLabel className="LogLabel">
          Password
          <InputContainer type="password" name="password" />
        </LogFormLabel>
        <BtnElement type="submit">Log In</BtnElement>
      </LogFormStyled>
      <StyledNavLink to="/register">Registration</StyledNavLink>
    </LogFormContainer>
  );
};
