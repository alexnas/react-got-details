import React, { Component } from 'react';
import ItemDetails, { Field } from '../itemDetails';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {
  gotService = new GotService();

  state = {
    selectedHouse: 1,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={(item) => item.name}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field='region' label='Region' />
        <Field field='words' label='Words' />
        <Field field='titles' label='Titles' />
        <Field field='overload' label='Overload' />
        <Field field='ancestralWeapons' label='Ancestral weapons' />
      </ItemDetails>
    );

    return <RowBlock leftBlock={itemList} rightBlock={itemDetails} />;
  }
}
