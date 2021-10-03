import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" exact component={Home} />
    </Switch>
  );
}

export default Routes;
