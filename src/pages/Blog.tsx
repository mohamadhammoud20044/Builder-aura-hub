import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Conversational AI in Business",
      excerpt:
        "Explore how conversational AI is transforming customer service and business operations across industries.",
      author: "COFTECH Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Technology",
      featured: true,
    },
    {
      title: "Building Custom AI Solutions: A Complete Guide",
      excerpt:
        "Learn the key considerations and best practices for developing custom AI solutions for your business needs.",
      author: "Tech Team",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "AI Automation: Streamlining Business Processes",
      excerpt:
        "Discover how AI automation can eliminate repetitive tasks and improve operational efficiency.",
      author: "COFTECH Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Automation",
    },
    {
      title: "Website Builder AI: Creating Sites in Minutes",
      excerpt:
        "See how our AI-powered website builder is revolutionizing web development for businesses of all sizes.",
      author: "Product Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Product Update",
    },
    {
      title: "Data Security in AI: Best Practices",
      excerpt:
        "Understanding the importance of data security when implementing AI solutions in your organization.",
      author: "Security Team",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Security",
    },
    {
      title: "ROI of AI Implementation: Case Studies",
      excerpt:
        "Real-world examples of how businesses achieved significant ROI through strategic AI implementation.",
      author: "Business Team",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Business",
    },
  ];

  const categories = [
    "All Posts",
    "AI Technology",
    "Development",
    "Automation",
    "Product Update",
    "Security",
    "Business",
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
                📝 Insights & Updates
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                COFTECH Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest insights, tutorials, and news about
                AI technology, business automation, and digital transformation.
              </p>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={
                      index === 0 ? "bg-gradient-ai border-0" : undefined
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Featured Post */}
              {blogPosts.filter((post) => post.featured).length > 0 && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 text-center">
                    Featured Post
                  </h2>
                  {blogPosts
                    .filter((post) => post.featured)
                    .map((post, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3 bg-gradient-ai"></div>
                          <div className="md:w-2/3 p-8">
                            <div className="flex items-center space-x-4 mb-4">
                              <Badge variant="secondary">{post.category}</Badge>
                              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <Button variant="outline">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 bg-gradient-ai"></div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs">
                              <User className="w-3 h-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-gradient-ai border-0">
                  Load More Posts
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI insights,
                tutorials, and company updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md bg-background"
                />
                <Button className="bg-gradient-ai border-0">Subscribe</Button>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
