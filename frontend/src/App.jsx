import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { VerificationEmailPage } from "./pages/VerificationEmailPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element="Hello"></Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerificationEmailPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
