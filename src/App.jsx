import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RegistrationForm from './Pages/Register';
import Footer from './components/Footer';
import DonationForm from "./components/DonationForm";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { ContactProvider } from "./components/context/contact/contactContext.jsx";

function App() {
  return (
    <Router>
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
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster richColors position="top-center" />
      </ContactProvider>
    </Router>
  );
}

export default App;
