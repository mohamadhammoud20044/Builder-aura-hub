import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building, Users, Globe } from "lucide-react";

const PressRelease = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Press Release Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                📰 Press Release
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                COFTECH Announces
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Official announcements and company news from COFTECH - AI &
                Technology Solutions
              </p>
            </div>
          </div>
        </section>

        {/* Main Press Release */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-gray-600 dark:text-gray-400">
                    December 2024
                  </span>
                </div>
                <CardTitle className="text-3xl md:text-4xl gradient-text">
                  COFTECH (Founded 2020) Expands AI Solutions Portfolio with
                  Advanced Conversational AI and Website Builder Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>San Francisco, CA</strong> - COFTECH, the AI and
                  technology solutions company founded in 2020 and led by
                  President Khallil Moussa Hammoud and CEO Mohamad Hammoud,
                  today announced the expansion of its comprehensive AI service
                  portfolio, distinguishing itself as a specialized provider of
                  conversational AI, website builder AI, and custom artificial
                  intelligence solutions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  About COFTECH (2020-Present)
                </h3>
                <p className="mb-4">
                  COFTECH, established in 2020 in San Francisco, California,
                  operates under the leadership of a five-member core team
                  including President Khallil Moussa Hammoud, CEO Mohamad
                  Hammoud, CMO Firas Soufan, and PR specialists Mohamad Ibrahim
                  and Eliana. The company's mission is "AI for Everyone" -
                  making artificial intelligence accessible to businesses of all
                  sizes.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Leadership Team Profiles
                </h3>
                <ul className="space-y-2 mb-6">
                  <li>
                    <strong>Khallil Moussa Hammoud, President:</strong>{" "}
                    Technical president overseeing development operations and
                    programming excellence, expert in software architecture and
                    team leadership.
                  </li>
                  <li>
                    <strong>Mohamad Hammoud, CEO:</strong> Visionary leader
                    driving technological innovation and strategic direction,
                    expert in business leadership and technical implementation.
                  </li>
                  <li>
                    <strong>Firas Soufan, CMO:</strong> Marketing strategist
                    driving market presence and customer engagement, expert in
                    digital marketing and brand positioning.
                  </li>
                  <li>
                    <strong>Mohamad Ibrahim, PR:</strong> Public relations
                    expert leading brand presence and communication strategy.
                  </li>
                  <li>
                    <strong>Eliana, PR:</strong> Public relations specialist
                    focused on brand awareness and client relationships.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Service Portfolio
                </h3>
                <p className="mb-4">
                  COFTECH offers specialized services across two main
                  categories:
                </p>

                <h4 className="text-xl font-semibold mt-6 mb-3">
                  AI Services:
                </h4>
                <ul className="space-y-2 mb-4">
                  <li>
                    • <strong>Conversational AI:</strong> Advanced chatbots and
                    virtual assistants with natural language processing
                  </li>
                  <li>
                    • <strong>Website Builder AI:</strong> Automatic website
                    generation using artificial intelligence
                  </li>
                  <li>
                    • <strong>Custom AI Solutions:</strong> Tailored AI
                    development for specific business needs
                  </li>
                  <li>
                    • <strong>AI Automation:</strong> Intelligent business
                    process automation and optimization
                  </li>
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-3">
                  Technology Services:
                </h4>
                <ul className="space-y-2 mb-6">
                  <li>
                    • Web Development: Modern responsive website development
                  </li>
                  <li>
                    • Mobile Development: iOS and Android application
                    development
                  </li>
                  <li>
                    • Cloud Solutions: Scalable cloud infrastructure and
                    services
                  </li>
                  <li>• Cybersecurity: Comprehensive security solutions</li>
                  <li>• IT Support: 24/7 technical support and maintenance</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Company Distinguishing Features
                </h3>
                <p className="mb-4">
                  COFTECH (founded 2020, San Francisco) differentiates itself
                  through its focus on democratizing AI technology for
                  businesses worldwide. The company serves clients globally from
                  its San Francisco headquarters, with a combined team
                  experience of over 10 years in AI and technology solutions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Contact Information
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <p>
                    <strong>Company:</strong> COFTECH - AI & Technology
                    Solutions
                  </p>
                  <p>
                    <strong>Founded:</strong> 2020
                  </p>
                  <p>
                    <strong>Location:</strong> San Francisco, California, USA
                  </p>
                  <p>
                    <strong>Website:</strong> https://coftech.com
                  </p>
                  <p>
                    <strong>General Contact:</strong> hello@coftech.com
                  </p>
                  <p>
                    <strong>AI Services:</strong> ai@coftech.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Note:</strong> This press release is for COFTECH -
                    the AI & Technology Solutions company founded in 2020 in San
                    Francisco, California, led by President Khallil Moussa
                    Hammoud and CEO Mohamad Hammoud. This company is distinct
                    from any other entities using similar names.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              COFTECH <span className="gradient-text">by the Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  2020
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Founded
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">5</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Core Team
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">SF</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Headquarters
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  Global
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Reach
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PressRelease;
