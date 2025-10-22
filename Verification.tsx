import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Monitor, Apple, Laptop, Shield, CheckCircle, Terminal, AlertTriangle, Copy } from 'lucide-react';
import { useState } from 'react';

const Verification = () => {
  const { t } = useLanguage();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const verificationSteps = [
    {
      title: t('verification.steps.checksum'),
      description: "Verify file integrity using SHA256 checksums",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "text-green-600"
    },
    {
      title: t('verification.steps.signature'),
      description: "Verify authenticity using cryptographic signatures", 
      icon: <Shield className="h-5 w-5" />,
      color: "text-blue-600"
    },
    {
      title: t('verification.steps.install'),
      description: "Install Bitcoin Core safely on your system",
      icon: <Terminal className="h-5 w-5" />,
      color: "text-orange-600"
    }
  ];

  const CodeBlock = ({ children, commandId }: { children: string; commandId: string }) => (
    <div className="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <code>{children}</code>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-white"
        onClick={() => copyToClipboard(children, commandId)}
      >
        <Copy className="h-3 w-3" />
      </Button>
      {copiedCommand === commandId && (
        <div className="absolute top-2 right-10 text-xs text-green-400">
          Copied!
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            Security Guide
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('verification.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('verification.subtitle')}
          </p>
        </div>

        {/* Importance Alert */}
        <Alert className="mb-8 max-w-4xl mx-auto border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Critical:</strong> {t('verification.recommended')} Skipping verification can lead to fund loss from malicious software.
          </AlertDescription>
        </Alert>

        {/* Steps Overview */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {verificationSteps.map((step, index) => (
            <Card key={index} className="border-orange-100 text-center">
              <CardHeader>
                <div className={`mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center ${step.color} mb-4`}>
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Platform-Specific Instructions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Platform-Specific Instructions</h2>
          
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="windows" className="gap-2">
                <Monitor className="h-4 w-4" />
                Windows
              </TabsTrigger>
              <TabsTrigger value="macos" className="gap-2">
                <Apple className="h-4 w-4" />
                macOS
              </TabsTrigger>
              <TabsTrigger value="linux" className="gap-2">
                <Laptop className="h-4 w-4" />
                Linux
              </TabsTrigger>
            </TabsList>

            {/* Windows Instructions */}
            <TabsContent value="windows" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Windows Verification Steps</CardTitle>
                  <CardDescription>Using PowerShell or Command Prompt</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Download Required Files</h4>
                    <p className="text-sm text-gray-600 mb-2">Download Bitcoin Core, SHA256SUMS, and SHA256SUMS.asc files to the same folder.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">2. Verify Checksum</h4>
                    <p className="text-sm text-gray-600 mb-2">Open PowerShell in the download folder and run:</p>
                    <CodeBlock commandId="win-checksum">
                      {`# Verify checksum (replace filename with your download)
Get-FileHash bitcoin-29.0-win64-setup.exe -Algorithm SHA256
# Compare output with SHA256SUMS file`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Install GPG</h4>
                    <p className="text-sm text-gray-600 mb-2">Download and install <a href="https://gpg4win.org/" target="_blank" className="text-orange-600 hover:underline">GPG4Win</a> if not already installed.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Import Bitcoin Core Keys</h4>
                    <CodeBlock commandId="win-keys">
                      {`# Import developer keys
gpg --keyserver hkps://keys.openpgp.org --recv-keys 1A1F97FCBE82FFF3
gpg --keyserver hkps://keys.openpgp.org --recv-keys 28F5900B1BB5D1A4`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. Verify Signatures</h4>
                    <CodeBlock commandId="win-verify">
                      {`# Verify the signature
gpg --verify SHA256SUMS.asc`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* macOS Instructions */}
            <TabsContent value="macos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>macOS Verification Steps</CardTitle>
                  <CardDescription>Using Terminal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Navigate to Downloads</h4>
                    <CodeBlock commandId="mac-cd">
                      cd Downloads/
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Verify Checksum</h4>
                    <CodeBlock commandId="mac-checksum">
                      {`# Verify checksum matches SHA256SUMS
shasum -a 256 --ignore-missing --check SHA256SUMS`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Install GPG (if needed)</h4>
                    <CodeBlock commandId="mac-gpg">
                      {`# Using Homebrew
brew install gpg
# Or download from: https://gpgtools.org/`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Import Developer Keys</h4>
                    <CodeBlock commandId="mac-keys">
                      {`# Import Bitcoin Core developer keys
curl https://raw.githubusercontent.com/bitcoin-core/guix.sigs/main/builder-keys/fanquake.gpg | gpg --import
gpg --keyserver hkps://keys.openpgp.org --refresh-keys`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. Verify Signatures</h4>
                    <CodeBlock commandId="mac-verify">
                      gpg --verify SHA256SUMS.asc
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Linux Instructions */}
            <TabsContent value="linux" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Linux Verification Steps</CardTitle>
                  <CardDescription>Using terminal commands</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Navigate to Downloads</h4>
                    <CodeBlock commandId="linux-cd">
                      cd ~/Downloads
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Verify Checksum</h4>
                    <CodeBlock commandId="linux-checksum">
                      {`# Verify checksum matches SHA256SUMS
sha256sum --ignore-missing --check SHA256SUMS`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Install GPG (if needed)</h4>
                    <CodeBlock commandId="linux-gpg">
                      {`# Ubuntu/Debian
sudo apt install gnupg
# Fedora
sudo dnf install gnupg2
# Arch
sudo pacman -S gnupg`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Import All Developer Keys</h4>
                    <CodeBlock commandId="linux-keys">
                      {`# Clone and import all developer keys
git clone https://github.com/bitcoin-core/guix.sigs
gpg --import guix.sigs/builder-keys/*
gpg --keyserver hkps://keys.openpgp.org --refresh-keys`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. Verify Signatures</h4>
                    <CodeBlock commandId="linux-verify">
                      gpg --verify SHA256SUMS.asc
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Understanding Output */}
        <Card className="mt-8 max-w-4xl mx-auto border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700">Understanding Verification Output</CardTitle>
            <CardDescription>What to look for in successful verification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✅ Good Signature Output</h4>
              <div className="bg-green-50 p-3 rounded text-sm font-mono">
                gpg: Good signature from "fanquake &lt;fanquake@gmail.com&gt;"<br/>
                Primary key fingerprint: E777 299F C265 DD04 7930  70EB 944D 35F9 AC3D B76A
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✅ Good Checksum Output</h4>
              <div className="bg-green-50 p-3 rounded text-sm font-mono">
                bitcoin-29.0-x86_64-apple-darwin.zip: OK
              </div>
            </div>
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Note:</strong> You may see warnings about "key not certified with trusted signature." This is normal - verify the fingerprint matches expected values from multiple sources.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Verification;
