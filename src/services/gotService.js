import React, { Component } from 'react';

export default class GotService extends Component {
  apiBase = 'https://www.anapioficeandfire.com/api';

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return await res.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return await this._transformCharacter(character);
  }

  getAllHouses() {
    return this.getResource(`/houses`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}`);
  }

  getAllBooks() {
    return this.getResource(`/books`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}`);
  }

  _transformCharacter(char) {
    const id = Number(char.url.split('/').slice(-1));
    return {
      id: id || 'no data',
      name: char.name || 'no data',
      gender: char.gender || 'no data',
      born: char.born || 'no data',
      died: char.died || 'no data',
      culture: char.culture || 'no data',
    };
  }

  _transformHourse(house) {
    return {
      name: house.name || 'no data',
      region: house.region || 'no data',
      words: house.words || 'no data',
      titles: house.titles || 'no data',
      overload: house.overload || 'no data',
      ancestralWeapons: house.ancestralWeapons || 'no data',
    };
  }

  _transformBook(book) {
    return {
      name: book.name || 'no data',
      numberOfPages: book.numberOfPages || 'no data',
      publisher: book.publisher || 'no data',
      released: book.released || 'no data',
    };
  }
}
