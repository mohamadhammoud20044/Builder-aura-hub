import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Globe,
  Zap,
  Palette,
  Smartphone,
  Search,
  BarChart3,
  Code,
  ArrowRight,
  Play,
} from "lucide-react";

const WebsiteBuilderAI = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Generation",
      description:
        "Generate complete websites in under 5 minutes with AI-powered design and content creation.",
    },
    {
      icon: Palette,
      title: "Smart Design System",
      description:
        "AI analyzes your brand and industry to create custom color schemes, typography, and layouts.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive",
      description:
        "Every generated website is optimized for all devices with perfect mobile responsiveness.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description:
        "Built-in SEO best practices with meta tags, structured data, and performance optimization.",
    },
    {
      icon: Code,
      title: "Clean Code Export",
      description:
        "Export production-ready HTML, CSS, and JavaScript code that's maintainable and scalable.",
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description:
        "Automatic integration with Google Analytics, Facebook Pixel, and other tracking tools.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Describe Your Vision",
      description:
        "Tell our AI about your business, goals, and design preferences in natural language.",
      icon: Globe,
    },
    {
      step: "02",
      title: "AI Generates Design",
      description:
        "Our AI creates multiple design variations with content, images, and branding.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Customize & Refine",
      description:
        "Use our intuitive editor to fine-tune colors, layouts, and content to perfection.",
      icon: Code,
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description:
        "Deploy your website instantly with built-in hosting and ongoing AI optimization.",
      icon: Zap,
    },
  ];

  const useCases = [
    {
      title: "Small Businesses",
      description:
        "Professional websites for local businesses, restaurants, and service providers",
      industries: [
        "Restaurants",
        "Retail",
        "Professional Services",
        "Healthcare",
      ],
    },
    {
      title: "E-commerce Stores",
      description:
        "Complete online stores with shopping cart, payment processing, and inventory management",
      industries: ["Fashion", "Electronics", "Home & Garden", "Beauty"],
    },
    {
      title: "Portfolio Websites",
      description:
        "Stunning portfolios for creatives, freelancers, and professionals",
      industries: ["Photographers", "Designers", "Artists", "Consultants"],
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages for marketing campaigns and product launches",
      industries: ["SaaS", "Apps", "Events", "Lead Generation"],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "one-time",
      originalPrice: "$199",
      description: "Perfect for simple websites and landing pages",
      features: [
        "Up to 5 pages",
        "AI design generation",
        "Mobile responsive",
        "Basic SEO optimization",
        "1 year hosting included",
        "SSL certificate",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$199",
      period: "one-time",
      originalPrice: "$399",
      description: "Ideal for business websites with advanced features",
      features: [
        "Up to 15 pages",
        "Advanced AI customization",
        "E-commerce integration",
        "Advanced SEO & Analytics",
        "2 years hosting included",
        "Priority support",
        "Custom domain",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "one-time",
      originalPrice: "$999",
      description: "For large websites with enterprise features",
      features: [
        "Unlimited pages",
        "White-label solution",
        "Advanced integrations",
        "Multi-language support",
        "5 years hosting included",
        "Dedicated account manager",
        "Custom development",
      ],
      popular: false,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Bella's Boutique",
      role: "Owner",
      content:
        "The AI created a stunning e-commerce site for my boutique in minutes. Sales increased 300% in the first month!",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Tech Consulting Pro",
      role: "Freelancer",
      content:
        "As a consultant, I needed a professional portfolio quickly. The AI understood exactly what I needed.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
              🎨 AI-Powered Website Creation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Website Builder AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Create stunning, professional websites in minutes with our
              AI-powered builder. Just describe your vision and watch as our AI
              generates a complete website tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-ai border-0 text-white px-8 py-6 text-lg"
              >
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { number: "50K+", label: "Websites Created" },
                { number: "5 min", label: "Average Build Time" },
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "24/7", label: "AI Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful <span className="gradient-text">AI Features</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI doesn't just build websites - it creates intelligent,
                optimized experiences that grow with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From concept to launch in four simple steps
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full">
                        <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perfect for{" "}
                <span className="gradient-text">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI adapts to create websites optimized for your specific
                industry and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">
                      {useCase.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      {useCase.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                One-time payment, lifetime website. No monthly fees or hidden
                costs.
              </p>
              <div className="inline-flex items-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-6 py-3 rounded-full text-lg font-bold animate-pulse">
                🔥 50% OFF Launch Special - Limited Time!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-300 hover:shadow-2xl ${
                    plan.popular
                      ? "ring-2 ring-primary shadow-2xl scale-105"
                      : "shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-ai border-0 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <div
                    className={`h-2 bg-gradient-to-r ${plan.gradient}`}
                  ></div>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-2xl text-gray-400 dark:text-gray-500 line-through">
                          {plan.originalPrice}
                        </span>
                        <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-ai border-0" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how businesses transformed their online presence with our AI
                website builder
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ai text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of businesses who've already created stunning
              websites with our AI builder. Get started today and see your
              vision come to life in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WebsiteBuilderAI;
