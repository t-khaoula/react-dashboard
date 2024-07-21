import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Team from "./components/pages/team/Team";
import Contacts from "./components/pages/contacts/Contacts";
import Invoices from "./components/pages/invoices/Invoices";
import Form from "./components/pages/form/Form";
import Calendar from "./components/pages/calendar/Calendar";
import Faq from "./components/pages/faq/Faq";
import Bar from "./components/pages/bar/Bar";
import Pie from "./components/pages/pie/Pie";
import Line from "./components/pages/line/Line";
import Geography from "./components/pages/geography/Geography";
import NotFound from "./components/pages/not found/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
