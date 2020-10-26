import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';

class App extends Component {
  render() {
    return (
      // Router is wraping the whole div so it knows what needs to be used as the nav bar
      <Router>
        <div className="App">
          {/* using the imported navbar from bootstrap*/}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          {/* Br used to add space from the navbar to the text in the components */}
          <br />
          {/* imported switch from the router dom so we can navigate from page to page */}
          <Switch>
            {/* route is also imported from the router dom to set the routing to the buttons */}
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
