import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DonationForm from "./components/DonationForm";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { ContactProvider } from "./components/context/contact/contactContext.jsx";

function App() {
  return (
    <Router>
      <ContactProvider>
        
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donation" element={<DonationForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
              </Routes>
            </main>
            <Footer />
          </div>
      </ContactProvider>
    </Router>
  );
}

export default App;
