import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BooksList({ books, setBooks }) {
  const navigate = useNavigate();

  const deleteBook = id => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div>
      <h1>Books List</h1>
      <button onClick={() => navigate('/add')}>Add Book</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.name}</strong> by {book.author} (Qty: {book.quantity})
            <div>
              <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
