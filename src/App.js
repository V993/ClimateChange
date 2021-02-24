import Header from "./components/Header";
import Button from "./components/Button";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import index from "./pages/index";
import act from "./pages/act";
import notfound from "./pages/notfound";
import donate from "./pages/donate";
import causes from "./pages/causes";
import actionPage from "./pages/actionPage";

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/actnow" component={act} />
        <Route exact path="/action" component={actionPage} />
        <Route exact path="/donate" component={donate} />
        <Route exact path="/causes" component={causes} />
        <Route component={notfound} status={404} />
      </Switch>
    </Router>
  );
};

export default App;
