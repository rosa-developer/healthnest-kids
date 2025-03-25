// src/App.tsx
import './main.css'; // Updated styles
function App() {
  return <div className="new-design">Redesigned Content</div>;
}
export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Index from "./pages/Index";
import Health from "./pages/Health";
import Memories from "./pages/Memories";
import Advice from "./pages/Advice";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import PregnancyTracker from "./pages/PregnancyTracker";
import MilestoneTracker from "./pages/MilestoneTracker";
import HealthRecords from "./pages/HealthRecords";
import UserProfiles from "./pages/UserProfiles";
import PhotoInsert from "./pages/PhotoInsert";
import { ChildProfileProvider } from "./contexts/ChildProfileContext";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ChildProfileProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/health" element={<Health />} />
                <Route path="/memories" element={<Memories />} />
                <Route path="/advice" element={<Advice />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/pregnancy" element={<PregnancyTracker />} />
                <Route path="/milestones" element={<MilestoneTracker />} />
                <Route path="/health-records" element={<HealthRecords />} />
                <Route path="/profiles" element={<UserProfiles />} />
                <Route path="/photos" element={<PhotoInsert />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Navigation />
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </ChildProfileProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
