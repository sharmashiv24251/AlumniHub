import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John Doe",
    course: "BTech",
    branch: "Computer Science",
    year: 2018,
    job: "Software Engineer",
    company: "Acme Inc.",
    profileImage: "https://github.com/shadcn.png",
    posts: [
      {
        id: 1,
        title: "New Feature Release",
        content:
          "We're excited to announce the release of our latest feature. Check it out and let us know what you think!",
        time: "2 hours ago",
      },
      {
        id: 2,
        title: "Team Outing",
        content:
          "The team had a great time at our annual outing. Check out the photos!",
        image: "/placeholder.svg",
        time: "1 day ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "Acme Inc Engineering",
        description:
          "A group for engineers at Acme Inc to discuss projects and share knowledge.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "Frontend Developers",
        description:
          "A group for frontend developers to share tips, tricks, and best practices.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    course: "BSc",
    branch: "Biology",
    year: 2015,
    job: "Research Scientist",
    company: "BioTech Labs",
    profileImage: "https://github.com/vercel.png",
    posts: [
      {
        id: 1,
        title: "New Research Paper Published",
        content:
          "I'm thrilled to announce that my research paper on gene editing has been published in a prestigious journal. Check it out!",
        time: "3 days ago",
      },
      {
        id: 2,
        title: "Lab Outing",
        content:
          "The lab team had a fun outing to the science museum. It was a great learning experience and team bonding activity.",
        image: "/placeholder.svg",
        time: "1 week ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "BioTech Labs Research",
        description:
          "A group for researchers at BioTech Labs to discuss projects, share findings, and collaborate.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "Biology Enthusiasts",
        description:
          "A group for biology enthusiasts to discuss the latest advancements in the field and share their passion.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    course: "MBA",
    branch: "Business Administration",
    year: 2012,
    job: "Marketing Manager",
    company: "Global Brands Inc.",
    profileImage: "https://github.com/vercel.png",
    posts: [
      {
        id: 1,
        title: "New Marketing Campaign Launch",
        content:
          "We've launched our latest marketing campaign, and we're excited to see the results. Check out the campaign materials!",
        time: "2 days ago",
      },
      {
        id: 2,
        title: "Team Building Activity",
        content:
          "The marketing team had a great time at our team building activity. It was a fun way to bond and improve collaboration.",
        image: "/placeholder.svg",
        time: "5 days ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "Global Brands Marketing",
        description:
          "A group for marketing professionals at Global Brands Inc to share strategies, best practices, and insights.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "MBA Alumni",
        description:
          "A group for MBA alumni to network, share career advice, and discuss business trends.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Sarah Lee",
    course: "LLB",
    branch: "Law",
    year: 2019,
    job: "Associate Attorney",
    company: "Legal Experts LLP",
    profileImage: "https://github.com/vercel.png",
    posts: [
      {
        id: 1,
        title: "Successful Case Resolution",
        content:
          "I'm proud to announce that we've successfully resolved a complex legal case for our client. It was a challenging but rewarding experience.",
        time: "1 week ago",
      },
      {
        id: 2,
        title: "Legal Seminar",
        content:
          "I attended an informative legal seminar on the latest developments in intellectual property law. It was a great learning opportunity.",
        image: "/placeholder.svg",
        time: "2 weeks ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "Legal Experts LLP",
        description:
          "A group for attorneys at Legal Experts LLP to discuss cases, share legal knowledge, and collaborate on projects.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "LLB Alumni",
        description:
          "A group for LLB alumni to network, share career advice, and discuss legal trends and issues.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "David Lee",
    course: "MBBS",
    branch: "Medicine",
    year: 2017,
    job: "Resident Physician",
    company: "City Hospital",
    profileImage: "https://github.com/vercel.png",
    posts: [
      {
        id: 1,
        title: "Successful Surgery",
        content:
          "I'm happy to share that I successfully performed a complex surgery yesterday. It was a challenging but rewarding experience.",
        time: "2 days ago",
      },
      {
        id: 2,
        title: "Medical Conference",
        content:
          "I attended an informative medical conference on the latest advancements in cancer treatment. It was a great learning opportunity.",
        image: "/placeholder.svg",
        time: "1 week ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "City Hospital Residents",
        description:
          "A group for resident physicians at City Hospital to discuss cases, share medical knowledge, and collaborate on research.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "MBBS Alumni",
        description:
          "A group for MBBS alumni to network, share career advice, and discuss medical trends and issues.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Emily Chen",
    course: "MSc",
    branch: "Computer Science",
    year: 2020,
    job: "Data Scientist",
    company: "Analytics Inc.",
    profileImage: "https://github.com/vercel.png",
    posts: [
      {
        id: 1,
        title: "Data Science Project Completed",
        content:
          "I'm excited to share that I've completed a data science project for a client. It was a challenging but rewarding experience.",
        time: "3 days ago",
      },
      {
        id: 2,
        title: "Data Science Meetup",
        content:
          "I attended an informative data science meetup on the latest advancements in machine learning. It was a great networking and learning opportunity.",
        image: "/placeholder.svg",
        time: "1 week ago",
      },
    ],
    groups: [
      {
        id: 1,
        name: "Analytics Inc Data Science",
        description:
          "A group for data scientists at Analytics Inc to discuss projects, share insights, and collaborate on research.",
        groupImage: "/placeholder-user.jpg",
      },
      {
        id: 2,
        name: "MSc Computer Science Alumni",
        description:
          "A group for MSc Computer Science alumni to network, share career advice, and discuss the latest trends in computer science.",
        groupImage: "/placeholder-user.jpg",
      },
    ],
  },
];

const alumniSlice = createSlice({
  name: "alumni",
  initialState,
  reducers: {
    addAlumni: (state, action) => {
      state.push(action.payload);
    },
    updateAlumni: (state, action) => {
      const index = state.findIndex(
        (alumni) => alumni.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAlumni: (state, action) => {
      return state.filter((alumni) => alumni.id !== action.payload);
    },
  },
});

export const { addAlumni, updateAlumni, deleteAlumni } = alumniSlice.actions;
export default alumniSlice.reducer;
