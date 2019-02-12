import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from '../Home';
import Post from '../Post';
import About from '../About';

const App = () => (
  <Fragment>
    <Navbar style={{ marginBottom: "20px" }} color="light" light expand="md">
      <Container>
        <NavbarBrand tag={Link} exact="true" to="/">Voyager</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} exact="true" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} exact="true" to="/about-us">About</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/about-us" component={About} />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default App;
