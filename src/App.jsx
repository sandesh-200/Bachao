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

function App() {
  return (
    <Router>
      <DisasterProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/donation" element={<DonationForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </DisasterProvider>
    </Router>
  );
}

export default App;
