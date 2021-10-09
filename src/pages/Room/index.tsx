import { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import {
  ChatContainer,
  Container,
  FooterChat,
  Header,
  HeaderChat,
  Input,
  Wrapper,
  SendButton,
  GradientButton,
} from "./styles";

import Aside from "../../components/Aside";
import RoomCode from "../../components/RoomCode";
import Chat from "../../components/Chat";

import { ReactComponent as PersonGradientIcon } from "../../assets/icons/person-gradient.svg";
import { ReactComponent as SendMessageIcon } from "../../assets/icons/message.svg";

type FirebaseMessages = Record<
  string,
  {
    author: {
      authorId: string;
      name: string;
      avatar: string;
    };
    content: string;
    date: Date;
  }
>;

type Message = {
  id: string;
  content: string;
  author: {
    authorId: string;
    avatar: string;
    name: string;
  };
  date: Date;
};

type RoomParams = {
  id: string;
};

function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const history = useHistory();

  const [isAdmin, setIsAdmin] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [title, setTitle] = useState("");

  const chatId = params.id;

  useEffect(() => {
    const chatRef = database.ref(`chats/${chatId}`).orderByChild("content");

    // child added
    chatRef.on("value", (chat) => {
      const databaseChat = chat.val();

      if (databaseChat) {
        const firebaseMessages: FirebaseMessages = databaseChat.messages ?? {};

        const parsedMessages = Object.entries(firebaseMessages).map(
          ([key, value]) => {
            return {
              id: key,
              content: value.content,
              author: value.author,
              date: value.date,
            };
          }
        );
        setTitle(databaseChat.name);
        setMessages(parsedMessages);
      }
      return;
    });
  }, [chatId]);

  async function handleSendMessage(event: FormEvent) {
    const inputElement = document.querySelector("input");
    inputElement?.focus();

    event.preventDefault();

    if (newMessage.trim() === "") {
      return;
    }

    if (!user) {
      return;
    }

    const message = {
      content: newMessage,
      author: {
        authorId: user.id,
        name: user?.name,
        avatar: user.avatar,
      },
      date: new Date().getTime(),
    };

    setNewMessage("");
    await database.ref(`chats/${chatId}/messages`).push(message);
  }

  async function handleCloseChatRoom() {
    await database.ref(`chats/${chatId}`).remove();

    history.push("/");
  }

  function handleLeaveRoom() {
    history.push("/");
  }

  useEffect(() => {
    const chatRef = database.ref(`chats/${chatId}`);

    chatRef.once("value", (chat) => {
      const databaseChat = chat.val();
      if (databaseChat.ownerId === user?.id) {
        setIsAdmin(true);
      }
    });
  }, [chatId, user]);

  return (
    <>
      <Aside />
      <Wrapper>
        <Container>
          <Header>
            <div>
              <p>Código da sala:</p>
              <RoomCode roomCode={chatId} />
            </div>
            {isAdmin ? (
              <GradientButton onClick={handleCloseChatRoom}>
                Encerrar GALILEOchat
              </GradientButton>
            ) : (
              <GradientButton onClick={handleLeaveRoom}>
                Sair desta sala
              </GradientButton>
            )}
          </Header>
          <ChatContainer>
            <HeaderChat>
              <h1>{title && title}</h1>
              <p>GALILEOchat</p>
            </HeaderChat>
            <Chat allMessages={messages} />
            <FooterChat onSubmit={handleSendMessage}>
              <>
                {user ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  <PersonGradientIcon />
                )}
                <Input
                  autoFocus
                  type="text"
                  placeholder="Escreva uma mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <SendButton
                  type="submit"
                  disabled={!user}
                  title="Enviar mensagem"
                >
                  <SendMessageIcon />
                </SendButton>
              </>
            </FooterChat>
          </ChatContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default Room;
