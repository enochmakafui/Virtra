import LoginForm from '../features/authentication/LoginForm';
import Container from '../ui/Container';
import DoctorLandingPageImage from '../ui/DoctorLandingPageImage';
import Footer from '../ui/Footer';
import NavBar from '../ui/NavBar';

export default function LoginPage() {
  return (
    <div>
      <NavBar />
      <Container>
        <DoctorLandingPageImage />
        <LoginForm />
      </Container>
      <Footer />
    </div>
  );
}
