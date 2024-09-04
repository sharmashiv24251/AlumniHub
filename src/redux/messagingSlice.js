import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      content: "Hey, how's it going?",
      timestamp: "2024-09-01T14:30:00Z",
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      content: "I'm doing great, thanks for asking!",
      timestamp: "2024-09-01T14:31:00Z",
    },
    {
      id: 3,
      senderId: 1,
      receiverId: 2,
      content:
        "That's great to hear! I was wondering if you're free for lunch tomorrow?",
      timestamp: "2024-09-01T14:32:00Z",
    },
    {
      id: 4,
      senderId: 2,
      receiverId: 1,
      content: "Yeah, I'm free tomorrow. Where did you want to go?",
      timestamp: "2024-09-01T14:33:00Z",
    },
  ],
  currentChat: null,
};

const messagingSlice = createSlice({
  name: "messaging",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setCurrentChat, sendMessage } = messagingSlice.actions;
export default messagingSlice.reducer;
