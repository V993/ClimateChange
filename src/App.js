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
    <Router basename="{process.env.PUBLIC_URL}">
      <Route exact path="/" component={index} />
      <Route path="/actnow" component={act} />
      <Route path="/404" component={notfound} />
      <Route path="/action" component={actionPage} />
      <Route path="/donate" component={donate} />
      <Route path="/causes" component={causes} />
    </Router>
  );
};

export default App;
