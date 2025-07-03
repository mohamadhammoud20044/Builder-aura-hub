import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Users,
  Globe,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
              📞 Let's Connect
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Contact COFTECH
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get
              in touch with our expert team to discuss your project requirements
              and discover how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      info: "hello@coftech.com",
                      subtext: "We respond within 24 hours",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      info: "+1 (555) 123-4567",
                      subtext: "Mon-Fri, 9am-6pm EST",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      info: "123 Tech Street, Innovation District",
                      subtext: "San Francisco, CA 94102",
                    },
                    {
                      icon: MessageSquare,
                      title: "Live Chat",
                      info: "Available on our website",
                      subtext: "Real-time support during business hours",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-900 dark:text-gray-100 mb-1">
                          {item.info}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.subtext}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Why Choose COFTECH?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Clock,
                        title: "Fast Response",
                        description: "Quick turnaround on all inquiries",
                      },
                      {
                        icon: Users,
                        title: "Expert Team",
                        description: "Skilled professionals across all domains",
                      },
                      {
                        icon: Globe,
                        title: "Global Reach",
                        description: "Serving clients worldwide",
                      },
                      {
                        icon: MessageSquare,
                        title: "Clear Communication",
                        description: "Transparent project updates",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <item.icon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tell us about your project and we'll get back to you with a
                    detailed proposal.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Service Interest
                    </label>
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option value="">Select a service</option>
                      <option value="ai">AI Solutions</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="security">Cybersecurity</option>
                      <option value="support">IT Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-gradient-ai border-0">
                    Send Message
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    We'll respond within 24 hours with a detailed proposal.
                  </p>
                </CardContent>
              </Card>
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
                Quick answers to common questions about our services and
                process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex AI solutions may take 3-6 months.",
                },
                {
                  question: "Do you offer ongoing support?",
                  answer:
                    "Yes, we provide comprehensive maintenance and support packages for all our solutions with 24/7 monitoring options.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We work across all industries including healthcare, finance, retail, manufacturing, and startups to enterprises.",
                },
                {
                  question: "Can you work with our existing team?",
                  answer:
                    "Absolutely! We collaborate closely with your internal teams and can provide training and knowledge transfer.",
                },
                {
                  question: "What's your pricing structure?",
                  answer:
                    "We offer flexible pricing including fixed-price projects, time & materials, and retainer-based engagements.",
                },
                {
                  question: "Do you sign NDAs?",
                  answer:
                    "Yes, we're happy to sign NDAs and ensure complete confidentiality of your business information and ideas.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
