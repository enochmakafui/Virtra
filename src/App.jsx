import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import AppLayout from './ui/AppLayout';
import Appointments from './Pages/Appointments';
import Doctors from './Pages/Doctors';
import HealthBits from './Pages/HealthBits';
import Profile from './Pages/Profile';
import VirtraAi from './Pages/VirtraAi';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='app' element={<AppLayout />}>
              <Route index element={<Navigate to='doctors' replace />} />
              <Route path='doctors' element={<Doctors />} />
              <Route path='appointments' element={<Appointments />} />
              <Route path='health-bits' element={<HealthBits />} />
              <Route path='virtra-ai' element={<VirtraAi />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
