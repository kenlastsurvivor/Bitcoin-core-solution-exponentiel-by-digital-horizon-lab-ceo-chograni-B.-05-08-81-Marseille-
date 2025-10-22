import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Monitor, Smartphone, Tablet, Laptop,
  CheckCircle, Play, Pause, RotateCcw,
  Wifi, Battery, Signal, Bluetooth,
  Download, Shield, MessageCircle, Zap,
  Globe, Lock, Clock, Users
} from 'lucide-react';

const Demo = () => {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState('sync');
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startDemo = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setProgress(0);
    setIsRunning(false);
  };

  const demos = [
    {
      id: 'sync',
      title: t('demo.sync.title'),
      description: t('demo.sync.description'),
      icon: <Download className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    {
      id: 'ai',
      title: t('demo.ai.title'),
      description: t('demo.ai.description'),
      icon: <MessageCircle className="h-5 w-5" />,
      color: 'text-orange-600'
    },
    {
      id: 'security',
      title: t('demo.security.title'),
      description: t('demo.security.description'),
      icon: <Shield className="h-5 w-5" />,
      color: 'text-green-600'
    },
    {
      id: 'performance',
      title: t('demo.performance.title'),
      description: t('demo.performance.description'),
      icon: <Zap className="h-5 w-5" />,
      color: 'text-purple-600'
    }
  ];

  const platforms = [
    { id: 'desktop', icon: <Monitor className="h-6 w-6" />, label: 'Desktop', os: 'Windows 11' },
    { id: 'mobile', icon: <Smartphone className="h-6 w-6" />, label: 'Mobile', os: 'iOS 17' },
    { id: 'tablet', icon: <Tablet className="h-6 w-6" />, label: 'Tablet', os: 'Android 14' },
    { id: 'laptop', icon: <Laptop className="h-6 w-6" />, label: 'Laptop', os: 'macOS Sonoma' }
  ];

  const getStatusColor = () => {
    if (progress === 0) return 'text-gray-500';
    if (progress < 100) return 'text-orange-500';
    return 'text-green-500';
  };

  const getStatusText = () => {
    if (progress === 0) return t('demo.status.ready');
    if (progress < 100) return t('demo.status.running');
    return t('demo.status.completed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            {t('demo.badge')}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('demo.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>

        {/* Platform Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
            {t('demo.platform.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <Card
                key={platform.id}
                className={`cursor-pointer transition-all ${
                  deviceType === platform.id
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setDeviceType(platform.id)}
              >
                <CardContent className="pt-4 text-center">
                  <div className={`mx-auto mb-2 ${deviceType === platform.id ? 'text-orange-600' : 'text-gray-600'}`}>
                    {platform.icon}
                  </div>
                  <div className="font-semibold text-sm">{platform.label}</div>
                  <div className="text-xs text-gray-500">{platform.os}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Demo Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Control Panel */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-orange-600" />
                    {t('demo.control.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">

                  {/* Demo Selection */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('demo.control.selectDemo')}
                    </label>
                    <div className="space-y-2">
                      {demos.map((demo) => (
                        <Button
                          key={demo.id}
                          variant={activeDemo === demo.id ? "default" : "outline"}
                          size="sm"
                          className={`w-full justify-start gap-2 ${
                            activeDemo === demo.id
                              ? 'bg-orange-600 hover:bg-orange-700'
                              : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                          }`}
                          onClick={() => setActiveDemo(demo.id)}
                        >
                          <span className={demo.color}>{demo.icon}</span>
                          {demo.title}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('demo.control.progress')}</span>
                      <span className={`text-sm ${getStatusColor()}`}>
                        {getStatusText()}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="text-xs text-gray-500 mt-1">{progress}%</div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    <Button
                      onClick={startDemo}
                      disabled={isRunning}
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {t('demo.control.start')}
                    </Button>
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      className="border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Device Status */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      {t('demo.status.device')}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Wifi className="h-3 w-3 text-green-500" />
                          {t('demo.status.network')}
                        </div>
                        <span className="text-green-600">Connected</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Battery className="h-3 w-3 text-green-500" />
                          {t('demo.status.battery')}
                        </div>
                        <span className="text-green-600">85%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Signal className="h-3 w-3 text-green-500" />
                          {t('demo.status.signal')}
                        </div>
                        <span className="text-green-600">Strong</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Display */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {demos.find(d => d.id === activeDemo)?.icon}
                      {demos.find(d => d.id === activeDemo)?.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      {platforms.find(p => p.id === deviceType)?.label}
                    </Badge>
                  </div>
                  <CardDescription>
                    {demos.find(d => d.id === activeDemo)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm min-h-96">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-gray-400">Bitcoin Core Assistant - {deviceType}</span>
                    </div>

                    {activeDemo === 'sync' && (
                      <div className="space-y-2">
                        <div>$ bitcoin-core --sync</div>
                        <div className="text-gray-400">Starting blockchain synchronization...</div>
                        {progress > 10 && <div>✓ Connecting to peers</div>}
                        {progress > 30 && <div>✓ Downloading block headers</div>}
                        {progress > 50 && <div>✓ Validating transactions</div>}
                        {progress > 70 && <div>✓ Building UTXO set</div>}
                        {progress > 90 && <div className="text-green-400">✓ Synchronization complete!</div>}
                        {progress === 100 && (
                          <div className="mt-4 p-3 bg-green-900/30 rounded border border-green-600">
                            <div className="text-green-300">🎉 Bitcoin Core is now fully synchronized!</div>
                            <div className="text-xs text-gray-400 mt-1">
                              Block height: 820,450 | Network: mainnet | Peers: 12
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeDemo === 'ai' && (
                      <div className="space-y-2">
                        <div>$ ai-assistant --help</div>
                        <div className="text-gray-400">AI Assistant initialized...</div>
                        {progress > 20 && <div>🤖 Hello! I'm your Bitcoin Core assistant.</div>}
                        {progress > 40 && <div className="text-blue-400">User: How do I verify my download?</div>}
                        {progress > 60 && <div>🤖 I'll guide you through verification:</div>}
                        {progress > 80 && <div>&nbsp;&nbsp;&nbsp;1. Download SHA256SUMS file</div>}
                        {progress > 90 && <div>&nbsp;&nbsp;&nbsp;2. Verify cryptographic signatures</div>}
                        {progress === 100 && (
                          <div className="mt-4 p-3 bg-blue-900/30 rounded border border-blue-600">
                            <div className="text-blue-300">✓ AI guidance complete!</div>
                            <div className="text-xs text-gray-400 mt-1">
                              Available in {t('language') === 'fr' ? 'French & English' : 'français et anglais'}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeDemo === 'security' && (
                      <div className="space-y-2">
                        <div>$ security-scan --verify</div>
                        <div className="text-gray-400">Running security verification...</div>
                        {progress > 15 && <div>🔍 Checking file integrity</div>}
                        {progress > 35 && <div>🔐 Verifying GPG signatures</div>}
                        {progress > 55 && <div>📋 Validating checksums</div>}
                        {progress > 75 && <div>🛡️ Scanning for tampering</div>}
                        {progress === 100 && (
                          <div className="mt-4 p-3 bg-green-900/30 rounded border border-green-600">
                            <div className="text-green-300">🔒 All security checks passed!</div>
                            <div className="text-xs text-gray-400 mt-1">
                              Download verified • Signatures valid • Safe to install
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeDemo === 'performance' && (
                      <div className="space-y-2">
                        <div>$ performance-monitor --analyze</div>
                        <div className="text-gray-400">Analyzing system performance...</div>
                        {progress > 25 && <div>⚡ CPU: Optimized for {deviceType}</div>}
                        {progress > 50 && <div>💾 Memory: Efficient allocation</div>}
                        {progress > 75 && <div>🌐 Network: High-speed sync</div>}
                        {progress === 100 && (
                          <div className="mt-4 p-3 bg-purple-900/30 rounded border border-purple-600">
                            <div className="text-purple-300">⚡ Performance optimized!</div>
                            <div className="text-xs text-gray-400 mt-1">
                              {deviceType} ready • Cross-platform compatibility ✓
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('demo.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-orange-100">
              <CardContent className="pt-6 text-center">
                <Globe className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('demo.features.universal')}</h3>
                <p className="text-sm text-gray-600">{t('demo.features.universalDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="pt-6 text-center">
                <Lock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('demo.features.secure')}</h3>
                <p className="text-sm text-gray-600">{t('demo.features.secureDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="pt-6 text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('demo.features.realtime')}</h3>
                <p className="text-sm text-gray-600">{t('demo.features.realtimeDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="pt-6 text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('demo.features.support')}</h3>
                <p className="text-sm text-gray-600">{t('demo.features.supportDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Creator Signature */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold text-lg text-orange-800 mb-2">
                Digital Horizon Lab
              </h3>
              <p className="text-orange-700 mb-4">
                <strong>Chograni Bilel</strong> • Marseille, France
              </p>
              <p className="text-sm text-orange-600 max-w-2xl mx-auto">
                {t('demo.creator.description')}
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Cross-Platform Expert
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Bitcoin Security
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  AI Development
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
