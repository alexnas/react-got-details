import React, { Component } from 'react';

import GotService from '../../services/gotService';

import './itemDetails.css';

const Field = ({ item, field, label }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='term'>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };
export default class ItemDetails extends Component {
  gotService = new GotService();

  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return <span className='select-error'>Please, select an item</span>;
    }

    const { name } = item;

    return (
      <div className='item-details rounded'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}
