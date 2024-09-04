import { useSelector } from "react-redux";

const DonationCampaignsPage = () => {
  const campaigns = useSelector((state) => state.donation.campaigns);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Donation Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p className="font-bold">Goal: ${campaign.goal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationCampaignsPage;
