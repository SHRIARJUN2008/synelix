import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectRole from "./pages/SelectRole";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import InstitutionDashboard from "./pages/InstitutionDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/institution" element={<InstitutionDashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;