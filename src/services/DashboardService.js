import 'babel-polyfill';
import Api from '../config/api';

export async function getData() {
  const response = await Api.get('/books');
  return response.data;
}

export async function putData(book, id) {
  if(id) {
    const response = await Api.put(`/books/${id}`, book);
    return response.data;
  }
  console.log(book)
    const response = await Api.put(`/books/${book.id}`, book);
    return response.data;
}

export async function postData(book) {
  const response = await Api.post(`/books`, book);
  return response.data;
}

export async function deleteData(book) {
  const response = await Api.delete(`/books/${book.id}`);
  return response.data;
}
