import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import "./App.css";

const App = () => {
  const [data, setData] = useState("hi this is the data in the hook");
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <h1>hi this is home</h1>
        </Route>
        <Route path="/about">
          <About data={data} />
        </Route>
        <Route path="/">
          <h1>404 page not found</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iure
            minus ipsum repellat? Ipsa assumenda illum blanditiis labore
            aspernatur similique quisquam deserunt ipsam. Neque explicabo
            expedita, quaerat cumque officiis cum?
          </p>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
