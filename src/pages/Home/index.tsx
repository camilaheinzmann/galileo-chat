import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Title,
  Input,
  Text,
  Wrapper,
  Form,
  GradientButton,
} from "./styles";

import Aside from "../../components/Aside";
import Button from "../../components/Button";

import EnterRoomImg from "../../assets/img/enter-room.svg";

function Home() {
  const { user } = useAuth();
  const history = useHistory();

  const [chatName, setChatName] = useState("");
  const [chatRoomCode, setChatRoomCode] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (chatName.trim() === "") {
      return;
    }

    const chatRoomRef = database.ref("chats");

    const firebaseChat = await chatRoomRef.push({
      name: chatName,
      ownerId: user?.id,
    });

    history.push(`/app/room/${firebaseChat.key}`);
  }

  async function handleEnterRoom(event: FormEvent) {
    event.preventDefault();

    if (chatRoomCode.trim() === "") {
      return;
    }

    const chatRoomRef = await database.ref(`chats/${chatRoomCode}`).get();

    if (!chatRoomRef.exists()) {
      alert("Sala de chat não encontrada.");
      return;
    }

    history.push(`/app/room/${chatRoomCode}`);
  }

  return (
    <>
      <Aside />
      <Wrapper>
        <Container>
          <img src={EnterRoomImg} alt="Mulher conversando no chat" />

          <Title>Pronto para bater papo?</Title>

          <Form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="Insira um nome para a sua sala"
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
            />
            <GradientButton type="submit" disabled={!user}>
              Criar sala GALILEOchat
            </GradientButton>
          </Form>

          <Form onSubmit={handleEnterRoom}>
            <Text>Ou acesse uma sala existente:</Text>
            <Input
              type="text"
              placeholder="Digite o código da sala de chat"
              value={chatRoomCode}
              onChange={(e) => setChatRoomCode(e.target.value)}
            />
            <Button type="submit" disabled={!user}>
              Entrar
            </Button>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
