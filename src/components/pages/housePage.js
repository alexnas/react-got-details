import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';

class HousePage extends Component {
  gotService = new GotService();

  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(itemId);
        }}
        getData={this.gotService.getAllHouses}
        renderItem={(item) => item.name}
      />
    );
  }
}

export default withRouter(HousePage);
