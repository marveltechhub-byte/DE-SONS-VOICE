import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import Grow from './component/pages/Grow';
import Signup from './component/pages/SignUp';
import Login from './component/pages/Login';
import Dashboard from './component/pages/Dashboard';
import ProtectedRoute from './component/pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<Grow />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🔒 PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
