import styled from "styled-components";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px 20px 100px;

  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 80px 20px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;

  div p {
    color: #c4c4c4;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;

export const GradientButton = styled(Button)`
  background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);
  height: 40px;
  width: 230px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 500px;

  background: #fff;
  border: 1px solid #cccccc;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    height: 60vh;
  }
`;

export const HeaderChat = styled.header`
  height: 60px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f0f0f0;
  border-bottom: 1px solid #cccccc;

  h1 {
    font-size: 20px;
    color: #240141;

    max-width: 70%;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    color: #dd1581;
  }

  @media (max-width: 767px) {
    h1,
    p {
      font-size: 16px;
    }
  }
`;

export const FooterChat = styled.form`
  height: 60px;
  padding: 20px;

  background-color: #f0f0f0;
  border-top: 1px solid #cccccc;

  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 50%;
  }

  > svg,
  img {
    height: 30px;
    width: 30px;
  }
`;

export const Input = styled.input`
  height: 35px;
  width: 100%;

  padding: 12px;
  outline: 0;

  border: 1px solid #a6a6a6;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  min-width: 35px;
  width: 35px;
  height: 35px;

  border: 0;
  border-radius: 50%;
  background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);

  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
