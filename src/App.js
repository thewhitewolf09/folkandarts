import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/dashboard" element={<StudentDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
