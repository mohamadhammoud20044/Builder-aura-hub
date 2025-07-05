import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  HelpCircle,
  BookOpen,
  Video,
} from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7 Available",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      availability: "Mon-Fri, 9am-6pm EST",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: Mail,
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive guides and tutorials",
      icon: BookOpen,
      availability: "Always Available",
      action: "View Docs",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with COFTECH AI services?",
      answer:
        "Getting started is easy! Sign up for an account, choose your desired service, and follow our quick start guide. Our team is available to help with setup and integration.",
    },
    {
      question: "What programming languages do you support?",
      answer:
        "We provide SDKs for JavaScript, Python, PHP, Ruby, Java, and Go. We also offer REST APIs that work with any programming language.",
    },
    {
      question: "Do you offer custom AI solutions?",
      answer:
        "Yes! We specialize in creating custom AI solutions tailored to your specific business needs. Contact our team to discuss your requirements.",
    },
    {
      question: "What is your uptime guarantee?",
      answer:
        "We maintain a 99.9% uptime SLA with redundant infrastructure and 24/7 monitoring to ensure reliable service availability.",
    },
    {
      question: "How do you handle data privacy and security?",
      answer:
        "We follow industry-leading security practices including encryption, access controls, and compliance with GDPR, CCPA, and other data protection regulations.",
    },
    {
      question: "Can I integrate COFTECH services with my existing systems?",
      answer:
        "Absolutely! Our APIs and SDKs are designed for easy integration with existing systems. We also provide integration support and consulting.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🛠️ Support Center
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                How Can We Help?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Get the support you need to succeed with COFTECH AI services.
                Our expert team is here to help you every step of the way.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for help articles, guides, and FAQs..."
                    className="pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-900"
                  />
                  <Button className="absolute right-2 top-2 bg-gradient-ai border-0">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Support Options */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Get <span className="gradient-text">Support</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Choose the support option that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {option.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {option.availability}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-gradient-ai hover:text-white hover:border-transparent"
                      >
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Can't find what you're looking for? Send us a message and
                      our support team will get back to you within 24 hours.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-ai rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            coftech.net@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-ai rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            +961 76 847 101
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-ai rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Hours</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            24/7 Support Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Name *
                          </label>
                          <Input placeholder="Your name" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Email *
                          </label>
                          <Input type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Subject *
                        </label>
                        <Input placeholder="How can we help?" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Priority
                        </label>
                        <select className="w-full p-2 border rounded-md bg-background">
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Critical</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Describe your issue or question in detail..."
                          rows={5}
                        />
                      </div>
                      <Button className="w-full bg-gradient-ai border-0">
                        Send Message
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Frequently Asked{" "}
                  <span className="gradient-text">Questions</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Quick answers to common questions about our services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <HelpCircle className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-lg">
                            {faq.question}
                          </CardTitle>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline">View All FAQs</Button>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Support;
