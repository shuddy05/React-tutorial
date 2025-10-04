import React from "react";  
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error404 = lazy(() => import("./pages/Error404"));
const Profiles = lazy(() => import("./pages/Profiles"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const Login = lazy(() => import("./pages/Login"));
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
const App = () => {
  return (
    <Suspense fallback={<h1>Loading Application</h1>}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<h1>PROFILE PAGE</h1>} />
            <Route path="settings" element={<h1>SETTINGS PAGE</h1>} />
            <Route path="account" element={<h1>ACCOUNT PAGE</h1>} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
