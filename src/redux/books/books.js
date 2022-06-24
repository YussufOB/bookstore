const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VH7AXvftN4U24jGEQckE/books';
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOK:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const fetchBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const sentBook = (payload) => (
  async (dispatch) => {
    await fetch(urlAPI, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: {
          bookTitle: payload.title,
          bookAuthor: payload.author,
        },
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

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

export const getBook = async (dispatch) => {
  // const response = await fetch(`${urlAPI}`);
  // const data = await response.json();
  // const books = Object.entries(data);

  // books.forEach(item => {
  //   const [id, value] = item;
  //   const { title, category } = value[0];
  //   const { bookTitle, bookAuthor } = title;

  //   const newBook = {
  //     id,
  //     title: bookTitle,
  //     author: bookAuthor,
  //     category,
  //   };
  //   dispatch(addBook(newBook));
  // });

  const books = await fetch(`${urlAPI}`)
    .then((respnse) => respnse.json());
  const booksID = Object.keys(books);
  const newBook = [];
  booksID.map((key) => newBook.push({
    id: key,
    title: books[key][0].title,
    author: books[key][0].author,
    category: books[key][0].category,
  }));
  dispatch(fetchBook(newBook));
};

export default booksReducer;

// VH7AXvftN4U24jGEQckE
