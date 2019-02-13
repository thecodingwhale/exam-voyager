import React, { Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from '../Home';
import About from '../About';
import Post from '../Post';
import PostCreate from '../PostCreate';
import PostEdit from '../PostEdit';

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/create" component={PostCreate} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/post/:id/edit" component={PostEdit} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default App;
