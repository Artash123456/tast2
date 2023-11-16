import { FC } from 'react';
import { styled } from 'styled-components';
import { Field } from 'formik';
import { InputProps } from 'utils/types';
import { FieldAttributes } from 'formik';
const Input: FC<InputProps & FieldAttributes<any>> = (props) => {
  return (
    <Container error={Boolean(props.error)}>
      <label>{props.label}</label>
      <Field {...props} />
      <span>{props.error} </span>
    </Container>
  );
};
const Container = styled.div<{ error?: boolean }>`
  display: grid;
  margin-top: 16px;
  > input,
  > label,
  > span {
    color: ${({ error }) => (error ? '#ff5441' : '#aca9a9')};
  }
  > label {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 2px;
  }
  > input,
  > textarea {
    width: 100%;
    border: 1px solid ${({ error }) => (error ? '#ff5441' : '#aca9a9')};
    outline: none;
    color: gray;
    border-radius: 12px;
    padding: 3px 16px;
  }
  > input {
    height: 35px;
  }
  > textarea {
    height: 150px;
    resize: none;
  }
  > span {
    color: #ff5441;
    opacity: ${({ error }) => (error ? 1 : 0)};
    margin-top: 2px;
  }
`;
export default Input;
