import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Brain,
  Code,
  Database,
  Cpu,
  Network,
  Shield,
  ArrowRight,
  Users,
  Target,
  Zap,
} from "lucide-react";

const CustomAI = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description:
        "Custom ML models trained on your specific data for predictive analytics, classification, and recommendation systems.",
      applications: [
        "Demand Forecasting",
        "Customer Segmentation",
        "Fraud Detection",
        "Recommendation Engines",
      ],
    },
    {
      icon: Database,
      title: "Data Analytics AI",
      description:
        "Intelligent data processing and analysis systems that extract actionable insights from complex datasets.",
      applications: [
        "Business Intelligence",
        "Real-time Analytics",
        "Data Mining",
        "Pattern Recognition",
      ],
    },
    {
      icon: Network,
      title: "Process Automation",
      description:
        "End-to-end automation solutions that streamline workflows and eliminate manual processes.",
      applications: [
        "Document Processing",
        "Workflow Automation",
        "Quality Control",
        "Supply Chain Optimization",
      ],
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description:
        "Advanced image and video analysis systems for object detection, quality inspection, and visual recognition.",
      applications: [
        "Quality Inspection",
        "Medical Imaging",
        "Security Systems",
        "Inventory Management",
      ],
    },
    {
      icon: Code,
      title: "Natural Language Processing",
      description:
        "Sophisticated text analysis and generation systems for content processing and communication.",
      applications: [
        "Document Analysis",
        "Sentiment Analysis",
        "Content Generation",
        "Language Translation",
      ],
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description:
        "Intelligent security systems that adapt and learn to protect against evolving threats.",
      applications: [
        "Threat Detection",
        "Behavioral Analysis",
        "Risk Assessment",
        "Compliance Monitoring",
      ],
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      description:
        "AI solutions for medical diagnosis, patient monitoring, and healthcare management",
      useCases: [
        "Medical Imaging Analysis",
        "Drug Discovery",
        "Patient Risk Assessment",
        "Healthcare Chatbots",
      ],
    },
    {
      name: "Financial Services",
      description:
        "Advanced AI for risk management, fraud detection, and algorithmic trading",
      useCases: [
        "Fraud Detection",
        "Credit Scoring",
        "Algorithmic Trading",
        "Risk Management",
      ],
    },
    {
      name: "Manufacturing",
      description:
        "Smart manufacturing solutions with predictive maintenance and quality control",
      useCases: [
        "Predictive Maintenance",
        "Quality Control",
        "Supply Chain Optimization",
        "Production Planning",
      ],
    },
    {
      name: "Retail & E-commerce",
      description:
        "Personalization engines, inventory optimization, and customer analytics",
      useCases: [
        "Personalized Recommendations",
        "Inventory Optimization",
        "Price Optimization",
        "Customer Analytics",
      ],
    },
    {
      name: "Transportation",
      description:
        "AI-powered logistics, route optimization, and autonomous systems",
      useCases: [
        "Route Optimization",
        "Fleet Management",
        "Autonomous Vehicles",
        "Traffic Management",
      ],
    },
    {
      name: "Energy & Utilities",
      description:
        "Smart grid management, energy forecasting, and resource optimization",
      useCases: [
        "Energy Forecasting",
        "Grid Optimization",
        "Demand Response",
        "Asset Management",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "Deep dive into your business challenges, data, and requirements to identify AI opportunities.",
      icon: Target,
      deliverables: [
        "Business Analysis",
        "Data Assessment",
        "Technical Feasibility",
        "ROI Projection",
      ],
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Design custom AI architecture and algorithms tailored to your specific needs and constraints.",
      icon: Brain,
      deliverables: [
        "Architecture Design",
        "Algorithm Selection",
        "Data Pipeline",
        "Integration Plan",
      ],
    },
    {
      step: "03",
      title: "Development & Training",
      description:
        "Build and train your custom AI models using best practices and cutting-edge technologies.",
      icon: Code,
      deliverables: [
        "Model Development",
        "Training & Validation",
        "Performance Optimization",
        "Testing",
      ],
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Deploy your AI solution and provide ongoing monitoring, maintenance, and optimization.",
      icon: Zap,
      deliverables: [
        "Production Deployment",
        "Monitoring Setup",
        "Training & Documentation",
        "Ongoing Support",
      ],
    },
  ];

  const technologies = [
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "AWS/Azure/GCP", category: "Cloud Platforms" },
    { name: "Docker/Kubernetes", category: "Containerization" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "MLflow", category: "ML Operations" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "NLTK/spaCy", category: "NLP" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Apache Kafka", category: "Data Streaming" },
  ];

  const testimonials = [
    {
      name: "Jennifer Wilson",
      company: "MedTech Innovations",
      role: "Chief Data Officer",
      content:
        "COFTECH's custom AI solution revolutionized our medical imaging analysis. We now detect anomalies 95% faster with 99.7% accuracy.",
      rating: 5,
      results: "95% faster analysis, 99.7% accuracy",
    },
    {
      name: "Robert Chang",
      company: "Global Manufacturing Corp",
      role: "Head of Operations",
      content:
        "The predictive maintenance AI reduced our downtime by 80% and saved over $2M in the first year. Exceptional work!",
      rating: 5,
      results: "80% downtime reduction, $2M+ savings",
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
              🧠 Tailored AI Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Custom AI Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with bespoke AI solutions designed
              specifically for your unique challenges. From machine learning
              models to intelligent automation, we build AI that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-ai border-0 text-white px-8 py-6 text-lg"
              >
                Start Your AI Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { number: "200+", label: "Custom AI Projects" },
                { number: "50+", label: "Industries Served" },
                { number: "95%", label: "Client Satisfaction" },
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

        {/* AI Solutions */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI <span className="gradient-text">Solutions</span> We Build
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI capabilities spanning machine learning,
                automation, and intelligent systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {solution.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.applications.map((app, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Industries</span> We Serve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deep expertise across diverse industries with proven AI
                implementations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {industry.name}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {industry.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Use Cases:</h4>
                      <ul className="space-y-1">
                        {industry.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {useCase}
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
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation
                from concept to deployment
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {process.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <step.icon className="w-6 h-6 text-primary mr-2" />
                            <CardTitle className="text-xl">
                              {step.title}
                            </CardTitle>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pl-20">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Deliverables:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm"
                            >
                              <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Technologies</span> We Use
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cutting-edge tools and frameworks for building robust, scalable
                AI solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <Card
                    key={index}
                    className="text-center p-4 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-semibold text-sm mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </Card>
                ))}
              </div>
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
                Real results from real businesses who transformed with custom AI
                solutions
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
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your unique challenges and design an AI solution
              that delivers measurable results. Our experts are ready to
              transform your business with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                Get Free AI Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CustomAI;
