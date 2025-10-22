import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { Download, Shield, HardDrive } from 'lucide-react';

interface DownloadCardProps {
  platform: string;
  icon: React.ReactNode;
  variants: Array<{
    name: string;
    architecture: string;
    size: string;
    url: string;
  }>;
  recommended?: boolean;
}

export function DownloadCard({ platform, icon, variants, recommended }: DownloadCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-lg border-orange-100">
      {recommended && (
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
          Recommended
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
            {icon}
          </div>
          <CardTitle className="text-lg">{platform}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {variants.map((variant, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="font-medium text-sm">{variant.name}</div>
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                <Badge variant="outline" className="text-xs">
                  {variant.architecture}
                </Badge>
                <div className="flex items-center gap-1">
                  <HardDrive className="h-3 w-3" />
                  {variant.size}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="gap-1 border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <Shield className="h-3 w-3" />
                {t('downloads.verify')}
              </Button>
              <Button
                size="sm"
                className="gap-1 bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open(variant.url, '_blank')}
              >
                <Download className="h-3 w-3" />
                {t('downloads.download')}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
