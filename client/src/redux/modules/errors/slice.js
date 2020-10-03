import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  status: '',
};

// Create a slice that encapsulates the action creator and reducer
const slice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    getAllMessagesFailed: (state, action) => {
      const { error, status } = action.payload;

      state.error = error;
      state.status = status;
      return state;
    },
    getUserMessagesFailed: (state, action) => {
      const { error, status } = action.payload;
      
      state.error = error;
      state.status = status;
      return state;
    },
    addMessageFailed: (state, action) => {
      const { error, status } = action.payload;

      state.error = error;
      state.status = status;
      return state;
    },
    deleteMessageFailed: (state, action) => {
      const { error, status } = action.payload;

      state.error = error;
      state.status = status;
      return state;
    },
  }
});

// Export the slice actions
export const actions = {
  ...slice.actions,
}

// Export the slice reducer
export const reducer = slice.reducer;


// Create an errors selector and export it

/**
 * 1st param - errors slice selector function
 * 2nd param - result function that uses the output of the first function
 */
const getErrors = createSelector(
  (state) => state.errors || initialState,
  (errors) => errors.error
);

export const selectors = {
  getErrors,
};
