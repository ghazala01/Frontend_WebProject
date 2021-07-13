import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudiesInner from "./Pages/CaseStudiesInner";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Pricing" component={Pricing}></Route>
        <Route path="/CaseStudies" component={CaseStudies}></Route>
        <Route path="/CaseStudiesInner" component={CaseStudiesInner}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

