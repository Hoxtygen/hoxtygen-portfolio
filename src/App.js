import "./App.scss";
import Index from "./container/Index";
import Contact from "./container/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
