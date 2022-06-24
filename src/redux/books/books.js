const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FECTH_ALL_BOOK = 'bookStore/books/FECT_ALL_BOOK';
const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VH7AXvftN4U24jGEQckE/books';
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_ALL_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export const fetchAllBook = (payload) => ({
  type: FECTH_ALL_BOOK,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const sentBook = (payload) => async (dispatch) => {
  await fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.item_id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    }),
    headers: {
      'Content-type': 'application/JSON',
    },
  });
  dispatch(addBook(payload));
};

export const deleteBook = (id) => (
  async (dispatch) => {
    const response = await fetch(`${urlAPI}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    if (response.status === 201) {
      dispatch(removeBook(id));
    }
  }
);
export const getBook = () => async (dispatch) => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  const books = Object.entries(data);

  const bookLists = [];

  books.forEach((item) => {
    bookLists.push({
      item_id: item[0],
      ...item[1][0],
    });
  });

  dispatch(fetchAllBook(bookLists));
};

export default booksReducer;
