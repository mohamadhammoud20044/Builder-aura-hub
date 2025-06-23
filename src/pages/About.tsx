import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize AI and make it accessible to
              businesses of all sizes. Learn more about our story, values, and
              the team behind the technology.
            </p>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Our Team",
                  description: "50+ AI experts and engineers",
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  description: "Making AI accessible to all businesses",
                },
                {
                  icon: Award,
                  title: "Experience",
                  description: "5+ years in AI development",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Cutting-edge AI solutions",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 border rounded-lg">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-6">
                Complete content coming soon...
              </h2>
              <p className="text-gray-600 mb-8">
                We're working on detailed company information, team profiles,
                and our story.
              </p>
              <Button size="lg" className="bg-gradient-ai border-0">
                Contact Us to Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
