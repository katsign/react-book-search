import React, { Component } from 'react';
import API from '../utils/API';
import Results from '../components/Results';
import Footer from '../components/Footer';

class Home extends Component {
  state = {
    books: [],
    search: '',
  };

  searchBooks = () => {
    API.googleBooks(this.state.search)
      .then((res) => {
        this.setState({
          books: res.data.items,
          search: '',
        });
      })
      .catch((err) => console.log('ERR ==>', err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks();
  };

  handleClear = (event) => {
    event.preventDefault();
    this.setState({ books: [], search: '' });
  };

  saveBookToDB = (currentBook) => {
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log('Successful POST to DB!'))
      .catch((err) => console.log('ERR ==>', err));
  };

  render() {
    return (
      <>
        
        <div className="d-flex flex-row align-items-baseline justify-content-center mb-4">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Twilight"
                aria-label="search"
                aria-describedby="searchBtn"
                name="search"
                onChange={this.handleInputChange}
                value={this.state.search}
              />
              <button
                onClick={this.handleFormSubmit}
                className="btn btn-outline-primary"
                type="submit"
                id="searchBtn"
              >
                Search
              </button>
            </div>
          </form>
          <button
            onClick={this.handleClear}
            style={{ marginLeft: '0.5rem' }}
            className="btn btn-outline-danger"
          >
            Clear
          </button>
        </div>

        {this.state.books.length ? (
          <div>
            <Results
              bookState={this.state.books}
              saveBookToDB={this.saveBookToDB}
            ></Results>
            <Footer />
          </div>
        ) : (
          <div>
            <hr />
            <p className="lead">No Results to Display</p>
          </div>
        )}
      </>
    );
  }
}

export default Home;
