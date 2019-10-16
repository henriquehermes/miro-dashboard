import 'babel-polyfill';
import Api from '../config/api';

export async function getData() {
  const response = await Api.get('/books');
  return response.data;
}

export async function putData(book) {
  const response = await Api.put(`/books/${book.id}`, book);
  return response.data;
}

export async function deleteData(book) {
  const response = await Api.delete(`/books/${book.id}`);
  return response.data;
}
