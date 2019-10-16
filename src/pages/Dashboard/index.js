import React, { useState, useEffect } from 'react';
import api from '../../config/api';

import {
  Container,
  SearchBar,
  Content,
  Title,
  Row,
  BookExpand,
  BookRent,
  BookTitle,
  Animated,
  Column,
  DValue,
  Button,
  Header,
} from './styles';
import Modal from './components/Modal';

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
    <Container>
      <Header>
        <SearchBar>
          <input
            id='search'
            type='text'
            value={searchText}
            placeholder='Informe o titulo do livro'
            onChange={event => filterList(event.target.value)}
          />
          <button onClick={() => filterList(searchText)}>Pesquisar</button>
        </SearchBar>
        {isAdmin && (
          <Button onClick={() => setIsVisible(true)}>Adicionar</Button>
        )}
        <Button onClick={() => handleLogout()}>Sair</Button>
      </Header>
      <Content>
        <Title>Lista de livros</Title>
        {filterBooks.length > 0 &&
          filterBooks.map((book, index) => (
            <Animated
              key={book.id}
              duration={500}
              height={expand === index ? 'auto' : 50}
            >
              <Column>
                <Row>
                  <BookTitle>
                    <strong>{book.title}</strong> - {book.author}
                  </BookTitle>
                  <BookExpand
                    onClick={() => expandBook(index)}
                    active={expand === index}
                  >
                    Detalhes
                  </BookExpand>
                  <BookRent
                    onClick={() => rentBook(book)}
                    disabled={book.rented}
                  >
                    {book.rented ? 'Alugado' : 'Disponível'}
                  </BookRent>
                  {isAdmin && (
                    <>
                      <BookRent
                        disabled={book.rented}
                        onClick={() => setEditBook(book)}
                      >
                        Editar
                      </BookRent>
                      <BookRent
                        disabled={book.rented}
                        onClick={() => handleDelete(book)}
                      >
                        Excluir
                      </BookRent>
                    </>
                  )}
                </Row>
                <DValue>
                  <strong>Paginas:</strong> {book.pages}
                </DValue>
                <DValue>
                  <strong>Ano:</strong> {book.year}
                </DValue>
                <DValue>
                  <strong>Situação:</strong>{' '}
                  {book.rented ? 'Alugado' : 'Disponível'}
                </DValue>
              </Column>
            </Animated>
          ))}
      </Content>
      <Modal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
        updateBooks={newBook => handleUpdate(newBook)}
      />
      <Modal
        data={editBook}
        isVisible={!!editBook}
        handleClose={() => setEditBook('')}
        updateBooks={(newBook, isChanged) => handleUpdate(newBook, isChanged)}
      />
    </Container>
  );
}
