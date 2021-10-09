import styled from "styled-components";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    116.23deg,
    #1c0030 -1.77%,
    #240141 39.05%,
    #240141 53.89%,
    #27284d 99.99%,
    #1c0030 100%
  );
  color: #faf7fa;

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    margin-top: 2rem;
  }
`;

export const InfoContainer = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GradientButton = styled(Button)`
  background: linear-gradient(87.88deg, #dd1581 -6.21%, #e83741 100%);
  max-width: 300px;
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  line-height: 80px;

  margin-bottom: 1rem;

  strong {
    font-size: 100px;
    font-weight: 900;
  }

  @media (max-width: 767px) {
    font-size: 60px;

    strong {
      font-size: 80px;
    }
  }
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const ImageContainer = styled.div`
  flex: 5;
  width: 100%;

  img {
    margin: 0 auto;
    display: block;

    min-width: 350px;
    width: 100%;
  }

  @media (max-width: 767px) {
    margin: 1rem 0 2rem;

    img {
      max-width: 350px;
    }
  }
`;
