import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import AppLayout from "./ui/AppLauout/AppLayout.jsx";
import Owner from "./pages/Owner.jsx";
import Projects from "./pages/Projects.jsx";

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
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Owner />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </>
);
