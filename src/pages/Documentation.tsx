import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Code, Zap, Settings, ArrowRight } from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      icon: Zap,
      items: [
        "Platform Overview",
        "Account Setup",
        "First AI Integration",
        "Best Practices",
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation and endpoints",
      icon: Code,
      items: [
        "Authentication",
        "REST API Endpoints",
        "Webhooks",
        "Rate Limiting",
      ],
    },
    {
      title: "User Guides",
      description: "Detailed guides for using our services",
      icon: Book,
      items: [
        "Conversational AI Setup",
        "Website Builder Guide",
        "Custom AI Solutions",
        "Automation Workflows",
      ],
    },
    {
      title: "Configuration",
      description: "Advanced configuration and customization",
      icon: Settings,
      items: [
        "Environment Setup",
        "Security Configuration",
        "Integration Settings",
        "Monitoring Setup",
      ],
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
                📚 Documentation
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Developer Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to integrate and build with COFTECH's AI
                services. From quick start guides to detailed API references.
              </p>
            </div>
          </section>

          {/* Documentation Sections */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {docSections.map((section, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {section.title}
                          </CardTitle>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full">
                        View Documentation
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Get up and running with COFTECH AI services in minutes
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-ai text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="font-semibold mb-2">Create Account</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sign up for a COFTECH account and get your API keys
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-ai text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="font-semibold mb-2">Choose Service</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Select the AI service that fits your needs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-ai text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">Integrate</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Use our SDKs and APIs to integrate AI into your app
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button className="bg-gradient-ai border-0">
                    Start Building Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Code Example */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Code Example</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Get started with our simple API in just a few lines of code
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="text-gray-500">
                  // Initialize COFTECH AI Client
                </div>
                <div className="text-blue-400">
                  const coftech = new CoftechAI({"{"}
                </div>
                <div className="ml-4 text-white">apiKey: 'your-api-key',</div>
                <div className="ml-4 text-white">environment: 'production'</div>
                <div className="text-blue-400">{"});"}</div>
                <br />
                <div className="text-gray-500">
                  // Create a conversational AI instance
                </div>
                <div className="text-blue-400">
                  const response = await coftech.chat.create({"{"}
                </div>
                <div className="ml-4 text-white">
                  messages: [{"{"}role: 'user', content: 'Hello AI!'{"}"}],
                </div>
                <div className="ml-4 text-white">model: 'gpt-4',</div>
                <div className="ml-4 text-white">temperature: 0.7</div>
                <div className="text-blue-400">{"});"}</div>
                <br />
                <div className="text-yellow-400">
                  console.log(response.message);
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Documentation;
