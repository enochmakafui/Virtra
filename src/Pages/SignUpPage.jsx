import NavBar from '../ui/NavBar';
import Container from '../ui/Container';
import Footer from '../ui/Footer';
import DoctorLandingPageImage from '../ui/DoctorLandingPageImage';
import SignUpForm from '../features/authentication/SignUpForm';

export default function SignUpPage() {
  return (
    <div>
      <NavBar />
      <Container>
        <DoctorLandingPageImage />
        <SignUpForm />
      </Container>
      <Footer />
    </div>
  );
}
