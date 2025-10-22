import { useLanguage } from '@/hooks/useLanguage';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Zap, Shield, Lightbulb } from 'lucide-react';

const Chat = () => {
  const { t } = useLanguage();

  const aiFeatures = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Interactive Guidance",
      description: "Ask questions and get instant help with Bitcoin Core"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Quick Solutions",
      description: "Fast answers to common installation and setup issues"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Security Focused",
      description: "Learn best practices for secure Bitcoin Core usage"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Smart Recommendations",
      description: "Personalized advice based on your specific needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            AI Assistant
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('chat.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('chat.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {aiFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-orange-100">
              <CardContent className="pt-6">
                <div className="mx-auto w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface */}
        <AIChat />

        {/* Help Text */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg">How to Use the AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <ul className="space-y-2 text-sm">
                <li>• Ask specific questions about downloading, verifying, or installing Bitcoin Core</li>
                <li>• Get help with troubleshooting common issues</li>
                <li>• Learn about Bitcoin Core features and configuration options</li>
                <li>• Receive guidance on security best practices</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">
                <strong>Note:</strong> This AI assistant provides general guidance. Always verify critical information from official Bitcoin Core documentation.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
