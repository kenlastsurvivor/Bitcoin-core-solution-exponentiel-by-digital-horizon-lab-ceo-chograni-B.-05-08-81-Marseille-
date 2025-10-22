import { useLanguage } from '@/hooks/useLanguage';
import { DownloadCard } from '@/components/DownloadCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Monitor, Apple, Laptop, Code, AlertTriangle, Info, ExternalLink } from 'lucide-react';

const Downloads = () => {
  const { t } = useLanguage();

  const downloadData = [
    {
      platform: t('downloads.platforms.windows'),
      icon: <Monitor className="h-6 w-6" />,
      recommended: true,
      variants: [
        {
          name: "Windows Installer",
          architecture: t('downloads.architecture.x64'),
          size: "27.2 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-win64-setup.exe"
        },
        {
          name: "Windows ZIP",
          architecture: t('downloads.architecture.x64'),
          size: "32.1 MB", 
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-win64.zip"
        }
      ]
    },
    {
      platform: t('downloads.platforms.mac'),
      icon: <Apple className="h-6 w-6" />,
      variants: [
        {
          name: "macOS DMG",
          architecture: "x86_64",
          size: "25.8 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-x86_64-apple-darwin.dmg"
        },
        {
          name: "macOS ARM64",
          architecture: t('downloads.architecture.arm64'),
          size: "24.9 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-arm64-apple-darwin.dmg"
        }
      ]
    },
    {
      platform: t('downloads.platforms.linux'),
      icon: <Laptop className="h-6 w-6" />,
      variants: [
        {
          name: "Linux Tarball",
          architecture: t('downloads.architecture.x64'),
          size: "34.2 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-x86_64-linux-gnu.tar.gz"
        },
        {
          name: "Linux ARM64",
          architecture: t('downloads.architecture.arm64'),
          size: "32.8 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-aarch64-linux-gnu.tar.gz"
        },
        {
          name: "Linux ARM",
          architecture: t('downloads.architecture.arm'),
          size: "31.5 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0-arm-linux-gnueabihf.tar.gz"
        }
      ]
    },
    {
      platform: t('downloads.platforms.source'),
      icon: <Code className="h-6 w-6" />,
      variants: [
        {
          name: "Source Code",
          architecture: "All",
          size: "12.4 MB",
          url: "https://bitcoincore.org/bin/bitcoin-core-29.0/bitcoin-29.0.tar.gz"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            {t('downloads.version')}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('downloads.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('downloads.subtitle')}
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 max-w-4xl mx-auto border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Security Notice:</strong> {t('verification.recommended')} Always verify downloads using the verification instructions.
          </AlertDescription>
        </Alert>

        {/* Downloads Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {downloadData.map((data, index) => (
            <DownloadCard
              key={index}
              platform={data.platform}
              icon={data.icon}
              variants={data.variants}
              recommended={data.recommended}
            />
          ))}
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* System Requirements */}
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-orange-600" />
                {t('downloads.requirements')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Minimum Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2 GB RAM</li>
                  <li>• 10 GB storage (pruned)</li>
                  <li>• Broadband internet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Recommended</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 8+ GB RAM</li>
                  <li>• 600+ GB storage (full node)</li>
                  <li>• Unlimited bandwidth</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Verification Files */}
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-orange-600" />
                Verification Files
              </CardTitle>
              <CardDescription>
                Download these files to verify your Bitcoin Core download
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-orange-200 text-orange-600 hover:bg-orange-50"
                onClick={() => window.open('https://bitcoincore.org/bin/bitcoin-core-29.0/SHA256SUMS', '_blank')}
              >
                <Code className="h-4 w-4 mr-2" />
                SHA256SUMS
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-orange-200 text-orange-600 hover:bg-orange-50"
                onClick={() => window.open('https://bitcoincore.org/bin/bitcoin-core-29.0/SHA256SUMS.asc', '_blank')}
              >
                <Code className="h-4 w-4 mr-2" />
                SHA256SUMS.asc
              </Button>
              <div className="text-xs text-gray-500 mt-2">
                These files contain checksums and cryptographic signatures to verify download integrity.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage Warning */}
        <Alert className="mt-8 max-w-4xl mx-auto border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Storage Notice:</strong> {t('verification.bandwidthDesc')}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Downloads;
