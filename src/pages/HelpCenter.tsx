import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  Play,
  FileText,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your first AI project",
      icon: Play,
      articles: 12,
      color: "bg-blue-500",
    },
    {
      title: "API Documentation",
      description: "Complete reference for all API endpoints and methods",
      icon: FileText,
      articles: 25,
      color: "bg-green-500",
    },
    {
      title: "Integrations",
      description: "Connect COFTECH with your existing tools and platforms",
      icon: BookOpen,
      articles: 18,
      color: "bg-purple-500",
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and error messages",
      icon: MessageCircle,
      articles: 22,
      color: "bg-orange-500",
    },
  ];

  const popularArticles = [
    {
      title: "How to create your first AI chatbot",
      category: "Getting Started",
      readTime: "5 min",
      rating: 4.9,
      views: "2.1k",
    },
    {
      title: "Authentication and API keys setup",
      category: "API Documentation",
      readTime: "3 min",
      rating: 4.8,
      views: "1.8k",
    },
    {
      title: "Integrating with Slack and Discord",
      category: "Integrations",
      readTime: "7 min",
      rating: 4.7,
      views: "1.5k",
    },
    {
      title: "Resolving rate limit errors",
      category: "Troubleshooting",
      readTime: "4 min",
      rating: 4.8,
      views: "1.3k",
    },
    {
      title: "Custom AI model training guide",
      category: "Advanced",
      readTime: "12 min",
      rating: 4.9,
      views: "1.1k",
    },
  ];

  const videoTutorials = [
    {
      title: "COFTECH Platform Overview",
      duration: "8:24",
      views: "5.2k",
      category: "Introduction",
    },
    {
      title: "Building Your First Chatbot",
      duration: "12:15",
      views: "3.8k",
      category: "Tutorial",
    },
    {
      title: "Advanced API Integration",
      duration: "15:30",
      views: "2.9k",
      category: "Development",
    },
    {
      title: "Best Practices for AI Deployment",
      duration: "10:45",
      views: "2.1k",
      category: "Best Practices",
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
                📚 Help Center
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                How can we help you?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Find answers, tutorials, and guides to help you get the most out
                of COFTECH AI services.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search help articles..."
                    className="pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-900"
                  />
                  <Button className="absolute right-2 top-2 bg-gradient-ai border-0">
                    Search
                  </Button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Popular searches: API setup, chatbot, integration, billing
                </p>
              </div>
            </div>
          </section>

          {/* Help Categories */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Browse by <span className="gradient-text">Category</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Find the help you need organized by topic
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {helpCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardHeader>
                      <div
                        className={`w-16 h-16 mx-auto mb-4 ${category.color} rounded-full flex items-center justify-center`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-center">
                        {category.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                        {category.description}
                      </p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {category.articles} articles
                      </p>
                      <Button variant="outline" className="w-full">
                        View Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Articles */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Popular <span className="gradient-text">Articles</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Most viewed and highest rated help articles
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {popularArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <Badge variant="secondary">
                              {article.category}
                            </Badge>
                            <span>{article.readTime}</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              {article.rating}
                            </div>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline">View All Articles</Button>
              </div>
            </div>
          </section>

          {/* Video Tutorials */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Video <span className="gradient-text">Tutorials</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Step-by-step video guides to help you get started
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {videoTutorials.map((video, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative h-48 bg-gradient-ai">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white/80" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <Badge variant="secondary">{video.category}</Badge>
                        <span>{video.views} views</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="bg-gradient-ai border-0">
                  View All Videos
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-20 bg-gradient-ai text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Can't find what you're looking for? Our support team is here to
                help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-6 text-lg"
                >
                  Contact Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default HelpCenter;
