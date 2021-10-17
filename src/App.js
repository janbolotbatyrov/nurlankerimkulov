import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
