import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import layouts
import Nav from "./pages/Home/Layout";
import UserManagementAndProfileLayout from "./pages/UserManagementAndProfile/Layout";
import DonationPortalLayout from "./pages/DonationPortal/Layout";
import NetworkingHubLayout from "./pages/NetworkingHub/Layout";
import JobPortalLayout from "./pages/JobPortal/Layout";
import AlumniDirectoryLayout from "./pages/AlumniDirectory/Layout";
import SuccessStoriesLayout from "./pages/SuccessStories/Layout";
import EventsAndReunionsLayout from "./pages/EventsAndReunions/Layout";
import FeedbackAndSurveysLayout from "./pages/FeedbackAndSurveys/Layout";
import AdminDashboardLayout from "./pages/AdminDashboard/Layout";

// Import pages
import Home from "./pages/Home/Home";
import RegistrationPage from "./pages/UserManagementAndProfile/RegistrationPage";
import LoginPage from "./pages/UserManagementAndProfile/LoginPage";
import ProfilePage from "./pages/UserManagementAndProfile/ProfilePage";
import DonationCampaignsPage from "./pages/DonationPortal/DonationCampaignsPage";
import DonationForm from "./pages/DonationPortal/DonationForm";
import DonationHistory from "./pages/DonationPortal/DonationHistory";
import AlumniSearch from "./pages/NetworkingHub/AlumniSearch";
import MessagingCenter from "./pages/NetworkingHub/MessagingCenter";
import InterestGroups from "./pages/NetworkingHub/InterestGroups";
import JobSearchPage from "./pages/JobPortal/JobSearchPage";
import JobPostingForm from "./pages/JobPortal/JobPostingForm";
import MyApplications from "./pages/JobPortal/MyApplications";
import ResumeBuilder from "./pages/JobPortal/ResumeBuilder";
import DirectorySearch from "./pages/AlumniDirectory/DirectorySearch";
import SuccessStoryShowcase from "./pages/SuccessStories/SuccessStoryShowcase";
import SubmitAStory from "./pages/SuccessStories/SubmitAStory";
import EventCalendar from "./pages/EventsAndReunions/EventCalendar";
import EventRegistration from "./pages/EventsAndReunions/EventRegistration";
import EventCreation from "./pages/EventsAndReunions/EventCreation";
import PastEvents from "./pages/EventsAndReunions/PastEvents";
import FeedbackForm from "./pages/FeedbackAndSurveys/FeedbackForm";
import ActiveSurveys from "./pages/FeedbackAndSurveys/ActiveSurveys";
import UserManagement from "./pages/AdminDashboard/UserManagement";
import ContentManagement from "./pages/AdminDashboard/ContentManagement";
import DonationManagement from "./pages/AdminDashboard/DonationManagement";
import AnalyticsDashboard from "./pages/AdminDashboard/AnalyticsDashboard";
import SystemSettings from "./pages/AdminDashboard/SystemSettings";
import AlumniProfile from "./pages/AlumniDirectory/AlumniProfile";
import Posts from "./pages/NetworkingHub/DiscussionForums";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<UserManagementAndProfileLayout />}>
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="/donation" element={<DonationPortalLayout />}>
            <Route path="campaigns" element={<DonationCampaignsPage />} />
            <Route index element={<DonationCampaignsPage />} />
            <Route path="form" element={<DonationForm />} />
            <Route path="history" element={<DonationHistory />} />
          </Route>
          <Route path="/networking" element={<NetworkingHubLayout />}>
            <Route path="search" element={<AlumniDirectoryLayout />} />
            {/* <Route path="search" element={<AlumniSearch />} /> */}
            <Route path="messages" element={<MessagingCenter />} />
            <Route path="posts" element={<Posts />} />
            <Route index element={<Posts />} />
            <Route path="groups" element={<InterestGroups />} />
          </Route>
          <Route path="/jobs" element={<JobPortalLayout />}>
            <Route path="search" element={<JobSearchPage />} />
            <Route path="post" element={<JobPostingForm />} />
            <Route path="applications" element={<MyApplications />} />
            <Route path="resume" element={<ResumeBuilder />} />
          </Route>
          <Route path="/alumni" element={<AlumniDirectoryLayout />}>
            <Route path="search" element={<DirectorySearch />} />
          </Route>
          <Route path="/profile/:id" element={<AlumniProfile />} />

          <Route path="/success-stories" element={<SuccessStoriesLayout />}>
            <Route index element={<SuccessStoryShowcase />} />
            <Route path="showcase" element={<SuccessStoryShowcase />} />
            <Route path="submit" element={<SubmitAStory />} />
          </Route>

          <Route path="/events" element={<EventsAndReunionsLayout />}>
            <Route path="calendar" element={<EventCalendar />} />
            <Route path="register" element={<EventRegistration />} />
            <Route path="create" element={<EventCreation />} />
            <Route path="past" element={<PastEvents />} />
          </Route>
          <Route path="/feedback" element={<FeedbackAndSurveysLayout />}>
            <Route path="form" element={<FeedbackForm />} />
            <Route path="surveys" element={<ActiveSurveys />} />
          </Route>
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route path="users" element={<UserManagement />} />
            <Route path="content" element={<ContentManagement />} />
            <Route path="donations" element={<DonationManagement />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
            <Route path="settings" element={<SystemSettings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
