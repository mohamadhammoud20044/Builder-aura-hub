import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import AIServices from "./pages/AIServices";
import AIModels from "./pages/AIModels";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import AIContact from "./pages/AIContact";
import ConversationalAI from "./pages/ConversationalAI";
import WebsiteBuilderAI from "./pages/WebsiteBuilderAI";
import CustomAI from "./pages/CustomAI";
import AIAutomation from "./pages/AIAutomation";
import SignIn from "./pages/SignIn";
import CompanyInfo from "./pages/CompanyInfo";
import PressRelease from "./pages/PressRelease";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import DataProcessing from "./pages/DataProcessing";
import Compliance from "./pages/Compliance";
import Documentation from "./pages/Documentation";
import APIReference from "./pages/APIReference";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import HelpCenter from "./pages/HelpCenter";
import Training from "./pages/Training";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="ai-services-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ai-services" element={<AIServices />} />
        <Route path="/ai-services/models" element={<AIModels />} />
        <Route path="/ai-services/about" element={<About />} />
        <Route path="/ai-services/pricing" element={<Pricing />} />
        <Route path="/ai-services/contact" element={<AIContact />} />

        {/* Service Pages */}
        <Route
          path="/services/conversational-ai"
          element={<ConversationalAI />}
        />
        <Route
          path="/services/website-builder"
          element={<WebsiteBuilderAI />}
        />
        <Route path="/services/custom-ai" element={<CustomAI />} />
        <Route path="/services/automation" element={<AIAutomation />} />

        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />

        {/* Company Information */}
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/press-release" element={<PressRelease />} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/data-processing" element={<DataProcessing />} />
        <Route path="/compliance" element={<Compliance />} />

        {/* Resources Pages */}
        <Route path="/docs" element={<Documentation />} />
        <Route path="/api" element={<APIReference />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/training" element={<Training />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
