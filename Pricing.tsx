import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, Star, Crown, Zap, Shield, Users, MessageCircle, Download, Monitor, Smartphone, QrCode, X } from 'lucide-react';
import { getPaymentUrl } from '@/lib/payments';

const Pricing = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      id: 'basic',
      name: t('pricing.plans.basic.name'),
      description: t('pricing.plans.basic.description'),
      price: { monthly: 0, yearly: 0 },
      icon: <Download className="h-6 w-6" />,
      color: "border-gray-200",
      buttonStyle: "variant-outline",
      features: [
        t('pricing.plans.basic.features.downloads'),
        t('pricing.plans.basic.features.verification'),
        t('pricing.plans.basic.features.basicSupport'),
        t('pricing.plans.basic.features.communityAccess'),
        t('pricing.plans.basic.features.allPlatforms')
      ],
      limitations: [
        t('pricing.plans.basic.limitations.aiQuestions'),
        t('pricing.plans.basic.limitations.basicVerification')
      ]
    },
    {
      id: 'premium',
      name: t('pricing.plans.premium.name'),
      description: t('pricing.plans.premium.description'),
      price: { monthly: 24.99, yearly: 249.99 },
      icon: <Star className="h-6 w-6" />,
      color: "border-orange-200 ring-2 ring-orange-100",
      buttonStyle: "default",
      popular: true,
      features: [
        t('pricing.plans.premium.features.unlimited'),
        t('pricing.plans.premium.features.autoVerification'),
        t('pricing.plans.premium.features.prioritySupport'),
        t('pricing.plans.premium.features.multiNode'),
        t('pricing.plans.premium.features.alerts'),
        t('pricing.plans.premium.features.mobileApp'),
        t('pricing.plans.premium.features.backupAssist')
      ]
    },
    {
      id: 'pro',
      name: t('pricing.plans.pro.name'),
      description: t('pricing.plans.pro.description'),
      price: { monthly: 79.99, yearly: 799.99 },
      icon: <Crown className="h-6 w-6" />,
      color: "border-purple-200",
      buttonStyle: "default",
      features: [
        t('pricing.plans.pro.features.everything'),
        t('pricing.plans.pro.features.apiAccess'),
        t('pricing.plans.pro.features.whiteLabel'),
        t('pricing.plans.pro.features.analytics'),
        t('pricing.plans.pro.features.customBranding'),
        t('pricing.plans.pro.features.dedicatedSupport'),
        t('pricing.plans.pro.features.enterpriseFeatures'),
        t('pricing.plans.pro.features.consulting')
      ]
    },
    {
      id: 'enterprise',
      name: t('pricing.plans.enterprise.name'),
      description: t('pricing.plans.enterprise.description'),
      price: { monthly: 199.99, yearly: 1999.99 },
      icon: <Zap className="h-6 w-6" />,
      color: "border-gold-200 bg-gradient-to-br from-yellow-50 to-amber-50",
      buttonStyle: "default",
      features: [
        t('pricing.plans.enterprise.features.everything'),
        t('pricing.plans.enterprise.features.unlimited'),
        t('pricing.plans.enterprise.features.customDev'),
        t('pricing.plans.enterprise.features.onboarding'),
        t('pricing.plans.enterprise.features.sla'),
        t('pricing.plans.enterprise.features.compliance'),
        t('pricing.plans.enterprise.features.training'),
        t('pricing.plans.enterprise.features.priority')
      ]
    }
  ];

  const platformFeatures = [
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Desktop",
      description: "Windows, macOS, Linux"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile",
      description: "iOS, Android, PWA"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Web",
      description: "Chrome, Firefox, Safari, Edge"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            {t('pricing.badge')}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-orange-600 font-medium' : 'text-gray-600'}`}>
              {t('pricing.monthly')}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-orange-600"
            />
            <span className={`text-sm ${isYearly ? 'text-orange-600 font-medium' : 'text-gray-600'}`}>
              {t('pricing.yearly')}
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                {t('pricing.save20')}
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600 text-white">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {plan.icon}
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>

                <div className="pt-4">
                  <div className="text-4xl font-bold text-gray-900">
                    €{isYearly ? plan.price.yearly : plan.price.monthly}
                    {plan.price.monthly > 0 && (
                      <span className="text-sm font-normal text-gray-600">
                        /{isYearly ? t('pricing.year') : t('pricing.month')}
                      </span>
                    )}
                  </div>
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="text-sm text-gray-600 mt-1">
                      €{(plan.price.yearly / 12).toFixed(2)}/{t('pricing.month')}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className={`w-full ${plan.buttonStyle === 'default' ? 'bg-orange-600 hover:bg-orange-700' : 'border-orange-200 text-orange-600 hover:bg-orange-50'}`}
                  variant={plan.buttonStyle === 'default' ? 'default' : 'outline'}
                  onClick={() => {
                    if (plan.price.monthly === 0) return;
                    const cycle = isYearly ? 'yearly' : 'monthly';
                    const url = plan.id && plan.id !== 'basic' ? getPaymentUrl(plan.id, cycle) : null;
                    if (url) {
                      window.open(url, '_blank');
                    } else {
                      setSelectedPlan(plan);
                    }
                  }}
                >
                  {plan.price.monthly === 0 ? t('pricing.getStarted') : t('pricing.subscribe')}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">{t('pricing.included')}</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}

                  {plan.limitations && (
                    <>
                      <h4 className="font-semibold text-gray-900 pt-2">{t('pricing.limitations')}</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-3">
                          <span className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Compatibility */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('pricing.compatibility.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platformFeatures.map((platform, index) => (
              <Card key={index} className="text-center border-orange-100">
                <CardContent className="pt-6">
                  <div className="mx-auto w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-3">
                    {platform.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{platform.title}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {t('pricing.compatibility.description')}
            </p>
          </div>
        </div>

        {/* Creator Info */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-orange-800">{t('pricing.creator.title')}</h3>
              </div>
              <p className="text-orange-700 mb-2">
                <strong>Chograni Bilel</strong> - {t('pricing.creator.location')}
              </p>
              <p className="text-sm text-orange-600">
                {t('pricing.creator.description')}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Bitcoin Expert
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  AI Development
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Cross-Platform
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ or Additional Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('pricing.faq.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.trial.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('pricing.faq.trial.answer')}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.cancel.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('pricing.faq.cancel.answer')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal de Paiement PayPal */}
        {selectedPlan && (
          <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-orange-600" />
                  {t('pricing.payment.title')} - {selectedPlan.name}
                </DialogTitle>
                <DialogDescription>
                  {t('pricing.payment.description')}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Résumé du plan */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{selectedPlan.name}</span>
                    <span className="text-lg font-bold text-orange-600">
                      €{isYearly ? selectedPlan.price.yearly : selectedPlan.price.monthly}
                      <span className="text-sm font-normal">
                        /{isYearly ? t('pricing.year') : t('pricing.month')}
                      </span>
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-green-600">
                      ✓ {t('pricing.save20')} - €{(selectedPlan.price.yearly / 12).toFixed(2)}/{t('pricing.month')}
                    </div>
                  )}
                </div>

                {/* Pay Online if configured */}
                <div className="space-y-3">
                  {(() => {
                    const cycle = isYearly ? 'yearly' : 'monthly';
                    const id = selectedPlan?.id as 'premium' | 'pro' | 'enterprise' | undefined;
                    const url = id ? getPaymentUrl(id, cycle) : null;
                    return (
                      <>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700"
                          disabled={!url}
                          onClick={() => url && window.open(url, '_blank')}
                        >
                          Pay online
                        </Button>
                        {!url && (
                          <div className="text-xs text-gray-500">Online payment link unavailable for this plan. Use QR code below.</div>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* QR Code PayPal */}
                <div className="text-center">
                  <div className="inline-block p-4 bg-white rounded-lg border-2 border-gray-200">
                    <img
                      src={(import.meta.env.VITE_PAYMENT_QR_URL as string) || "https://cdn.builder.io/api/v1/image/assets%2F96e276e23d7a44408716bf97402ed572%2F8380fbc861fc43e7b2a45cf4db7e755e?format=webp&width=800"}
                      alt="PayPal QR Code"
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    {t('pricing.payment.scanQR')}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Digital Horizon Lab
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Chograni Bilel
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">{t('pricing.payment.steps')}:</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">1</span>
                      {t('pricing.payment.step1')}
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
                      {t('pricing.payment.step2')}
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">3</span>
                      {t('pricing.payment.step3')}
                    </li>
                  </ol>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setSelectedPlan(null)}
                    variant="outline"
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    {t('common.close')}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Pricing;
