import styled from "styled-components";

export const AsideWrapper = styled.aside`
  width: 80px;
  height: 100%;

  position: fixed;
  padding: 1rem 0;
  gap: 10px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(
    179.45deg,
    #1c0030 0%,
    #240141 42.71%,
    #240141 64.06%,
    #1c0030 100%
  );

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 80px;

    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
    bottom: 0;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;

  border: 0;
  border-radius: 50%;
  background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);

  cursor: pointer;
`;
