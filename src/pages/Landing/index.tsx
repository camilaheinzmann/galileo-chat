import { useHistory } from "react-router";

import {
  Container,
  ImageContainer,
  InfoContainer,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

import Button from "../../components/Button";

import LandingImg from "../../assets/img/landing.svg";

function Landing() {
  const history = useHistory();

  function handleSigninWithGoogle() {
    history.push("/app");
  }

  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Title>
            <strong>GALILEO</strong> chat
          </Title>
          <Subtitle>Crie salas de chat e converse com seus amigos</Subtitle>
          <Button onClick={handleSigninWithGoogle}>Entre com o Google</Button>
        </InfoContainer>
        <ImageContainer>
          <img src={LandingImg} alt="Pessoas batendo papo" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

export default Landing;
