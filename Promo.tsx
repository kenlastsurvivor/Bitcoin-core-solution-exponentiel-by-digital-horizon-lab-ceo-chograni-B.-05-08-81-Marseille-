import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';
import { QrCode, ArrowRight, Star } from 'lucide-react';

const Promo = () => {
  const { t } = useLanguage();
  const qr = (import.meta.env.VITE_PAYMENT_QR_URL as string) ||
    'https://cdn.builder.io/api/v1/image/assets%2F96e276e23d7a44408716bf97402ed572%2F8380fbc861fc43e7b2a45cf4db7e755e?format=webp&width=800';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">Promo</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bitcoin Core Assistant</h1>
          <p className="text-lg text-gray-600">
            {t('home.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-orange-600" /> {t('pricing.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{t('pricing.subtitle')}</p>
              <div className="flex gap-3">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/pricing" className="gap-2">{t('pricing.subscribe')} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Link to="/downloads">{t('nav.downloads')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><QrCode className="h-5 w-5 text-orange-600" /> PayPal QR</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="inline-block p-4 bg-white rounded-lg border-2 border-gray-200">
                <img src={qr} alt="PayPal QR" className="w-56 h-56 mx-auto" />
              </div>
              <p className="text-sm text-gray-600 mt-3">Scannez pour vous abonner immédiatement.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Promo;
