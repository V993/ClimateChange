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
import act from "./pages/act";
import notfound from "./pages/notfound";
import donate from "./pages/donate"
import causes from "./pages/causes"; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/actnow" component={act} />
        <Route exact path="/404" component={notfound} />
        <Route exact path="/donate" component={donate} />
        <Route exact path = "/causes" component= {causes}/>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
