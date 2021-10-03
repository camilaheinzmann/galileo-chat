import {
  Container,
  ImageContainer,
  InfoContainer,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

import LandingImg from "../../assets/img/landing.svg";

function Home() {
  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Title>
            <strong>GALILEO</strong> chat
          </Title>
          <Subtitle>Crie salas de chat e converse com seus amigos</Subtitle>
          <button>Entre com o Google</button>
        </InfoContainer>
        <ImageContainer>
          <img src={LandingImg} alt="Pessoas batendo papo" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

export default Home;
