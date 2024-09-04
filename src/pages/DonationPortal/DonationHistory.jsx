import React from "react";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const DonationHistory = () => {
  const donationHistory = useSelector(
    (state) => state.donation.donationHistory
  );
  const alumni = useSelector((state) => state.alumni);
  const navigate = useNavigate();

  const handleDonorClick = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Donation History</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {donationHistory.map((donation) => {
          const donor = alumni.find((a) => a.id === donation.donorId);
          if (!donor) return null;

          return (
            <Card key={donation.id} className="flex flex-col">
              <Link to={`/profile/${donor.id}`}>
                <div className="flex-1">
                  <CardHeader className="flex items-center gap-4">
                    <Avatar
                      className="cursor-pointer w-16 h-16"
                      onClick={() => handleDonorClick(donor.id)}
                    >
                      <AvatarImage
                        src={donor.profileImage || "/placeholder-user.jpg"}
                        alt={donor.name}
                      />
                      <AvatarFallback>
                        {donor.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-semibold">
                      {donor.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground">
                      Donated: ${donation.amount} to Campaign{" "}
                      {donation.campaignId}
                    </p>
                  </CardContent>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DonationHistory;
