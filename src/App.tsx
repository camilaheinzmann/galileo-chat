import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes />
        <GlobalStyle />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
