// src/components/DonationForm.js
import { useDispatch, useSelector } from "react-redux";
import { addDonation } from "@/redux/donationSlice";
import { useState } from "react";

const DonationForm = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.donation.campaigns);
  const [amount, setAmount] = useState("");
  const [selectedCampaignId, setSelectedCampaignId] = useState("");

  const selectedCampaign = campaigns.find(
    (campaign) => campaign.id === Number(selectedCampaignId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCampaignId && amount) {
      dispatch(
        addDonation({
          amount: Number(amount),
          campaignId: Number(selectedCampaignId),
          date: new Date().toISOString(),
        })
      );
      setAmount("");
      setSelectedCampaignId("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Donate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaignId" className="block mb-1">
            Select Campaign
          </label>
          <select
            id="campaignId"
            value={selectedCampaignId}
            onChange={(e) => setSelectedCampaignId(e.target.value)}
            className="border p-2 w-full"
            required
          >
            <option value="">Select a campaign</option>
            {campaigns.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.title}
              </option>
            ))}
          </select>
          {selectedCampaign && (
            <div className="mt-2 p-4 border bg-gray-100">
              <h3 className="text-lg font-semibold">
                {selectedCampaign.title}
              </h3>
              <p>{selectedCampaign.description}</p>
              <p className="font-bold">Goal: ${selectedCampaign.goal}</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="amount" className="block mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-black text-white p-2 rounded">
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
