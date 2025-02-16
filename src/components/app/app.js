import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {
  CharacterPage,
  HousePage,
  BookPage,
  CharacterItem,
  HouseItem,
  BooksItem,
} from '../pages';

import './app.css';

export default class App extends Component {
  gotService = new GotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => ({
      showRandomChar: !state.showRandomChar,
    }));
  };

  render() {
    const randomCharacter = this.state.showRandomChar ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <Router>
        <div className='app'>
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {randomCharacter}
                <Button
                  color='primary'
                  className='toggleBtn'
                  onClick={this.toggleRandomChar}
                >
                  Toggle random character
                </Button>
              </Col>
            </Row>

            <Route path='/characters' exact component={CharacterPage} />
            <Route path='/houses' exact component={HousePage} />
            <Route path='/books' exact component={BookPage} />
            <Route
              path='/characters/:id'
              render={({ match }) => {
                const { id } = match.params;
                return <CharacterItem characterId={id} />;
              }}
            />
            <Route
              path='/houses/:id'
              render={({ match }) => {
                const { id } = match.params;
                return <HouseItem houseId={id} />;
              }}
            />
            <Route
              path='/books/:id'
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
