import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <header>
      <div>
        Library<b>Zone</b>
      </div>
      <nav>
        {user ? (
          <>
            <Link to="/">Books</Link>
            <Link to="/add">Add Book</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
