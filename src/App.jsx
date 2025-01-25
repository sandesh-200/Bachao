import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DonationForm from "./components/DonationForm";
import Contact from "./Pages/Contact";
import { DisasterProvider } from './components/context/disaster/disasterContext'
import { ContactProvider } from './components/context/contact/contactContext'
import { ContactProvider } from "./components/context/contact/contactContext";
import RegistrationForm from "./Pages/Register";
import ServicesSection from "./Pages/Services";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <DisasterProvider>

      <ContactProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
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
        <Toaster richColors position="top-center" />
      </ContactProvider>
      </DisasterProvider>
    </Router>
  );
}

export default App;
