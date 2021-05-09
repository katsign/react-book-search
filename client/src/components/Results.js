import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  render() {
    console.log('PROPS ==>', this.props.bookState);
    return this.props.bookState.map((book) => (
      <Result
        key={book.id}
        id={book.id}
        title={book.volumeInfo.title}
        link={book.volumeInfo.previewLink}
        authors={
          book.volumeInfo.authors && book.volumeInfo.authors.length > 1
            ? book.volumeInfo.authors.join(', ')
            : book.volumeInfo.authors
        }
        image={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://via.placeholder.com/100x100?text=No+Image+Available'
        }
        description={book.volumeInfo.description}
        saveBookToDB={this.props.saveBookToDB}
      />
    ));
  }
}

export default Results;
