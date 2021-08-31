import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/o-nama">
            <AboutPage />
          </Route>
          <Route path="/kontakt">
            <ContactPage />
          </Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
