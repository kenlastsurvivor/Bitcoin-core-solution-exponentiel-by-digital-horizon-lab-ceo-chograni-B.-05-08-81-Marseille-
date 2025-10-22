import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AIChat() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: t('language') === 'fr'
        ? "Bonjour! Je suis votre assistant IA pour Bitcoin Core. Comment puis-je vous aider aujourd'hui?"
        : "Hello! I'm your AI assistant for Bitcoin Core. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1500);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    const isFrench = t('language') === 'fr';

    if (input.includes('download') || input.includes('télécharger')) {
      return isFrench
        ? "Pour télécharger Bitcoin Core, visitez la page Téléchargements et choisissez votre plateforme. Je recommande de toujours vérifier les signatures après le téléchargement pour garantir la sécurité."
        : "To download Bitcoin Core, visit the Downloads page and select your platform. I recommend always verifying signatures after downloading to ensure security.";
    }

    if (input.includes('verify') || input.includes('vérifier') || input.includes('signature')) {
      return isFrench
        ? "La vérification est cruciale pour la sécurité. Téléchargez les fichiers SHA256SUMS et SHA256SUMS.asc, puis utilisez GPG pour vérifier les signatures. Voulez-vous que je vous guide étape par étape?"
        : "Verification is crucial for security. Download the SHA256SUMS and SHA256SUMS.asc files, then use GPG to verify signatures. Would you like me to guide you step by step?";
    }

    if (input.includes('setup') || input.includes('install') || input.includes('configure') || input.includes('configurer')) {
      return isFrench
        ? "L'installation de Bitcoin Core varie selon votre système. Après installation, vous devrez synchroniser avec le réseau (environ 600 Go). Voulez-vous des instructions spécifiques pour votre plateforme?"
        : "Bitcoin Core setup varies by system. After installation, you'll need to sync with the network (~600 GB). Would you like specific instructions for your platform?";
    }

    if (input.includes('space') || input.includes('storage') || input.includes('espace') || input.includes('stockage')) {
      return isFrench
        ? "Bitcoin Core nécessite environ 600 Go pour la blockchain complète, plus 5-10 Go par mois. Vous pouvez activer le mode 'pruning' pour réduire l'espace à seulement 10 Go sans compromettre la sécurité."
        : "Bitcoin Core requires about 600 GB for the full blockchain, plus 5-10 GB monthly. You can enable pruning mode to reduce space to just 10 GB without compromising security.";
    }

    return isFrench
      ? "Je suis là pour vous aider avec Bitcoin Core. Vous pouvez me poser des questions sur le téléchargement, la vérification, l'installation, ou la configuration. Que souhaitez-vous savoir?"
      : "I'm here to help with Bitcoin Core. You can ask me about downloading, verification, installation, or configuration. What would you like to know?";
  };

  const suggestedQuestions = [
    t('chat.examples.download'),
    t('chat.examples.verify'),
    t('chat.examples.setup')
  ];

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="border-b border-orange-100">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-orange-600" />
            {t('chat.title')}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "flex gap-3 max-w-[80%]",
                    message.sender === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    message.sender === 'user'
                      ? "bg-orange-600 text-white"
                      : "bg-orange-100 text-orange-600"
                  )}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>

                  <div
                    className={cn(
                      "rounded-lg px-4 py-2",
                      message.sender === 'user'
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('common.loading')}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-100">
              <div className="text-sm text-gray-600 mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(question)}
                    className="text-xs border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.placeholder')}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
