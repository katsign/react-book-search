import React, { Component } from 'react';
import Save from './Save';

class Saves extends Component {
  render() {
    console.log('PROPS ==>', this.props.bookState);
    return this.props.bookState.map((book) => (
        <Save
          key={book._id}
          id={book._id}
          title={book.title}
          link={book.previewLink}
          authors={
            book.authors && book.authors.length > 1
              ? book.authors.join(', ')
              : book.authors
          }
          image={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : 'https://via.placeholder.com/100x100?text=No+Image+Available'
          }
          description={book.description}
          deleteSavedBook={this.props.deleteSavedBook}
        />
    ));
  }
}

export default Saves;
