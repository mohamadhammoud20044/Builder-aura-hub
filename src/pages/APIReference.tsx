import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Play, Key, Globe } from "lucide-react";

const APIReference = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/chat/completions",
      description: "Create a chat completion",
      category: "Chat",
    },
    {
      method: "GET",
      path: "/api/v1/models",
      description: "List available models",
      category: "Models",
    },
    {
      method: "POST",
      path: "/api/v1/websites/generate",
      description: "Generate a website",
      category: "Website Builder",
    },
    {
      method: "POST",
      path: "/api/v1/automation/workflows",
      description: "Create automation workflow",
      category: "Automation",
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
                🔌 API Reference
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                COFTECH API Reference
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Complete reference for COFTECH REST API. Build powerful AI
                applications with our comprehensive API endpoints.
              </p>
            </div>
          </section>

          {/* API Overview */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center">
                  <CardHeader>
                    <Key className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Secure API key authentication with rate limiting and usage
                      tracking
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>REST API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Standard HTTP methods with JSON responses and proper error
                      handling
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Play className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Real-time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      WebSocket support for real-time AI interactions and
                      streaming responses
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="authentication" className="max-w-6xl mx-auto">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="authentication">
                    Authentication
                  </TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="sdks">SDKs</TabsTrigger>
                </TabsList>

                <TabsContent value="authentication" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Authentication</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        All API requests require authentication using an API
                        key. Include your API key in the Authorization header:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                        <div>Authorization: Bearer YOUR_API_KEY</div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Base URL:</h4>
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                          https://api.coftech.com/v1
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="endpoints" className="mt-8">
                  <div className="space-y-4">
                    {endpoints.map((endpoint, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Badge
                                variant={
                                  endpoint.method === "POST"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  endpoint.method === "POST"
                                    ? "bg-green-600"
                                    : "bg-blue-600"
                                }
                              >
                                {endpoint.method}
                              </Badge>
                              <code className="text-lg font-mono">
                                {endpoint.path}
                              </code>
                            </div>
                            <Badge variant="outline">{endpoint.category}</Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {endpoint.description}
                          </p>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Chat Completion Example</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                        <div className="text-gray-500">
                          // POST /api/v1/chat/completions
                        </div>
                        <div className="text-blue-400">curl -X POST \</div>
                        <div className="ml-2 text-white">
                          https://api.coftech.com/v1/chat/completions \
                        </div>
                        <div className="ml-2 text-white">
                          -H "Authorization: Bearer YOUR_API_KEY" \
                        </div>
                        <div className="ml-2 text-white">
                          -H "Content-Type: application/json" \
                        </div>
                        <div className="ml-2 text-white">-d '{`{`}</div>
                        <div className="ml-4 text-yellow-400">
                          "model": "gpt-4",
                        </div>
                        <div className="ml-4 text-yellow-400">
                          "messages": [{`{`}
                        </div>
                        <div className="ml-6 text-white">"role": "user",</div>
                        <div className="ml-6 text-white">
                          "content": "Hello, AI!"
                        </div>
                        <div className="ml-4 text-yellow-400">{`}`}],</div>
                        <div className="ml-4 text-yellow-400">
                          "temperature": 0.7
                        </div>
                        <div className="ml-2 text-white">{`}`}'</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sdks" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "JavaScript",
                        package: "npm install @coftech/ai-sdk",
                        docs: "/docs/sdk/javascript",
                      },
                      {
                        name: "Python",
                        package: "pip install coftech-ai",
                        docs: "/docs/sdk/python",
                      },
                      {
                        name: "PHP",
                        package: "composer require coftech/ai-sdk",
                        docs: "/docs/sdk/php",
                      },
                      {
                        name: "Ruby",
                        package: "gem install coftech-ai",
                        docs: "/docs/sdk/ruby",
                      },
                      {
                        name: "Java",
                        package: "Maven/Gradle dependency",
                        docs: "/docs/sdk/java",
                      },
                      {
                        name: "Go",
                        package: "go get github.com/coftech/ai-sdk",
                        docs: "/docs/sdk/go",
                      },
                    ].map((sdk, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{sdk.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <code className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded block mb-3">
                            {sdk.package}
                          </code>
                          <a
                            href={sdk.docs}
                            className="text-primary hover:underline text-sm"
                          >
                            View Documentation →
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default APIReference;
