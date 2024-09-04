import React from 'react';
import { Outlet } from 'react-router-dom';

const EventsAndReunionsLayout = () => {
  return (
    <div>
      <h1>EventsAndReunions</h1>
      <Outlet />
    </div>
  );
};

export default EventsAndReunionsLayout;
