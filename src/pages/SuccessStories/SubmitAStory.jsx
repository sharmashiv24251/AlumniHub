import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const SubmitAStory = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here...

    // After processing, navigate back to the showcase page
    navigate("/success-stories/showcase");
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mx-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Submit Your Success Story
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="job"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job"
              name="job"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="story"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Story
            </label>
            <textarea
              id="story"
              name="story"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Share your experience..."
            />
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit" className="mt-4">
              Submit Story
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAStory;
