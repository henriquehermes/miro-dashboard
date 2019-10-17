/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

import { putData, postData } from "../../services/DashboardService"

import Form  from './ModalStyles';

export default function ModalComponent({
  data,
  isVisible,
  handleClose,
  updateBooks,
}) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    pages: '',
    year: '',
  });

  useEffect(() => {
    if (data) {
      setBook({
        title: data.title,
        author: data.author,
        pages: data.pages,
        year: data.year,
      });
    }
  }, [data]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { title, author, pages, year } = book;

    if (title !== '' && author !== '' && pages !== '' && year !== '') {
      book.rented = false;
      const response = await postData(book)
      updateBooks(response);
      handleClose();
    }
  }

  async function handleEdit(e) {
    e.preventDefault();
    const { title, author, pages, year } = book;

    if (title !== '' && author !== '' && pages !== '' && year !== '') {
      const response = await putData(book, data.id)
      updateBooks(response, true);
      handleClose();
    }
  }

  return (
    <Modal open={isVisible} onClose={handleClose} center closeIconSize={25}>
      <h2>
        {data ? 'Editar' : 'Adicionar'}
        {' '}
        livro
      </h2>
      <Form>
        <input
          placeholder='Titulo'
          id='title'
          type='text'
          value={book.title}
          onChange={event => setBook({ ...book, title: event.target.value })}
        />
        <input
          placeholder='Autor'
          id='author'
          type='text'
          value={book.author}
          onChange={event => setBook({ ...book, author: event.target.value })}
        />
        <input
          placeholder='Paginas'
          id='pages'
          type='text'
          value={book.pages}
          onChange={event => setBook({ ...book, pages: event.target.value })}
        />
        <input
          placeholder='Ano'
          id='year'
          type='text'
          value={book.year}
          onChange={event => setBook({ ...book, year: event.target.value })}
        />
        {data ? (
          <button type="button" onClick={e => handleEdit(e)}>Salvar</button>
        ) : (
          <button type="button" onClick={e => handleSubmit(e)}>Adicionar</button>
        )}
      </Form>
    </Modal>
  );
}

ModalComponent.propTypes = {
  data: PropTypes.shape.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  updateBooks: PropTypes.func.isRequired,
};
