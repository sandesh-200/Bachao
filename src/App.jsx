import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import DisasterDetailsModal from "./components/disasterModal";
import Resources from "./Pages/Resources";
import Reports from "./Pages/Reports";

function App() {
  return (
    <>
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
                  <Route path="/disaster-modal" element={<DisasterDetailsModal/>} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/reports" element={<Reports />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ContactProvider>
        </DisasterProvider>
      </Router>
    </>
  );
}

export default App;
