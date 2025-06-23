import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowLeft, Bot } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or is still under
              development. Our AI services are continuously evolving!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-ai border-0">
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>
              Looking for specific AI services?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Let us know what you need
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
