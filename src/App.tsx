
import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Index from './pages/Index';
import Health from './pages/Health';
import Memories from './pages/Memories';
import Advice from './pages/Advice';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { Loader2 } from 'lucide-react';

// Error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-6 max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="mb-4 text-muted-foreground">{this.state.error?.message || "An unknown error occurred"}</p>
            <button 
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={() => window.location.reload()}
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
      <p className="text-muted-foreground">Loading application...</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Simulate app loading check
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pb-24">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/health" element={<Health />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </div>
        <Navigation />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
