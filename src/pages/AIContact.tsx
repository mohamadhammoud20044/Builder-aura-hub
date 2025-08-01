import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const AIContact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Contact Our AI Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Our AI specialists are
              here to help. Reach out to discuss your AI needs and discover how
              our solutions can revolutionize your operations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      info: "ai@coftech.com",
                      subtext: "AI team responds within 24 hours",
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
                      info: "123 AI Street, Tech City, TC 12345",
                      subtext: "San Francisco, CA",
                    },
                    {
                      icon: MessageSquare,
                      title: "Live Chat",
                      info: "Available on our website",
                      subtext: "Real-time support",
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
              </div>

              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
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
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your AI requirements, automation goals, and how our AI solutions can help transform your business..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-gradient-ai border-0">
                    Send Message
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    This is a demo form. Full functionality coming soon!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIContact;
