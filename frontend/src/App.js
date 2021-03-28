import React, { PureComponent } from "react";
import Header from "./components/Header";
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import MyAccount from "./screens/MyAccount";
import Services from "./screens/Services";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Container>
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/registration" component={Register} />
            <Route path="/account" component={MyAccount} />
            <Route path="/services" component={Services} />
            <Route path="/" component={Home} exact />
          </Container>
        </main>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
