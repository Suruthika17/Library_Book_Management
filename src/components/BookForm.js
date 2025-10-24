import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookForm({ books = [], setBooks, isEdit = false }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookToEdit = isEdit ? books.find(b => b.id === Number(id)) : null;
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isEdit) {
      if (!bookToEdit) {
        alert('Book not found');
        navigate('/');
      } else {
        setName(bookToEdit.name);
        setAuthor(bookToEdit.author);
        setQuantity(bookToEdit.quantity);
      }
    }
  }, [isEdit, bookToEdit, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEdit) {
      setBooks(books.map(book => (book.id === bookToEdit.id ? { ...book, name, author, quantity } : book)));
    } else {
      setBooks([...books, { id: Date.now(), name, author, quantity }]);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEdit ? 'Edit Book' : 'Add Book'}</h2>
      <input placeholder="Book Title" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input type="number" min="1" placeholder="Quantity" value={quantity} onChange={e => setQuantity(Number(e.target.value))} required />
      <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
    </form>
  );
}
