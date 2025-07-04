import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Bot, Sparkles, Globe, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Conversational AI",
      description:
        "Advanced chatbots and virtual assistants for customer service",
      icon: Bot,
      href: "/services/conversational-ai",
    },
    {
      title: "Website Builder AI",
      description: "Automatically generate beautiful, responsive websites",
      icon: Globe,
      href: "/services/website-builder",
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI services for your specific business needs",
      icon: Sparkles,
      href: "/services/custom-ai",
    },
    {
      title: "AI Automation",
      description: "Streamline workflows with intelligent automation",
      icon: Zap,
      href: "/services/automation",
    },
  ];

  const aiPages = [
    {
      title: "AI Services",
      href: "/ai-services",
    },
    {
      title: "AI Models",
      href: "/ai-services/models",
    },
    {
      title: "AI Pricing",
      href: "/ai-services/pricing",
    },
    {
      title: "About AI",
      href: "/ai-services/about",
    },
    {
      title: "AI Contact",
      href: "/ai-services/contact",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F29c0a7297fc14c1d91748176ea31f04a%2F8b1472ec59ff4eca88d17af94001371f?format=webp&width=800"
            alt="COFTECH"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold gradient-text">COFTECH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  AI
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="w-4 h-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-xs font-medium text-muted-foreground mb-2 px-3">
                        AI PAGES
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {aiPages.map((page) => (
                          <NavigationMenuLink key={page.title} asChild>
                            <Link
                              to={page.href}
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {page.title}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/team"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Team
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/signin">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/services">
            <Button size="sm" className="bg-gradient-ai border-0">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 flex flex-col">
            <div className="flex-shrink-0 mt-6 mb-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">
                    COFTECH
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4 pr-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    AI Services
                  </h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    AI Pages
                  </h3>
                  {aiPages.map((page) => (
                    <Link
                      key={page.title}
                      to={page.href}
                      className="block p-2 text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Main Pages
                  </h3>
                  <Link
                    to="/services"
                    className="block p-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="block p-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/team"
                    className="block p-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Link to="/signin">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button className="w-full bg-gradient-ai border-0">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
