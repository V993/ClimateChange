import Header from "./components/Header";
import Button from "./components/Button";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import index from "./pages/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
      </Switch>
    </Router>
  );
};

export default App;
