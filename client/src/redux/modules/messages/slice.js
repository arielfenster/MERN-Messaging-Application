import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect'
const initialState = {
  list: []
};

// Create a slice that encapsulates the action creator and reducer
const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.list.push(action.payload);
      return state;
    },
    deleteMessage: (state, action) => {
      const { messageId } = action.payload;
      state.messages = state.messages.list.filter(msg => msg._id !== messageId);
      return state;
    },
  },
});


// Export the slice actions
export const actions = {
  ...slice.actions,
}

// Export the slice reducer
export const { reducer } = slice;

// Create a messages slice (list) selector and export it
const getMessagesSlice = (state) => state.messages || initialState;

const getMessages = createSelector(
  getMessagesSlice,
  (messages) => messages.list
);

export const selectors = {
  getMessages,
};
