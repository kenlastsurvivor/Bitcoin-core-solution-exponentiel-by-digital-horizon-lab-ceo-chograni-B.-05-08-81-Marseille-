import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Downloads from "./pages/Downloads";
import Verification from "./pages/Verification";
import Chat from "./pages/Chat";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import Documentation from "./pages/Documentation";
import Ownership from "./pages/Ownership";
import Promo from "./pages/Promo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/ownership" element={<Ownership />} />
            <Route path="/promo" element={<Promo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
