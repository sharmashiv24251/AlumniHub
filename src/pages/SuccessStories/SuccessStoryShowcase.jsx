import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useSelector } from "react-redux";

export default function SuccessStoryShowcase() {
  // Fetch alumni data from Redux store
  const alumniList = useSelector((state) => state.alumni);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
      {alumniList.map((alumni) => (
        <Stories key={alumni.id} alumni={alumni} />
      ))}
    </div>
  );
}

const Stories = ({ alumni }) => {
  return (
    <Card className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage
          src={alumni.profileImage || "/placeholder-user.jpg"}
          alt={alumni.name}
        />
        <AvatarFallback>
          {alumni.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold mb-2">{alumni.name}</h2>
      <p className="text-muted-foreground mb-2">
        {alumni.job} at {alumni.company}
      </p>
      <div className="space-y-4">
        {alumni.posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-muted-foreground">{post.content}</p>
            <p className="text-sm text-muted-foreground">{post.time}</p>
            {post.image && (
              <img src={post.image} alt={post.title} className="mt-2" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
