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

  function filterList() {
    let items = books;
    items = items.filter(item => {
      return item.title.toLowerCase().search(searchText.toLowerCase()) !== -1;
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

  function handleUpdate(newBook) {
    const newList = books;
    newList.push(newBook);
    setBooks(newList);
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
            onChange={event => setSearchText(event.target.value)}
          />
          <button onClick={() => filterList()}>Pesquisar</button>
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
                      <BookRent disabled={book.rented}>Excluir</BookRent>
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
        data={editBook}
        isVisible={isVisible || editBook}
        handleClose={() => {
          setIsVisible(false), setEditBook(false);
        }}
        updateBooks={newBook => handleUpdate(newBook)}
      />
    </Container>
  );
}
