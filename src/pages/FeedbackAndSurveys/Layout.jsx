import React from 'react';
import { Outlet } from 'react-router-dom';

const FeedbackAndSurveysLayout = () => {
  return (
    <div>
      <h1>FeedbackAndSurveys</h1>
      <Outlet />
    </div>
  );
};

export default FeedbackAndSurveysLayout;
