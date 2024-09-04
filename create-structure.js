import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { name: "Home", subpages: [] },
  {
    name: "UserManagementAndProfile",
    subpages: ["RegistrationPage", "LoginPage", "ProfilePage"],
  },
  {
    name: "DonationPortal",
    subpages: ["DonationCampaignsPage", "DonationForm", "DonationHistory"],
  },
  {
    name: "NetworkingHub",
    subpages: [
      "AlumniSearch",
      "MessagingCenter",
      "DiscussionForums",
      "InterestGroups",
    ],
  },
  {
    name: "JobPortal",
    subpages: [
      "JobSearchPage",
      "JobPostingForm",
      "MyApplications",
      "ResumeBuilder",
    ],
  },
  { name: "AlumniDirectory", subpages: ["DirectorySearch", "AlumniProfiles"] },
  {
    name: "SuccessStories",
    subpages: ["SuccessStoryShowcase", "SubmitAStory"],
  },
  {
    name: "EventsAndReunions",
    subpages: [
      "EventCalendar",
      "EventRegistration",
      "EventCreation",
      "PastEvents",
    ],
  },
  { name: "FeedbackAndSurveys", subpages: ["FeedbackForm", "ActiveSurveys"] },
  {
    name: "AdminDashboard",
    subpages: [
      "UserManagement",
      "ContentManagement",
      "DonationManagement",
      "AnalyticsDashboard",
      "SystemSettings",
    ],
  },
];

function createPage(pageName) {
  return `import React from 'react';

const ${pageName} = () => {
  return (
    <div>
      <h1>${pageName}</h1>
      {/* Add your page content here */}
    </div>
  );
};

export default ${pageName};
`;
}

function createLayout(pageName) {
  return `import React from 'react';
import { Outlet } from 'react-router-dom';

const ${pageName}Layout = () => {
  return (
    <div>
      <h1>${pageName}</h1>
      <Outlet />
    </div>
  );
};

export default ${pageName}Layout;
`;
}

function createDirectoryStructure() {
  const baseDir = path.join(__dirname, "src", "pages");

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  pages.forEach((page) => {
    const pageDir = path.join(baseDir, page.name);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir);
    }

    fs.writeFileSync(path.join(pageDir, "Layout.jsx"), createLayout(page.name));

    if (page.subpages.length === 0) {
      fs.writeFileSync(
        path.join(pageDir, `${page.name}.jsx`),
        createPage(page.name)
      );
    } else {
      page.subpages.forEach((subpage) => {
        fs.writeFileSync(
          path.join(pageDir, `${subpage}.jsx`),
          createPage(subpage)
        );
      });
    }
  });

  console.log("Directory structure and files created successfully!");
}

createDirectoryStructure();
