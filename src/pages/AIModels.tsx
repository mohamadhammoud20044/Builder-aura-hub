import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import AIModelsRepeater from "@/components/AIModelsRepeater";
import { Bot, Cpu, Zap } from "lucide-react";

const AIModels = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
              🤖 AI Model Library
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              AI Models
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Discover and test our comprehensive collection of AI models. From
              language processing to image generation, find the perfect AI
              solution for your specific needs.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  icon: Bot,
                  title: "Diverse Models",
                  description:
                    "Access to cutting-edge AI models across multiple domains",
                },
                {
                  icon: Zap,
                  title: "Instant Testing",
                  description:
                    "Try any model instantly with our interactive demo platform",
                },
                {
                  icon: Cpu,
                  title: "Production Ready",
                  description:
                    "All models are optimized and ready for production deployment",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Models Repeater */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <AIModelsRepeater />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ai text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom AI Model?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Can't find the perfect model for your needs? Our AI team can
              develop custom models tailored specifically for your business
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 py-6 text-lg">
                Request Custom Model
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                Contact AI Team
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIModels;
