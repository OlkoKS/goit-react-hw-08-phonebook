import React from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import {
  RegFormContainer,
  RegFormLabel,
  RegFormStyled,
  StyledNavLink,
} from './RegisterForm.styled';
import {
  BtnElement,
  InputContainer,
} from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      signUp({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <RegFormContainer>
      <RegFormStyled
        className="RegForm"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <RegFormLabel className="RegLabel">
          Username
          <InputContainer type="text" name="name" />
        </RegFormLabel>
        <RegFormLabel className="RegLabel">
          Email
          <InputContainer type="email" name="email" />
        </RegFormLabel>
        <RegFormLabel className="RegLabel">
          Password
          <InputContainer type="password" name="password" />
        </RegFormLabel>
        <BtnElement type="submit">Register</BtnElement>
      </RegFormStyled>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </RegFormContainer>
  );
};
