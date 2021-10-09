import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  GradientButton,
  ImageContainer,
  InfoContainer,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

import LandingImg from "../../assets/img/landing.svg";

function Landing() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleEnterToApp() {
    if (!user) {
      await signInWithGoogle();
    }
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
          <GradientButton onClick={handleEnterToApp}>
            Entre com o Google
          </GradientButton>
        </InfoContainer>
        <ImageContainer>
          <img src={LandingImg} alt="Pessoas batendo papo" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

export default Landing;
