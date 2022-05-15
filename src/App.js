import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";

import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Library from "./pages/Library";
import Services from "./pages/Services";
import { errMsg } from "./utils/network";
import { useEffect, useState } from "react";
import ErrorAlert from "./components/ErrorAlert";

export default function App() {
  const { success } = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (errMsg !== undefined) setOpen(true);
  }, [errMsg]);
  return (
    <BrowserRouter>
      <ErrorAlert open={open} setOpen={setOpen} />
      {success == false ? (
        <SignIn />
      ) : (
        <Layout>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} exact />
            <Route path="/" element={<Users />} exact />
            <Route path="/courses" element={<Courses />} exact />
            <Route path="/library" element={<Library />} exact />
            <Route path="/services" element={<Services />} exact />
            <Route path="/new-service" element={<Services />} exact />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
}
