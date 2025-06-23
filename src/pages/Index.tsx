import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bot,
  Globe,
  Sparkles,
  Zap,
  ArrowRight,
  Check,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  MessageSquare,
  Palette,
  Cpu,
  BarChart3,
  Workflow,
  ChevronRight,
  Play,
} from "lucide-react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Bot,
      title: "Conversational AI",
      description:
        "Advanced chatbots and virtual assistants that understand context and provide human-like interactions for customer service, sales, and support.",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "24/7 Availability",
        "CRM Integration",
      ],
      price: "Starting at $299/month",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Website Builder AI",
      description:
        "Automatically generate beautiful, responsive websites using AI. Just describe your business and watch as we create a professional site in minutes.",
      features: [
        "AI-Powered Design",
        "Responsive Layout",
        "SEO Optimized",
        "Custom Branding",
      ],
      price: "Starting at $199/month",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description:
        "Tailored AI services built specifically for your business needs. From data analysis to process automation, we create solutions that fit your workflow.",
      features: [
        "Custom Development",
        "API Integration",
        "Scalable Architecture",
        "Ongoing Support",
      ],
      price: "Custom Pricing",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description:
        "Streamline your business processes with intelligent automation. Reduce manual work and increase efficiency across all departments.",
      features: [
        "Process Optimization",
        "Workflow Automation",
        "Data Processing",
        "Real-time Analytics",
      ],
      price: "Starting at $399/month",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description:
        "Our AI solutions help businesses increase revenue by 40% on average through improved efficiency and customer satisfaction.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Automate repetitive tasks and reduce manual work by up to 80%, allowing your team to focus on strategic initiatives.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, GDPR compliance, and SOC 2 Type II certification.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 support from our team of AI specialists and dedicated account managers for enterprise clients.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "AI Services transformed our customer support. Our response time improved by 70% and customer satisfaction is at an all-time high.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      content:
        "The website builder AI created a stunning site for our client in just 30 minutes. It would have taken our team weeks to build manually.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Manufacturing Solutions",
      role: "Operations Manager",
      content:
        "Custom AI automation reduced our processing time by 85%. The ROI was visible within the first month of implementation.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Businesses Served" },
    { number: "2M+", label: "Interactions Processed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "40%", label: "Average Revenue Increase" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyOSwgMTQwLCAxNDgsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2 animate-fadeInUp">
              🚀 Leading AI Innovation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fadeInUp">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
              Unlock the power of artificial intelligence with our comprehensive
              suite of services. From conversational AI to custom automation, we
              help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-ai border-0 text-white px-8 py-6 text-lg"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI solutions designed to
              meet every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${service.gradient}`}
                ></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-gradient-ai transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">AI Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that transform your business
              operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with AI in three simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "We analyze your business needs and identify the best AI solutions for your goals.",
                  icon: MessageSquare,
                },
                {
                  step: "02",
                  title: "Implementation",
                  description:
                    "Our experts deploy and integrate AI solutions seamlessly into your existing workflow.",
                  icon: Cpu,
                },
                {
                  step: "03",
                  title: "Optimization",
                  description:
                    "Continuous monitoring and improvement to ensure maximum performance and ROI.",
                  icon: BarChart3,
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have
              transformed with AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>
                <blockquote className="text-xl mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonials[currentTestimonial].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role} at{" "}
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
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
            Join hundreds of businesses that have already revolutionized their
            operations with our AI solutions. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
