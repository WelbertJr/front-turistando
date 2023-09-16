import { HomePage } from ".//Pages/HomePage/HomePage";
import { AdminLogin } from "./Pages/AdminLogin/AdminLogin";
import { AdminPage } from "./Pages/AdminPage/AdminPage";
import { ErrorPage401 } from "./Pages/ErrorPage401/ErrorPage401";
import { ErrorPage404 } from "./Pages/ErrorPage404/ErrorPage404";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./utils/contexts/isAuthenticated";
import { ProtectedRoute } from "./utils/functions/ProtectedRoute";

function App() {
  return (
    <AuthenticationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage404 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/adminPage"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="/error401" element={<ErrorPage401 />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
