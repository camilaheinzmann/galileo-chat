import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 80px;
  padding-top: 2rem;

  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 350px;

  gap: 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  button {
    max-width: 100%;
    height: 40px;

    &:first-of-type {
      background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);
    }

    &:last-of-type {
      background: #240141;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #a6a6a6;
`;

export const Input = styled.input`
  height: 40px;

  padding: 12px;
  outline: 0;

  border: 1px solid #a6a6a6;
  border-radius: 5px;

  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #240141;

  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 2px;
    background: #dd1581;
    margin-right: 1rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 2px;
    background: #dd1581;
    margin-left: 1rem;
  }
`;
