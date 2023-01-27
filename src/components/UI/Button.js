import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(94, 3, 80);
  color: white;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  padding: 6px 10px;
  margin-top: 15px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: rgb(94, 3, 90);
  }
`;

export default Button;
