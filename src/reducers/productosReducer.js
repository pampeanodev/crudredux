// cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false
}

const productosReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default productosReducer;