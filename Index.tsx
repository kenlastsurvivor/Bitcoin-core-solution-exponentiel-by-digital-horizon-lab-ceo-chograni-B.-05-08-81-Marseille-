import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { Download, Shield, Code, MessageCircle, Bitcoin, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('home.features.secure'),
      description: t('home.features.secureDesc')
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: t('home.features.opensource'),
      description: t('home.features.opensourceDesc')
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t('home.features.ai'),
      description: t('home.features.aiDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo & Title */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Bitcoin className="h-20 w-20 text-orange-600" />
              <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                29.0
              </div>
            </div>
          </div>

          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            {t('home.latestVersion')}: 29.0
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.title')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            {t('home.subtitle')}
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
            >
              <Link to="/demo" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                {t('nav.demo')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
            >
              <Link to="/downloads" className="gap-2">
                <Download className="h-5 w-5" />
                {t('home.getStarted')}
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Open Source
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Cryptographically Signed
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Community Driven
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Reference Implementation
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-orange-100 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">600GB</div>
            <div className="text-sm text-gray-600">Blockchain Size</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">15+</div>
            <div className="text-sm text-gray-600">Years Active</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">MIT</div>
            <div className="text-sm text-gray-600">License</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">∞</div>
            <div className="text-sm text-gray-600">Security</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-orange-100 hover:border-orange-200 transition-colors cursor-pointer">
              <Link to="/downloads">
                <CardContent className="p-6 text-center">
                  <Download className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t('nav.downloads')}</h3>
                  <p className="text-sm text-gray-600">Get Bitcoin Core for your platform</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors cursor-pointer">
              <Link to="/verification">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t('nav.verification')}</h3>
                  <p className="text-sm text-gray-600">Learn to verify your downloads</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
