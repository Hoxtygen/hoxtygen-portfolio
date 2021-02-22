import "./App.scss";
import Index from "./container/Index";
import Contact from "./container/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />

      </div>
    </Router>
  );
}

export default App;
