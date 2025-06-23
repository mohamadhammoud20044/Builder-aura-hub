import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, MessageSquare, Mic, Globe, Zap } from "lucide-react";

const ConversationalAI = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$100",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "100 minutes of high-quality Text to Speech with Multilingual v2",
        "200 minutes of low-latency Text to Speech with Flash v2.5",
        "250 minutes of Conversational AI",
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional",
      price: "$200",
      period: "per month",
      description: "Ideal for growing businesses with higher demands",
      features: [
        "500 minutes of high-quality Text to Speech with Multilingual v2",
        "1,000 minutes of low-latency Text to Speech with Flash v2.5",
        "1,100 minutes of Conversational AI",
      ],
      buttonText: "Most Popular",
      popular: true,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      name: "Enterprise",
      price: "$1,000",
      period: "per month",
      description: "For large organizations with extensive AI needs",
      features: [
        "2,000 minutes of high-quality Text to Speech with Multilingual v2",
        "4,000 minutes of low-latency Text to Speech with Flash v2.5",
        "3,600 minutes of Conversational AI",
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-cyan-600 to-blue-700",
    },
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description:
        "Human-like AI interactions that understand context and nuance",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with customers in their preferred language",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ultra-low latency responses for real-time conversations",
    },
    {
      icon: Mic,
      title: "High-Quality Voice",
      description: "Crystal clear, natural-sounding speech synthesis",
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
              🎯 Most Popular Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Conversational AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your customer experience with our state-of-the-art
              conversational AI technology
            </p>
          </div>
        </section>

        {/* Sales Copy Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">
                Ready to <span className="gradient-text">Revolutionize</span>{" "}
                Your Customer Experience?
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4 text-left md:text-center">
                <p>
                  <strong>Stop losing customers to poor communication!</strong>{" "}
                  Every minute your business spends on hold, every delayed
                  response, every language barrier is costing you revenue and
                  customer satisfaction.
                </p>
                <p>
                  Our Conversational AI doesn't just answer questions – it{" "}
                  <em>understands your customers</em>, speaks their language
                  (literally!), and provides instant, accurate responses 24/7.
                  Imagine never missing a customer inquiry again, handling
                  thousands of conversations simultaneously, and providing
                  consistent, high-quality service that scales with your
                  business.
                </p>
                <p className="text-xl font-semibold text-primary">
                  🚀 Join 500+ businesses already saving $10,000+ monthly on
                  customer service costs while increasing satisfaction by 85%!
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your <span className="gradient-text">AI Power</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Start small or go big – our flexible plans grow with your
                business. Every plan includes our cutting-edge technology stack.
              </p>
              <div className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Limited Time: 30% off first 3 months for new customers!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-300 hover:shadow-2xl ${
                    plan.popular
                      ? "ring-2 ring-primary shadow-2xl scale-105 border-primary"
                      : "shadow-lg hover:scale-105"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-ai border-0 text-white px-6 py-2">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div
                    className={`h-2 bg-gradient-to-r ${plan.gradient}`}
                  ></div>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full h-12 text-lg ${
                        plan.popular
                          ? "bg-gradient-ai border-0 hover:opacity-90"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                    {plan.popular && (
                      <p className="text-xs text-center text-green-600 dark:text-green-400 font-semibold">
                        ✅ Save 50% vs competitors
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Not sure which plan is right for you?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Book a free 15-minute consultation with our AI specialists.
                  We'll analyze your needs and recommend the perfect solution.
                </p>
                <Button size="lg" className="bg-gradient-ai border-0 mr-4">
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Try Free Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <p className="text-gray-600 dark:text-gray-400">Uptime SLA</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">
                  &lt;200ms
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Average Response Time
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Languages Supported
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ConversationalAI;
