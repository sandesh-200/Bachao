import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RegistrationForm from './Pages/Register';
import Footer from './components/Footer';
import DonationForm from "./components/DonationForm";
import Contact from "./Pages/Contact";
import { DisasterProvider } from './components/context/disaster/disasterContext'
import { ContactProvider } from './components/context/contact/contactContext'
import ServicesSection from "./Pages/Services";
import DisasterAlert from "./components/DisasterAlert";

function App() {
  return (
    <Router>
      <DisasterProvider>
        <ContactProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <DisasterAlert />
            <Toaster position="top-right" richColors />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/donation" element={<DonationForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<ServicesSection />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ContactProvider>
      </DisasterProvider>
    </Router>
  );
}

export default App;
