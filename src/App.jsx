import React, { useState } from "react";
import { COLORS } from "./constants/colors";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import all page components
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CampaignsPage from "./pages/CampaignsPage";
import ImpactPage from "./pages/ImpactPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ContactPage from "./pages/ContactPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import DonorPortalPage from "./pages/DonorPortalPage";
import BeneficiaryApplicationPage from "./pages/BeneficiaryApplicationPage";
import VolunteerSignupPage from "./pages/VolunteerSignupPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CampaignDetailPage from "./pages/CampaignDetailPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import DonatePage from "./pages/DonatePage";

// Main App component with routing logic
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [campaignDetailName, setCampaignDetailName] = useState("");

  const handleNavigate = (page, params = {}) => {
    setCurrentPage(page);
    if (page === "campaign-detail" && params.campaignName) {
      setCampaignDetailName(params.campaignName);
    }
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div
      className="min-h-screen font-sans antialiased text-gray-800"
      style={{
        backgroundColor: COLORS.backgroundOffWhite,
        color: COLORS.darkBlueTextOutline,
      }}
    >
      {/* Pass currentPage to Header for highlighting */}
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {/* Render the current page based on state */}
        {(() => {
          switch (currentPage) {
            case "home":
              return <HomePage onNavigate={handleNavigate} />;
            case "about":
              return <AboutUsPage onNavigate={handleNavigate} />;
            case "campaigns":
              return <CampaignsPage onNavigate={handleNavigate} />;
            case "impact":
              return <ImpactPage onNavigate={handleNavigate} />;
            case "get-involved":
              return <GetInvolvedPage onNavigate={handleNavigate} />;
            case "contact":
              return <ContactPage />;
            case "login-register":
              return <LoginRegisterPage />;
            case "donor-portal":
              return <DonorPortalPage />;
            case "beneficiary-application":
              return <BeneficiaryApplicationPage />;
            case "volunteer-signup":
              return <VolunteerSignupPage />;
            case "admin-login":
              return <AdminLoginPage />;
            case "privacy-policy":
              return <PrivacyPolicyPage />;
            case "terms-of-service":
              return <TermsOfServicePage />;
            case "campaign-detail":
              return <CampaignDetailPage campaignName={campaignDetailName} />;
            case "testimonials":
              return <TestimonialsPage />;
            case "donate":
              return <DonatePage />;
            default:
              return <HomePage onNavigate={handleNavigate} />;
          }
        })()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
