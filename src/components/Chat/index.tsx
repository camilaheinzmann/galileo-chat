import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useAuth } from "../../hooks/useAuth";

import { Container, Message, MessageContainer, MessageDate } from "./styles";

type MessageType = {
  id: string;
  content: string;
  author: {
    authorId: string;
    avatar: string;
    name: string;
  };
  date: Date;
};

type ChatProps = {
  allMessages: MessageType[];
};

function Chat({ allMessages }: ChatProps) {
  const { user } = useAuth();

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const sortedMessages = allMessages.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? -1 : 1
    );
    setMessages(sortedMessages);
  }, [allMessages]);

  return (
    <Container>
      {messages.map((message) => (
        <MessageContainer
          key={message.id}
          className={
            user && user.id === message.author.authorId ? "outgoing" : ""
          }
        >
          <img src={message.author.avatar} alt="Avatar" />
          <Message>
            <span>{message.author.name}</span>
            <p>{message.content}</p>
            <MessageDate>{format(new Date(message.date), "HH:mm")}</MessageDate>
          </Message>
        </MessageContainer>
      ))}
    </Container>
  );
}

export default Chat;
