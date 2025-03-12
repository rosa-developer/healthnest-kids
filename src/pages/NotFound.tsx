
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/common/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="main-container">
      <PageTransition>
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <div className="rounded-full bg-red-100 p-6 mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-red-500"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The page at <span className="font-mono bg-gray-100 px-2 py-1 rounded">{location.pathname}</span> could not be found.
          </p>
          <Link 
            to="/" 
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </PageTransition>
    </div>
  );
};

export default NotFound;
