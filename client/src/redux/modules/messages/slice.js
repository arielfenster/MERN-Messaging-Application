import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

// Create a slice that encapsulates the action creator and reducer
const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessageSubmitted: (state) => state,
    addMessageSuccess: (state, action) => {
      state.list.push(action.payload);
      return state;
    },
    getUserMessagesSubmitted: (state) => state,
    getUserMessagesSuccess: (state, action) => {
      state.list = action.payload;
      return state;
    },
    deleteMessageSubmitted: (state) => state,
    deleteMessageSuccess: (state, action) => {
      const { messageId } = action.payload;
      state.list = state.list.filter(msg => msg._id !== messageId);
      return state;
    },
  },
});


// Export the slice actions
export const actions = {
  ...slice.actions,
}

// Export the slice reducer
export const reducer = slice.reducer;

// Create a messages list selector and export it

/**
 * 1st param - messages slice selector function
 * 2nd param - result function that uses the output of the first function
 */
const getMessages = createSelector(
  (state) => state.messages || initialState,
  (messages) => messages.list
);

export const selectors = {
  getMessages,
};
