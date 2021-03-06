import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.note};
  padding: 0;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secoundary }) => secoundary
    && css`
      background-color: #e1e7e3;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
