import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Room from "./pages/Room";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" exact component={Home} />
      <Route path="/app/room/:id" component={Room} />
    </Switch>
  );
}

export default Routes;
