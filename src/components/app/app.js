import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';

import GotService from '../../services/gotService';
import { CharacterPage, HousePage, BookPage } from '../pages';

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
      <>
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
          <CharacterPage />
          <BookPage />
          <HousePage />
        </Container>
      </>
    );
  }
}
