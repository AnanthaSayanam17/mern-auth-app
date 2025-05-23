import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { VerificationEmailPage } from "./pages/VerificationEmailPage";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Button } from "./components/ui/button";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./pages/HomePage/Navbar";
import Hero from "./pages/HomePage/Hero";
import Footer from "./pages/HomePage/Footer";
import DashboardPage from "./pages/DashBoardPage";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AuthenticatedUserRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

function App() {
  // const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { isCheckingAuth, checkAuth, isAuthenticated, user, logout } =
    useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth, location]);
  console.log(user);
  // console.log(isAuthenticated);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  // const handleLogout = async () => {
  //   await logout();
  //   navigate("/login", { replace: true }); // prevents going back to /dashboard
  // };

  return (
    <div>
      {/* {user && <Button onClick={handleLogout}>Logout</Button>} */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <AuthenticatedUserRoute>
              <SignUpPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthenticatedUserRoute>
              <LoginPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route path="/verify-email" element={<VerificationEmailPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthenticatedUserRoute>
              <ForgotPasswordPage />
            </AuthenticatedUserRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
