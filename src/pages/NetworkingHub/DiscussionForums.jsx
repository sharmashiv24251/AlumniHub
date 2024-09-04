import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Posts = () => {
  const dispatch = useDispatch();
  const alumniList = useSelector((state) => state.alumni);

  const [likedPosts, setLikedPosts] = useState({});

  const handleLike = (alumniId, postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [`${alumniId}-${postId}`]: !prev[`${alumniId}-${postId}`],
    }));
    // Here you would typically dispatch an action to update the likes in your Redux store
    // dispatch(likePost({ alumniId, postId }));
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniList.map((alumni) => (
          <div key={alumni.id}>
            {alumni.posts.map((post) => (
              <Card
                key={post.id}
                className="bg-white shadow-lg rounded-lg mb-8 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Link to={`/profile/${alumni.id}`}>
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={alumni.profileImage || "/placeholder-user.jpg"}
                          alt={alumni.name}
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          {alumni.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                    <div>
                      <Link to={`/profile/${alumni.id}`}>
                        <CardTitle className="text-lg hover:underline">
                          {alumni.name}
                        </CardTitle>
                      </Link>
                      <CardDescription className="text-sm">
                        {post.time}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto rounded-md mb-4"
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(alumni.id, post.id)}
                      className={`flex items-center gap-2 ${
                        likedPosts[`${alumni.id}-${post.id}`]
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          likedPosts[`${alumni.id}-${post.id}`]
                            ? "fill-current"
                            : ""
                        }`}
                      />
                      {likedPosts[`${alumni.id}-${post.id}`] ? "Liked" : "Like"}
                    </Button>
                    <span className="text-sm text-gray-500">
                      {alumni.company}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
