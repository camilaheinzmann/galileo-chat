import { useAuth } from "../../hooks/useAuth";
import { AsideWrapper, Button } from "./styles";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

function Aside() {
  const { user } = useAuth();

  return (
    <AsideWrapper>
      {user ? (
        <img src={user?.avatar} alt={user?.name} title={user.name} />
      ) : (
        <PersonIcon />
      )}
      <Button title="Sair">
        <LogoutIcon />
      </Button>
    </AsideWrapper>
  );
}

export default Aside;
