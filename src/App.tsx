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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="ai-services-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
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

            {/* Other Pages (Placeholders for now) */}
            <Route path="/docs" element={<NotFound />} />
            <Route path="/api" element={<NotFound />} />
            <Route path="/blog" element={<NotFound />} />
            <Route path="/support" element={<NotFound />} />
            <Route path="/careers" element={<NotFound />} />
            <Route path="/privacy" element={<NotFound />} />
            <Route path="/terms" element={<NotFound />} />
            <Route path="/cookies" element={<NotFound />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
