import React from 'react';

import * as Styles from './DashboardStyles';
import Modal from '../../components/Modal/ModalComponent';
import Input from '../../components/Input/InputComponent';
import Button from '../../components/Button/ButtonComponent';

export default function Dashboard(props) {
  const {
    handleUpdate,
    handleDelete,
    rentBook,
    handleLogout,
    filterList,
    expandBook,
    isAdmin,
    filterBooks,
    expand,
    searchText,
    isVisible,
    editBook,
    setEditBook,
    setIsVisible,
  } = props;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.SearchBar>
          <Input
            id='search'
            type='text'
            value={searchText}
            placeholder='Informe o titulo do livro'
            onChange={event => filterList(event.target.value)}
          />
          <Button onClick={() => filterList(searchText)}>Pesquisar</Button>
        </Styles.SearchBar>
        {isAdmin && (
          <Button marginHorizontal onClick={() => setIsVisible(true)}>
            Adicionar
          </Button>
        )}
        <Button
          marginHorizontal={isAdmin ? false : true}
          onClick={() => handleLogout()}
        >
          Sair
        </Button>
      </Styles.Header>
      <Styles.Content>
        <Styles.Title>Lista de livros</Styles.Title>
        {filterBooks.length === 0 ? (
          <div>
            <h1>Nenhum livro cadastrado :(</h1>
          </div>
        ) : (
          filterBooks.length > 0 &&
          filterBooks.map((book, index) => (
            <Styles.Animated
              key={book.id}
              duration={500}
              height={expand === index ? 'auto' : 50}
            >
              <Styles.Column>
                <Styles.Row>
                  <Styles.BookTitle>
                    <strong>{book.title}</strong> - {book.author}
                  </Styles.BookTitle>
                  <Button
                    marginHorizontal
                    withBorder
                    onClick={() => expandBook(expand === index ? null : index)}
                    active={expand === index}
                  >
                    Detalhes
                  </Button>
                  <Button
                    marginHorizontal
                    withBorder
                    onClick={() => rentBook(book)}
                    disabled={book.rented}
                  >
                    {book.rented ? 'Alugado' : 'Disponível'}
                  </Button>
                  {isAdmin && (
                    <>
                      <Button
                        marginHorizontal
                        withBorder
                        disabled={book.rented}
                        onClick={() => setEditBook(book)}
                      >
                        Editar
                      </Button>
                      <Button
                        marginHorizontal
                        withBorder
                        disabled={book.rented}
                        onClick={() => handleDelete(book)}
                      >
                        Excluir
                      </Button>
                    </>
                  )}
                </Styles.Row>
                <Styles.DValue>
                  <strong>Paginas:</strong> {book.pages}
                </Styles.DValue>
                <Styles.DValue>
                  <strong>Ano:</strong> {book.year}
                </Styles.DValue>
                <Styles.DValue>
                  <strong>Situação:</strong>{' '}
                  {book.rented ? 'Alugado' : 'Disponível'}
                </Styles.DValue>
              </Styles.Column>
            </Styles.Animated>
          ))
        )}
      </Styles.Content>
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
    </Styles.Container>
  );
}
