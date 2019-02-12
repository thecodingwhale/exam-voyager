import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Home from '../Home';
import Post from '../Post';
import About from '../About';

const App = () => (
  <Container>
    <Row>
      <Col>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
      </Col>
    </Row>
      <Row>
        <Col>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/about-us" component={About} />
          </main>
        </Col>
      </Row>
  </Container>
);

export default App;
