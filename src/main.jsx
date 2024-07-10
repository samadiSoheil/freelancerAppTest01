import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import Owner from "./pages/Owner.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import OwnerLayout from "./features/owner/OwnerLayout.jsx";
import Freelancer from "./pages/Freelancer.jsx";
import FreelancerLayout from "./features/Freelancer/FreelancerLayout.jsx";
import FreelancerProposals from "./pages/FreelancerProposals.jsx";
import SubmitedProjects from "./pages/SubmitedProjects.jsx";
import ProtectedRoute from "./ui/protectedRoute/ProtectedRoute.jsx";
import NotFound from "./ui/Errors/NotFound.jsx";
import NotAccess from "./ui/Errors/NotAccess.jsx";
import Admin from "./pages/Admin.jsx";
import AdminLayout from "./features/admin/AdminLayout.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import AllProjectsForAdmin from "./pages/AllProjectsForAdmin.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },
  {
    path: "/owner",
    element: (
      <ProtectedRoute>
        <OwnerLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace={true} />,
      },
      {
        path: "dashboard",
        element: <Owner />,
      },
      ,
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
    ],
  },
  {
    path: "/freelancer",
    element: (
      <ProtectedRoute>
        <FreelancerLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace={true} />,
      },
      {
        path: "dashboard",
        element: <Freelancer />,
      },
      {
        path: "proposals",
        element: <FreelancerProposals />,
      },
      {
        path: "projects",
        element: <SubmitedProjects />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace={true} />,
      },
      {
        path: "dashboard",
        element: <Admin />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "proposals",
        element: <FreelancerProposals />,
      },
      {
        path: "projects",
        element: <AllProjectsForAdmin />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
    ],
  },
  {
    path: "not-access",
    element: <NotAccess />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);
