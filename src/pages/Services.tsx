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
  Code,
  Smartphone,
  Globe,
  Shield,
  Headphones,
  ArrowRight,
  Check,
  Database,
  Cloud,
  Settings,
  Zap,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence services including conversational AI, automation, and custom AI development.",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Process Automation",
        "Custom AI Models",
        "Machine Learning Solutions",
        "Natural Language Processing",
        "Predictive Analytics",
      ],
      link: "/ai-services",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Progressive Web Apps",
        "Content Management Systems",
        "SEO Optimization",
        "Performance Optimization",
      ],
      link: "/web-development",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization",
        "Mobile UI/UX Design",
      ],
      link: "/mobile-development",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "Cloud Migration",
        "AWS/Azure/GCP Services",
        "DevOps & CI/CD",
        "Serverless Architecture",
        "Container Orchestration",
        "Infrastructure as Code",
      ],
      link: "/cloud-solutions",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from cyber threats.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Threat Monitoring",
        "Data Protection",
        "Security Training",
      ],
      link: "/cybersecurity",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Headphones,
      title: "IT Support & Consulting",
      description:
        "Reliable IT support and strategic consulting to optimize your technology infrastructure.",
      features: [
        "24/7 Technical Support",
        "System Maintenance",
        "Remote Assistance",
        "IT Strategy Consulting",
        "Hardware Procurement",
        "Training & Documentation",
      ],
      link: "/it-support",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs and technical requirements",
      icon: Users,
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive solution strategy and roadmap",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Development",
      description: "Build and implement solutions using best practices",
      icon: Code,
    },
    {
      step: "04",
      title: "Deployment",
      description: "Launch your solution with ongoing support and optimization",
      icon: Zap,
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
              🚀 Complete Technology Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              COFTECH Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              From AI and machine learning to web development and cybersecurity,
              we provide comprehensive technology solutions that drive
              innovation and accelerate your business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your
                business and keep you ahead of the competition.
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
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group-hover:bg-gradient-ai transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
                from concept to deployment and beyond.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                    {index < process.length - 1 && (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ai text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how COFTECH can help transform your business with
              our comprehensive technology solutions. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
