import React, { useState, useEffect } from 'react';
import api from '../../config/api';
import DashboardComponent from './DashboardComponent';

export default function Dashboard({ history }) {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [expand, setExpand] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [editBook, setEditBook] = useState(false);

  const isAdmin = localStorage.getItem('admin');

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');
      setBooks(response.data);
      setFilterBooks(response.data);
    }
    loadBooks();
  }, []);

  function expandBook(index) {
    setExpand(index);
  }

  function filterList(value) {
    setSearchText(value);
    let items = books;
    items = items.filter(item => {
      return (
        item.title
          .toLowerCase()
          .trim()
          .search(searchText.toLowerCase()) !== -1
      );
    });
    setFilterBooks(items);
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  async function rentBook(book) {
    book.rented = true;
    await api.put(`/books/${book.id}`, book);

    const { data } = await api.get('/books');
    setBooks(data);
    setFilterBooks(data);
  }

  function handleUpdate(newBook, isChanged) {
    if (isChanged) {
      const newList = books.map(b => {
        if (b.id === newBook.id) b = newBook;
        return b;
      });

      setBooks(newList);
      setFilterBooks(newList);
    } else {
      const newList = books;
      newList.push(newBook);

      setBooks(newList);
      setFilterBooks(newList);
    }
  }

  async function handleDelete(oldBook) {
    const newList = books.filter(b => {
      if (b.id !== oldBook.id) return b;
    });

    await api.delete(`/books/${oldBook.id}`);

    setBooks(newList);
    setFilterBooks(newList);
  }

  return (
    <DashboardComponent
      handleUpdate={(newBook, isChanged) => handleUpdate(newBook, isChanged)}
      handleDelete={oldBook => handleDelete(oldBook)}
      rentBook={book => rentBook(book)}
      handleLogout={handleLogout}
      filterList={value => filterList(value)}
      expandBook={index => expandBook(index)}
      isAdmin={isAdmin}
      filterBooks={filterBooks}
      expand={expand}
      searchText={searchText}
      isVisible={isVisible}
      editBook={editBook}
      setEditBook={setEditBook}
      setIsVisible={setIsVisible}
    />
  );
}
