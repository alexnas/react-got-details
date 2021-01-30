import React, { Component } from 'react';
import ItemDetails, { Field } from '../itemDetails';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BookPage extends Component {
  gotService = new GotService();

  state = {
    selectedBook: 1,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
      >
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    );

    return <RowBlock leftBlock={itemList} rightBlock={itemDetails} />;
  }
}
