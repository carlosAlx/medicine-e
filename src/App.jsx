import { Router, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
