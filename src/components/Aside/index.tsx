import { AsideWrapper, Button } from "./styles";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

function Aside() {
  return (
    <AsideWrapper>
      <PersonIcon />
      <Button title="Sair">
        <LogoutIcon />
      </Button>
    </AsideWrapper>
  );
}

export default Aside;
