import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesLayout() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click
  const handleAddStoryClick = () => {
    navigate("/success-stories/submit"); // Change URL to /success-stories/submit
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Alumni Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-12">
              Hear from our graduates about how our programs have helped them
              achieve their goals.
            </p>
          </div>
        </div>
        {/* The Outlet will render either SuccessStoryShowcase or SubmitAStory depending on the route */}
        <div className="mt-5">
          <Outlet />
        </div>
      </section>
      <footer className="sticky bottom-0 left-0 right-0 z-10 backdrop-blur-md bg-background/80 border-t px-4 md:px-6 py-3 flex justify-center">
        <Button onClick={handleAddStoryClick}>Add Your Story</Button>
      </footer>
    </div>
  );
}
