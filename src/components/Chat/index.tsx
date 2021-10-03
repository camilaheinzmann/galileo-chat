import { Container, Message, MessageDate } from "./styles";

import { ReactComponent as FrameIcon } from "../../assets/frame.svg";

const messages = [
  {
    id: "454545",
    name: "Ana",
    message: "Olá, pessoal!",
    date: "2009-1-1T8:00:00 to 2009-1-4T7:59:59",
  },
  {
    id: "66666",
    name: "Luana",
    message: "Oi gente! Como vocês estão?",
    date: "2009-1-1T8:00:00 to 2009-1-4T8:01:58",
  },
  {
    id: "645454",
    name: "Julia",
    message: "Boa noite!",
    date: "2009-1-1T8:00:00 to 2009-1-4T10:00:00",
  },
  {
    id: "3434",
    name: "Luana",
    message:
      "Vivamus vitae sollicitudin tellus, luctus dapibus diam. Nullam sagittis lobortis mauris, nec pulvinar libero imperdiet at. Integer rhoncus lacinia dui a ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id neque sem. Praesent aliquam rutrum mi a ultrices. Nam quis elit vel felis lobortis lacinia sit amet in dui. Ut elit mi, aliquam sit amet pellentesque sit amet, ullamcorper vel ante.",
    date: "2009-1-1T8:00:00 to 2009-1-4T8:01:58",
  },
  {
    id: "6557668",
    name: "Julia",
    message: "Boa tarde!",
    date: "2009-1-1T8:00:00 to 2009-1-4T10:00:00",
  },
  {
    id: "77777",
    name: "Luana",
    message: "Oi gente",
    date: "2009-1-1T8:00:00 to 2009-1-4T8:01:58",
  },
  {
    id: "11111",
    name: "Julia",
    message: "Olá!",
    date: "2009-1-1T8:00:00 to 2009-1-4T10:00:00",
  },
  {
    id: "22222",
    name: "Luana",
    message: "Oi?",
    date: "2009-1-1T8:00:00 to 2009-1-4T8:01:58",
  },
  {
    id: "23232",
    name: "Julia",
    message: "Teste",
    date: "2009-1-1T8:00:00 to 2009-1-4T10:00:00",
  },
  {
    id: "44444",
    name: "Ana",
    message: "Tchau",
    date: "2009-1-1T8:00:00 to 2009-1-4T8:01:58",
  },
  {
    id: "55555",
    name: "Julia",
    message: "Bom dia!",
    date: "2009-1-1T8:00:00 to 2009-1-4T10:00:00",
  },
];

function Chat() {
  return (
    <Container>
      {messages.map((message) => (
        <Message key={message.id}>
          <FrameIcon />
          <span>{message.name}</span>
          <p>{message.message}</p>
          <MessageDate>17:30</MessageDate>
        </Message>
      ))}
    </Container>
  );
}

export default Chat;
