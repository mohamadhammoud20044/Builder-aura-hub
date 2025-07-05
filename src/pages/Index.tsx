import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bot,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Headphones,
  ArrowRight,
  Check,
  Star,
  Users,
  TrendingUp,
  Clock,
  Award,
  Zap,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence services including conversational AI, automation, and custom AI development for your business needs.",
      features: [
        "AI Chatbots",
        "Process Automation",
        "Custom AI Models",
        "24/7 Support",
      ],
      link: "/ai-services",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies to drive your business forward.",
      features: [
        "Responsive Design",
        "E-commerce Sites",
        "Web Apps",
        "SEO Optimized",
      ],
      link: "/web-development",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "iOS Apps",
        "Android Apps",
        "Cross-Platform",
        "App Store Publishing",
      ],
      link: "/mobile-development",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration services, and cloud-native application development for modern businesses.",
      features: [
        "Cloud Migration",
        "DevOps",
        "Serverless",
        "Infrastructure Management",
      ],
      link: "/cloud-solutions",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from cyber threats and ensure data compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "24/7 Monitoring",
      ],
      link: "/cybersecurity",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Headphones,
      title: "IT Support",
      description:
        "Reliable IT support and maintenance services to keep your technology running smoothly around the clock.",
      features: [
        "24/7 Support",
        "System Maintenance",
        "Remote Assistance",
        "Hardware Setup",
      ],
      link: "/it-support",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Projects Delivered", icon: Award },
    { number: "250+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Clock },
  ];

  const testimonials = [
    {
      name: "David Wilson",
      company: "TechCorp International",
      role: "CTO",
      content:
        "COFTECH transformed our entire digital infrastructure. Their expertise in both AI and traditional tech solutions is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "StartupPro",
      role: "Founder",
      content:
        "From web development to AI integration, COFTECH delivered everything we needed to scale our business rapidly.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      company: "Enterprise Solutions Ltd",
      role: "CEO",
      content:
        "Outstanding service across all technology domains. COFTECH is our go-to partner for all digital transformation needs.",
      rating: 5,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        {/* Neon tech background */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F29c0a7297fc14c1d91748176ea31f04a%2Fbc390c59b38546ad83e0802d375fb982?format=webp&width=800')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
        {/* Very light overlay for text readability */}
        <div className="fixed inset-0 z-10 bg-black/5 dark:bg-black/10" />

        {/* Main content */}
        <div className="relative z-20 min-h-screen">
          <Header />

          {/* Hero Section */}
          <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-white/30 dark:bg-gray-950/30 backdrop-blur-sm"></div>

            <div className="relative container mx-auto px-4 py-20 text-center">
              <div className="max-w-5xl mx-auto">
                <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                  🚀 Complete Technology Solutions
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                  COFTECH SERVICES
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Your trusted partner for comprehensive technology solutions.
                  From AI and web development to cybersecurity and cloud
                  services, we deliver innovation that drives your business
                  forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link to="/services">
                    <Button
                      size="lg"
                      className="bg-gradient-ai border-0 text-white px-8 py-6 text-lg"
                    >
                      Explore Our Services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg"
                    >
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
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
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="gradient-text">Services</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your
                  business growth and digital transformation journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full"
                  >
                    <div
                      className={`h-2 bg-gradient-to-r ${service.gradient}`}
                    ></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-4`}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button className="w-full group-hover:bg-gradient-ai transition-all duration-300">
                          Contact Us Now!
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50/40 dark:bg-gray-900/40 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="gradient-text">COFTECH</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We combine technical expertise with business acumen to deliver
                  solutions that drive real results for your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: Zap,
                    title: "Fast Delivery",
                    description:
                      "Rapid development and deployment without compromising quality.",
                  },
                  {
                    icon: Shield,
                    title: "Secure Solutions",
                    description:
                      "Enterprise-grade security in every solution we deliver.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description:
                      "Experienced professionals across all technology domains.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Proven Results",
                    description:
                      "Track record of successful projects and satisfied clients.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  What Our <span className="gradient-text">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from businesses that
                  have transformed with COFTECH's comprehensive technology
                  solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let's discuss how COFTECH can help accelerate your digital
                transformation with our comprehensive technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 py-6 text-lg"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
