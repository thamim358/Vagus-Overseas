import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader.jsx';
import NavBar from './component/Navbar/Navbar.jsx';
import Footer from "./component/Footer/Footer.jsx"
import Layout from './component/Layoyt/Layout.jsx';
import UniversityPage from './component/Universities/Universities.jsx';
import ContactUs from './component/Contact us/Contact.jsx';
import FAQSection from './component/Faq/Faq.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Exam from './component/Exams/Exams.jsx';
import Loan from './component/Loan/Loan.jsx';
import AboutUs from './component/About Us/About Us.jsx';
import Terms from './component/TermAndConditions/Terms.jsx';
import PrivacyPolicy from './component/TermAndConditions/Privacypolicy.jsx';
import CookiesPolicy from './component/TermAndConditions/Cookies.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader/> // Show the loader while content is loading
      ) : (
        <Router>
        <ScrollToTop/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Layout  />} />
            <Route path="/universities/:country" element={<UniversityPage />} />
            <Route path="/connect" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer/>
        </Router>
       )} 
    </>
  );
}

export default App;
