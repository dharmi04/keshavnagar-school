import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9f4]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
