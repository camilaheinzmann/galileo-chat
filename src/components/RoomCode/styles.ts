import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;

  background: #fff;
  border: 1px solid #cccccc;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    padding: 0 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  div {
    width: 40px;
    height: 40px;
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
