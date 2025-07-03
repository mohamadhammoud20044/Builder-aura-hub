import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Bot, Zap, AlertCircle } from "lucide-react";

interface AIModel {
  id: string;
  name: string;
  description: string;
  category?: string;
  status?: string;
}

const AIModelsRepeater = () => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAIModels = async () => {
      try {
        setLoading(true);
        setError(null);

        // Mock data for demonstration
        const mockModels: AIModel[] = [
          {
            id: "1",
            name: "GPT-4 Turbo",
            description:
              "Advanced language model for complex reasoning, creative tasks, and detailed analysis with improved performance and efficiency.",
            category: "Language Model",
            status: "Available",
          },
          {
            id: "2",
            name: "DALL-E 3",
            description:
              "State-of-the-art image generation model that creates high-quality, detailed images from text descriptions.",
            category: "Image Generation",
            status: "Available",
          },
          {
            id: "3",
            name: "Whisper",
            description:
              "Automatic speech recognition model that transcribes and translates audio in multiple languages with high accuracy.",
            category: "Speech Recognition",
            status: "Available",
          },
          {
            id: "4",
            name: "Claude 3.5 Sonnet",
            description:
              "Highly capable AI assistant for analysis, writing, coding, and complex problem-solving with enhanced reasoning abilities.",
            category: "Language Model",
            status: "Available",
          },
          {
            id: "5",
            name: "CodeLlama",
            description:
              "Specialized coding assistant that helps with code generation, debugging, and explanation across multiple programming languages.",
            category: "Code Generation",
            status: "Available",
          },
          {
            id: "6",
            name: "Vision Pro",
            description:
              "Advanced computer vision model for image analysis, object detection, and visual understanding tasks.",
            category: "Computer Vision",
            status: "Beta",
          },
          {
            id: "7",
            name: "Translation Master",
            description:
              "High-quality neural machine translation supporting 100+ languages with context-aware translations.",
            category: "Translation",
            status: "Available",
          },
          {
            id: "8",
            name: "Sentiment Analyzer",
            description:
              "Real-time sentiment analysis and emotion detection for text, social media, and customer feedback.",
            category: "Analytics",
            status: "Available",
          },
        ];

        // Simulate API delay
        setTimeout(() => {
          setModels(mockModels);
          setLoading(false);
        }, 1000);
        return;
      }

      setLoading(false);
    };

    fetchAIModels();
  }, []);

  const handleTryNow = (model: AIModel) => {
    // Handle the "Try Now" action - could open a modal, navigate to a demo page, etc.
    console.log(`Trying model: ${model.name}`);
    // You can implement the actual functionality here
    alert(`Launching ${model.name} demo...`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Language Model":
        return <Bot className="w-4 h-4" />;
      case "Image Generation":
        return <Zap className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Coming Soon":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-gray-600 dark:text-gray-400">
            Loading AI models...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-500" />
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Failed to load AI models
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Available <span className="gradient-text">AI Models</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our comprehensive collection of AI models, each designed for
          specific tasks and optimized for performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <Card
            key={model.id}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {model.category && getCategoryIcon(model.category)}
                  <Badge variant="outline" className="text-xs">
                    {model.category || "AI Model"}
                  </Badge>
                </div>
                {model.status && (
                  <Badge className={`text-xs ${getStatusColor(model.status)}`}>
                    {model.status}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {model.name}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {model.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                onClick={() => handleTryNow(model)}
                className="w-full bg-gradient-ai border-0 group-hover:scale-105 transition-transform duration-200"
                disabled={model.status === "Coming Soon"}
              >
                {model.status === "Coming Soon" ? "Coming Soon" : "Try Now"}
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {models.length === 0 && (
        <div className="text-center py-12">
          <Bot className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400">
            No AI models available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default AIModelsRepeater;