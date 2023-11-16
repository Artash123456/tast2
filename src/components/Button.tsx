import { FC } from 'react';
import { styled } from 'styled-components';
import { ButtonProps } from 'utils/types';
const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
const StyledButton = styled.button`
  backgorund: none;
  border: none;
  outline: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 8px 16px;
  cursor: pointer;
`;
export default Button;
