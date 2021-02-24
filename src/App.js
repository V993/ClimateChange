import Header from "./components/Header";
import Button from "./components/Button";
import {
  HashRouter,
  BrowserRouter as Router,
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
    <HashRouter basename="{process.env.PUBLIC_URL}">
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/actnow" component={act} />
        <Route path="/404" component={notfound} />
        <Route exact path="/action" component={actionPage} />
        <Route exact path="/donate" component={donate} />
        <Route exact path="/causes" component={causes} />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
};

export default App;
