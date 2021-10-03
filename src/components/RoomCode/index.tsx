import { Button } from "./styles";

import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";

type RoomCodeProps = {
  roomCode: string;
};

function RoomCode({ roomCode }: RoomCodeProps) {
  function copyCodeToClipboard() {
    navigator.clipboard.writeText(roomCode);
  }

  return (
    <Button className="room-code" onClick={copyCodeToClipboard}>
      <span>{roomCode}</span>
      <div>
        <CopyIcon />
      </div>
    </Button>
  );
}

export default RoomCode;
