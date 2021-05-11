function Save(props) {
  const { title, authors, image, link, description, deleteSavedBook } = props;
  return (
    <div className="card-group">
      <div className="card mb-2">
        <div className="d-flex flex-row align-items-center justify-content-between card-header">
          <div>
            <h5 className="card-title">{title}</h5>
            <small>
              <span className="material-icons" style={{ fontSize: '20px' }}>menu_book</span> {authors}
            </small>
          </div>
          <img src={image} style={{ maxWidth: '100px' }} alt="book" />
        </div>
        <div className="card-body">
          <small className="card-text">{description}</small>
        </div>
        <div className="card-footer">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View Book
          </a>
          <button
            onClick={deleteSavedBook.bind(this, props)}
            className="btn btn-outline-danger"
            style={{ marginLeft: '0.5rem' }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Save;
