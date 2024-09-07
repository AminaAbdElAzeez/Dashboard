import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Spinner from "./Components/Spinner/Spinner";
import NotFoundPage from "./Routes/NotFound/page.jsx";
import ErrorPage from "./Routes/ErrorPage/page.jsx";

const DashboardLayout = lazy(() =>
  import("./Routes/DashboardLayout/page/Page.jsx")
);
const Team = lazy(() => import("./Routes/DashboardLayout/Team/page.jsx"));
const Contacts = lazy(() =>
  import("./Routes/DashboardLayout/Contacts/page.jsx")
);
const ProfileForm = lazy(() =>
  import("./Routes/DashboardLayout/ProfileForm/page.jsx")
);
const BarChart = lazy(() =>
  import("./Routes/DashboardLayout/BarChart/page.jsx")
);
const PieChart = lazy(() =>
  import("./Routes/DashboardLayout/PieChart/page.jsx")
);
const LineChart = lazy(() =>
  import("./Routes/DashboardLayout/LineChart/page.jsx")
);
const CalendarPage = lazy(() =>
  import("./Routes/DashboardLayout/Calendar/page.jsx")
);
const Root = lazy(() => import("./Routes/DashboardLayout/Root/page.jsx"));
const Home = lazy(() => import("./Routes/HomeLayout/page.jsx"));

const routes = createBrowserRouter([
  {
    index: true,
    element: (
      <Suspense fallback={<Spinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Spinner />}>
          <DashboardLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Root /> },
      { path: "team", element: <Team /> },
      { path: "contacts", element: <Contacts /> },
      { path: "form", element: <ProfileForm /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "bar", element: <BarChart /> },
      { path: "pie", element: <PieChart /> },
      { path: "line", element: <LineChart /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
