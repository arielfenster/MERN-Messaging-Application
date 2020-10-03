import { createSlice, createSelector } from '@reduxjs/toolkit';

export const SLICE_KEY = 'error';

const initialState = {
  message: '',
  status: '',
};

// Create a slice that encapsulates the action creator and reducer
const slice = createSlice({
  name: SLICE_KEY,
  initialState,
  reducers: {
    getAllMessagesFailed: (state, action) => {
      const { message, status } = action.payload;

      state.message = message;
      state.status = status;
      return state;
    },
    getUserMessagesFailed: (state, action) => {
      const { message, status } = action.payload;
      
      state.message = message;
      state.status = status;
      return state;
    },
    addMessageFailed: (state, action) => {
      const { message, status } = action.payload;

      state.message = message;
      state.status = status;
      return state;
    },
    deleteMessageFailed: (state, action) => {
      const { message, status } = action.payload;

      state.message = message;
      state.status = status;
      return state;
    },
    clearError: (state) => {
      state.message = '';
      state.status = '';
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
  (state) => state[SLICE_KEY] || initialState,
  (error) => ({
    message: error.message,
    status: error.status,
  })
);

export const selectors = {
  getErrors,
};
