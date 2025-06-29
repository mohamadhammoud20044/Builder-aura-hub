import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Zap,
  Cpu,
  FileText,
  Mail,
  Calendar,
  BarChart3,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Target,
  Workflow,
  Database,
  MessageSquare,
} from "lucide-react";

const AIAutomation = () => {
  const automationTypes = [
    {
      icon: FileText,
      title: "Document Processing",
      description:
        "Intelligent document analysis, data extraction, and processing workflows that handle any document type.",
      features: [
        "OCR & Text Extraction",
        "Data Validation",
        "Automated Routing",
        "Digital Signatures",
      ],
      timesSaved: "90% faster processing",
    },
    {
      icon: Mail,
      title: "Email Automation",
      description:
        "Smart email management with AI-powered sorting, responses, and workflow triggers.",
      features: [
        "Smart Categorization",
        "Auto-responses",
        "Priority Detection",
        "Follow-up Scheduling",
      ],
      timesSaved: "75% less manual work",
    },
    {
      icon: Calendar,
      title: "Scheduling & Planning",
      description:
        "Intelligent scheduling systems that optimize resources and automate appointment management.",
      features: [
        "Smart Scheduling",
        "Resource Optimization",
        "Conflict Resolution",
        "Automated Reminders",
      ],
      timesSaved: "80% scheduling efficiency",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Automated data analysis and reporting with real-time insights and predictive analytics.",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Automated Reports",
        "Anomaly Detection",
      ],
      timesSaved: "95% faster insights",
    },
    {
      icon: Users,
      title: "Customer Service",
      description:
        "AI-powered customer service automation with intelligent ticket routing and response systems.",
      features: [
        "Ticket Classification",
        "Auto-routing",
        "Response Suggestions",
        "Escalation Management",
      ],
      timesSaved: "70% faster resolution",
    },
    {
      icon: Workflow,
      title: "Workflow Orchestration",
      description:
        "End-to-end workflow automation that connects multiple systems and processes seamlessly.",
      features: [
        "Process Mapping",
        "System Integration",
        "Error Handling",
        "Performance Monitoring",
      ],
      timesSaved: "85% process efficiency",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      automations: [
        "Patient intake automation",
        "Medical record processing",
        "Appointment scheduling",
        "Insurance claim processing",
      ],
      savings: "Save 40+ hours per week",
    },
    {
      name: "Legal",
      automations: [
        "Contract analysis",
        "Document review",
        "Case management",
        "Billing automation",
      ],
      savings: "Reduce review time by 60%",
    },
    {
      name: "Finance",
      automations: [
        "Invoice processing",
        "Expense management",
        "Compliance reporting",
        "Risk assessment",
      ],
      savings: "95% faster processing",
    },
    {
      name: "HR",
      automations: [
        "Resume screening",
        "Employee onboarding",
        "Performance tracking",
        "Payroll processing",
      ],
      savings: "80% less manual work",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Automate repetitive tasks and free up your team for strategic work",
      metric: "80% time savings on average",
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description:
        "Streamline processes and eliminate bottlenecks with intelligent automation",
      metric: "3x productivity increase",
    },
    {
      icon: Target,
      title: "Reduce Errors",
      description:
        "Minimize human error with consistent, accurate automated processes",
      metric: "99.9% accuracy rate",
    },
    {
      icon: Zap,
      title: "Scale Operations",
      description:
        "Handle increasing workloads without proportional staff increases",
      metric: "10x scalability without hiring",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Process Assessment",
      description:
        "Analyze your current workflows to identify automation opportunities",
      deliverables: [
        "Process mapping",
        "Efficiency analysis",
        "ROI calculation",
      ],
    },
    {
      step: "02",
      title: "Automation Design",
      description:
        "Design intelligent automation workflows tailored to your needs",
      deliverables: [
        "Workflow design",
        "Integration plan",
        "User interface mockups",
      ],
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build and rigorously test your automation systems",
      deliverables: [
        "Automation development",
        "Quality testing",
        "User training",
      ],
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description:
        "Deploy your automation and continuously optimize performance",
      deliverables: [
        "Live deployment",
        "Performance monitoring",
        "Ongoing optimization",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter Automation",
      price: "$299",
      period: "per month",
      originalPrice: "$599",
      description: "Perfect for small businesses automating basic processes",
      features: [
        "Up to 5 automated workflows",
        "Basic AI processing",
        "Email & document automation",
        "Standard integrations",
        "Email support",
        "Monthly reports",
      ],
      popular: false,
    },
    {
      name: "Professional Automation",
      price: "$799",
      period: "per month",
      originalPrice: "$1,599",
      description: "Advanced automation for growing businesses",
      features: [
        "Up to 25 automated workflows",
        "Advanced AI & ML",
        "Custom integrations",
        "Real-time analytics",
        "Priority support",
        "Custom training",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise Automation",
      price: "$1,999",
      period: "per month",
      originalPrice: "$3,999",
      description: "Enterprise-grade automation for large organizations",
      features: [
        "Unlimited workflows",
        "Advanced AI models",
        "White-label solution",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom development",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Lisa Thompson",
      company: "MedCare Solutions",
      role: "Operations Director",
      content:
        "AI automation transformed our patient intake process. What used to take 30 minutes now takes 3 minutes, and accuracy improved dramatically.",
      rating: 5,
      results: "90% time reduction, 99% accuracy",
    },
    {
      name: "Mark Rodriguez",
      company: "Legal Partners LLC",
      role: "Managing Partner",
      content:
        "Document review automation saved us 200+ hours per month. Our lawyers can now focus on high-value legal work instead of paperwork.",
      rating: 5,
      results: "200+ hours saved monthly",
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
              ⚡ Intelligent Process Automation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              AI Automation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business operations with intelligent automation.
              Streamline workflows, eliminate manual tasks, and boost
              productivity with AI-powered process automation that adapts and
              learns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-ai border-0 text-white px-8 py-6 text-lg"
              >
                Automate Your Processes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Free Process Assessment
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                { number: "5000+", label: "Processes Automated" },
                { number: "80%", label: "Average Time Savings" },
                { number: "99.9%", label: "Accuracy Rate" },
                { number: "6 months", label: "Average ROI Time" },
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

        {/* Automation Types */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Automation</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive automation capabilities across all business
                functions and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationTypes.map((automation, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center">
                        <automation.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs"
                      >
                        {automation.timesSaved}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">
                      {automation.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {automation.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {automation.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">AI Automation</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Measurable benefits that transform your business operations and
                drive growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {benefit.description}
                    </p>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {benefit.metric}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Industry</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Specialized automation solutions tailored for specific industry
                needs and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-primary">
                        {industry.name}
                      </CardTitle>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {industry.savings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">
                        Common Automations:
                      </h4>
                      <ul className="space-y-1">
                        {industry.automations.map((automation, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                            {automation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing AI automation that
                delivers results
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {process.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {step.title}
                          </CardTitle>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pl-20">
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Automation <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Flexible pricing plans that scale with your automation needs
              </p>
              <div className="inline-flex items-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-6 py-3 rounded-full text-lg font-bold animate-pulse">
                🔥 50% OFF First 6 Months - Limited Time!
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Success</span> Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real businesses achieving remarkable results with AI automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                    <blockquote className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3 mb-4">
                      <div className="text-sm font-semibold text-green-800 dark:text-green-200">
                        Results: {testimonial.results}
                      </div>
                    </div>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Stop wasting time on manual processes. Let AI automation handle
              the repetitive work while your team focuses on what matters most.
              Start your automation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                Get Free Process Analysis
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

export default AIAutomation;
