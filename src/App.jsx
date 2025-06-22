import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import AppLayout from './ui/AppLayout';
import Bookings from './Pages/Bookings';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='sign-up' element={<SignUpPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='bookings' element={<Bookings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
