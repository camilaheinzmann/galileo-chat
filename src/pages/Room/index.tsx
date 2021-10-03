import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import {
  ChatContainer,
  Container,
  FooterChat,
  Header,
  HeaderChat,
  Input,
  Wrapper,
  SendButton,
} from "./styles";

import Aside from "../../components/Aside";
import RoomCode from "../../components/RoomCode";
import Button from "../../components/Button";
import Chat from "../../components/Chat";

import { ReactComponent as PersonGradientIcon } from "../../assets/icons/person-gradient.svg";
import { ReactComponent as SendMessageIcon } from "../../assets/icons/message.svg";

function Room() {
  const history = useHistory();
  const [isAdmin, setIsAdmin] = useState(false);

  function handleCloseChatRoom() {
    history.push("/");
  }

  function handleLeaveRoom() {
    history.push("/");
  }

  useEffect(() => {
    setIsAdmin(true);
  }, []);

  return (
    <>
      <Aside />
      <Wrapper>
        <Container>
          <Header>
            <div>
              <p>Código da sala:</p>
              <RoomCode roomCode="ABCDEFGHIJKLMNOPQRSTWXYZ" />
            </div>
            {isAdmin ? (
              <Button onClick={handleCloseChatRoom}>
                Encerrar GALILEOchat
              </Button>
            ) : (
              <Button onClick={handleLeaveRoom}>Sair desta sala</Button>
            )}
          </Header>
          <ChatContainer>
            <HeaderChat>
              <h1>Amigas! :)</h1>
              <p>GALILEOchat</p>
            </HeaderChat>
            <Chat />
            <FooterChat>
              <PersonGradientIcon />
              <Input type="text" placeholder="Escreva uma mensagem..." />
              <SendButton title="Enviar mensagem">
                <SendMessageIcon />
              </SendButton>
            </FooterChat>
          </ChatContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default Room;
