import React, { Component } from 'react';
import API from '../utils/API';
import Saves from '../components/Saves';
import Footer from '../components/Footer';

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount = () => {
    this.getBooks();
  };

  deleteSavedBook = (currentBook) => {
    API.deleteBook(currentBook.id)
      .then((res) => {
        console.log('Deleted ==>', res);
        this.getBooks();
      })
      .catch((err) => {
        console.log('ERR ==>', err);
      });
  };

  getBooks = () => {
    API.getBooks()
      .then((res) => {
        this.setState({
          savedBooks: res.data,
        });
        console.log('getBooks RES DATA ==>', res);
      })
      .catch((err) => {
        console.log('ERR ==>', err);
      });
  };

  render() {
    return (
      <div>
        {this.state.savedBooks.length ? (
          <div>
            <Saves
              bookState={this.state.savedBooks}
              deleteSavedBook={this.deleteSavedBook}
            ></Saves>
            <Footer />
          </div>
        ) : (
          <div>
            <hr />
            <p className="lead">No Results to Display</p>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;
