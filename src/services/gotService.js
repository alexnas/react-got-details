import { Component } from 'react';

export default class GotService extends Component {
  apiBase = 'https://www.anapioficeandfire.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return await res.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return await this._transformCharacter(character);
  };

  getAllHouses = async () => {
    const res = await this.getResource(`/houses`);
    return await res.map(this._transformHouse);
  };

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return await this._transformHouse(house);
  };

  getAllBooks = async () => {
    const res = await this.getResource(`/books`);
    return await res.map(this._transformBook);
  };

  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return await this._transformBook(book);
  };

  isSet = (data) => {
    if (data) {
      return data;
    } else {
      return 'no data :(';
    }
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformCharacter = (char) => {
    const id = Number(char.url.split('/').slice(-1));
    return {
      id: id || 'no data',
      name: char.name || 'no data',
      gender: char.gender || 'no data',
      born: char.born || 'no data',
      died: char.died || 'no data',
      culture: char.culture || 'no data',
    };
  };

  _transformHouse = (house) => {
    const id = this._extractId(house);
    // const id = Number(house.url.split('/').slice(-1));
    return {
      id: id || 'no data',
      name: house.name || 'no data',
      region: house.region || 'no data',
      words: house.words || 'no data',
      titles: house.titles || 'no data',
      overload: house.overload || 'no data',
      ancestralWeapons: house.ancestralWeapons || 'no data',
    };
  };

  _transformBook = (book) => {
    const id = Number(book.url.split('/').slice(-1));
    return {
      id: id || 'no data',
      name: book.name || 'no data',
      numberOfPages: book.numberOfPages || 'no data',
      publisher: book.publisher || 'no data',
      released: book.released || 'no data',
    };
  };
}
