import React, { Component } from 'react';

import ItemDetails, { Field } from '../itemDetails';
import GotService from '../../services/gotService';

export default class CharacterItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails
        itemId={this.props.characterId}
        getData={this.gotService.getCharacter}
      >
        <Field field='gender' label='Gender' />
        <Field field='born' label='Born' />
        <Field field='died' label='Died' />
        <Field field='culture' label='Culture' />
      </ItemDetails>
    );
  }
}
