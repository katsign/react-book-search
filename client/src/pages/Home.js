import React, { Component } from 'react';
import API from '../utils/API';
import Results from '../components/Results';

class Home extends Component {
  state = {
    books: [],
    search: '',
  };

  searchBooks = () => {
    API.googleBooks(this.state.search)
      .then((res) => {
        console.log('RES.DATA ==>', res.data.items);
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

  saveGoogleBook = (currentBook) => {
    console.log('CURRENT BOOK ==>', currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log('Successful POST to DB!', res))
      .catch((err) => console.log('ERR ==>', err));
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ margin: 'auto' }}>
          <div className="col-xs-12">
            <h4>Google Books Search 📚</h4>
            <div className="d-flex flex-row align-items-center mb-2">
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
                    className="btn btn-primary"
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
                className="btn btn-primary"
              >
                Clear
              </button>
            </div>

            {this.state.books.length ? (
              <Results
                bookState={this.state.books}
                saveGoogleBook={this.saveGoogleBook}
              ></Results>
            ) : (
              <div>
                <hr />
                <p className="lead">No Results to Display</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
