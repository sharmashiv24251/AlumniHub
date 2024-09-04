// src/features/donation/donationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [
    {
      id: 1,
      title: "Support Local Schools",
      description: "Help fund educational programs in local schools.",
      goal: 5000,
    },
    {
      id: 2,
      title: "Animal Shelter Renovation",
      description: "Contribute to the renovation of our local animal shelter.",
      goal: 3000,
    },
    {
      id: 3,
      title: "Food Drive",
      description:
        "Donate to support food distribution to underprivileged families.",
      goal: 2000,
    },
  ],
  donationHistory: [
    {
      id: 1,
      amount: 100,
      campaignId: 1,
      donorId: 1,
    },
    {
      id: 2,
      amount: 200,
      campaignId: 1,
      donorId: 2,
    },
  ],
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload;
    },
    addDonation: (state, action) => {
      state.donations.push(action.payload);
    },
    setDonations: (state, action) => {
      state.donations = action.payload;
    },
  },
});

export const { setCampaigns, addDonation, setDonations } =
  donationSlice.actions;

export default donationSlice.reducer;
