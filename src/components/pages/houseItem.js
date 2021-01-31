import React, { Component } from 'react';

import ItemDetails, { Field } from '../itemDetails';
import GotService from '../../services/gotService';

export default class HouseItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails
        itemId={this.props.houseId}
        getData={this.gotService.getHouse}
      >
        <Field field='region' label='Region' />
        <Field field='words' label='Words' />
        <Field field='titles' label='Titles' />
        <Field field='overload' label='Overload' />
        <Field field='ancestralWeapons' label='Ancestral weapons' />
      </ItemDetails>
    );
  }
}
