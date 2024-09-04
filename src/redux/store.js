import { configureStore } from "@reduxjs/toolkit";
import alumniReducer from "./alumniSlice";
import donationReducer from "./donationSlice";
import messagingReducer from "./messagingSlice";

const store = configureStore({
  reducer: {
    alumni: alumniReducer,
    donation: donationReducer,
    messaging: messagingReducer,
  },
});

export default store;
