import "./App.css";
import Home from "./component/index";
import Resume from "./component/resume";
import Contact from "./component/contact";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ background: "black" }}>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
