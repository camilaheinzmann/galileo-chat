import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  font-size: 16px;
  width: 100%;
  border-color: transparent;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background: #240141;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
