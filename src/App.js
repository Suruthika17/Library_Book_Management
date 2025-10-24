import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([
    { id: 1, name: '1984', author: 'George Orwell', quantity: 5 },
    { id: 2, name: 'To Kill a Mockingbird', author: 'Harper Lee', quantity: 3 }
  ]);

  return (
    <div className="app-background">
      <Router>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={
            <ProtectedRoute user={user}>
              <BooksList books={books} setBooks={setBooks} />
            </ProtectedRoute>
          } />
          <Route path="/add" element={
            <ProtectedRoute user={user}>
              <BookForm setBooks={setBooks} />
            </ProtectedRoute>
          } />
          <Route path="/edit/:id" element={
            <ProtectedRoute user={user}>
              <BookForm books={books} setBooks={setBooks} isEdit />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
