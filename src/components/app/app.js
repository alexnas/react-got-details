import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomChar: true,
    };
    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }

  toggleRandomChar(e) {
    console.log(e.target.value);
    const prevChar = this.state.randomChar;
    this.setState(() => ({
      randomChar: !prevChar,
    }));
  }

  render() {
    console.log('toggle', this.state.randomChar);
    const randomCharacter = this.state.randomChar ? <RandomChar /> : null;
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
          <Row>
            <Col md='6'>
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <Container>
//         <Header />
//       </Container>
//       <Container>
//         <Row>
//           <Col lg={{ size: 5, offset: 0 }}>
//             <RandomChar />
//           </Col>
//         </Row>
//         <Row>
//           <Col md='6'>
//             <ItemList />
//           </Col>
//           <Col md='6'>
//             <CharDetails />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;
