import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const quickLinks = [
    { href: "/", label: t('nav.home'), icon: Home },
    { href: "/downloads", label: t('nav.downloads') },
    { href: "/verification", label: t('nav.verification') },
    { href: "/chat", label: t('nav.chat') },
    { href: "/pricing", label: t('nav.pricing') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-orange-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <CardTitle className="text-4xl font-bold text-gray-900">404</CardTitle>
              <CardDescription className="text-xl text-gray-600">
                Page Not Found
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {t('common.back')} to Home
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t border-orange-100">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {quickLinks.map(({ href, label, icon: Icon }) => (
                    <Button
                      key={href}
                      variant="outline"
                      asChild
                      className="justify-start gap-2 border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <Link to={href}>
                        {Icon && <Icon className="h-4 w-4" />}
                        {label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
