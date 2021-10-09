import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column-reverse;

  padding: 10px;

  @media (max-width: 767px) {
    padding: 10px 20px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 100%;

  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  &.outgoing {
    margin-left: auto;
    flex-direction: row-reverse;
  }
`;

export const Message = styled.div`
  position: relative;
  max-width: 80%;

  border: 1px solid #ccc;
  border-radius: 5px;

  margin-bottom: 10px;
  padding: 10px 60px 10px 10px;

  span {
    font-size: 13px;
    font-weight: 500;
    color: #3f3d56;
  }

  p {
    font-size: 13px;
    word-wrap: break-word;
  }

  svg {
    display: none;
    position: absolute;
    left: -23px;
    top: -1px;
  }
`;

export const MessageDate = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  color: #dd1581;
  font-weight: 500;
  position: absolute;
  right: 8px;
  bottom: 6px;
`;
