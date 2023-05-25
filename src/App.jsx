import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
