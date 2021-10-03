import { useHistory } from "react-router";

import { Container, Title, Input, Text, Wrapper, Form } from "./styles";

import Aside from "../../components/Aside";
import Button from "../../components/Button";

import EnterRoomImg from "../../assets/img/enter-room.svg";

function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    history.push("/app/room");
  }

  function handleEnterRoom() {
    history.push("/app/room");
  }

  return (
    <>
      <Aside />
      <Wrapper>
        <Container>
          <img src={EnterRoomImg} alt="Mulher conversando no chat" />

          <Title>Pronto para bater papo?</Title>

          <Input type="text" placeholder="Insira um nome para a sua sala" />
          <Button onClick={handleCreateRoom}>Criar sala GALILEOchat</Button>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Text>Ou acesse uma sala existente:</Text>
            <Input type="text" placeholder="Digite o código da sala de chat" />
            <Button onClick={handleEnterRoom}>Entrar</Button>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
