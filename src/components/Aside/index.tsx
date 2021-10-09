import { useAuth } from "../../hooks/useAuth";
import { AsideWrapper, Button } from "./styles";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

function Aside() {
  const { user, signOut } = useAuth();

  return (
    <AsideWrapper>
      {user ? (
        <>
          <img src={user?.avatar} alt={user?.name} title={user.name} />
          <Button title="Sair">
            <LogoutIcon onClick={signOut} />
          </Button>
        </>
      ) : (
        <PersonIcon />
      )}
    </AsideWrapper>
  );
}

export default Aside;
