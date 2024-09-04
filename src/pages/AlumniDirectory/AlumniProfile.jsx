import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

export default function AlumniProfile() {
  const { id } = useParams(); // Get ID from URL params
  const alumni = useSelector((state) =>
    state.alumni.find((alumni) => alumni.id === parseInt(id))
  );

  if (!alumni) {
    return <p>Alumni not found</p>; // Handle case where alumni is not found
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap- md:gap-8">
        <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center">
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
            {alumni.course} in {alumni.branch} ({alumni.year})
          </p>
          <p className="text-muted-foreground mb-4">
            {alumni.job} at {alumni.company}
          </p>
          <div className="flex gap-4">
            <Button variant="outline">Send Message</Button>
            <Button>Follow</Button>
          </div>
        </div>
        <div className="col-span-2 bg-card rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Posts</h3>
          <ScrollArea className="max-h-[400px]">
            <div className="grid gap-4">
              {alumni.posts.map((post) => (
                <Card key={post.id}>
                  <CardContent>
                    <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                    <p className="text-muted-foreground mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        width={400}
                        height={225}
                        alt={post.title}
                        className="rounded-lg"
                        style={{ aspectRatio: "400/225", objectFit: "cover" }}
                      />
                    )}
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar>
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
                      <div>
                        <p className="font-medium">{alumni.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="col-span-2 bg-card rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Groups</h3>
          <ScrollArea className="max-h-[400px]">
            <div className="grid gap-4">
              {alumni.groups.map((group) => (
                <Card key={group.id}>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={group.groupImage || "/placeholder-user.jpg"}
                          alt={group.name}
                        />
                        <AvatarFallback>
                          {group.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-bold">{group.name}</h4>
                        <p className="text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
