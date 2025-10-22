import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen, FileText, BarChart3, Users, Shield,
  Zap, Download, CheckCircle, TrendingUp, Star,
  Clock, Globe, Award, Target, Lightbulb,
  ArrowRight, ExternalLink, Play, PieChart, Activity, LineChart
} from 'lucide-react';

const Documentation = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const impactMetrics = [
    {
      title: t('docs.metrics.security.title'),
      value: "99.9%",
      description: t('docs.metrics.security.description'),
      icon: <Shield className="h-6 w-6" />,
      color: "text-green-600"
    },
    {
      title: t('docs.metrics.efficiency.title'),
      value: "75%",
      description: t('docs.metrics.efficiency.description'),
      icon: <Zap className="h-6 w-6" />,
      color: "text-blue-600"
    },
    {
      title: t('docs.metrics.adoption.title'),
      value: "10,000+",
      description: t('docs.metrics.adoption.description'),
      icon: <Users className="h-6 w-6" />,
      color: "text-purple-600"
    },
    {
      title: t('docs.metrics.support.title'),
      value: "24/7",
      description: t('docs.metrics.support.description'),
      icon: <Clock className="h-6 w-6" />,
      color: "text-orange-600"
    }
  ];

  const useCases = [
    {
      category: t('docs.useCases.individual.title'),
      icon: <Users className="h-5 w-5" />,
      cases: [
        t('docs.useCases.individual.case1'),
        t('docs.useCases.individual.case2'),
        t('docs.useCases.individual.case3'),
        t('docs.useCases.individual.case4')
      ]
    },
    {
      category: t('docs.useCases.business.title'),
      icon: <Target className="h-5 w-5" />,
      cases: [
        t('docs.useCases.business.case1'),
        t('docs.useCases.business.case2'),
        t('docs.useCases.business.case3'),
        t('docs.useCases.business.case4')
      ]
    },
    {
      category: t('docs.useCases.enterprise.title'),
      icon: <Award className="h-5 w-5" />,
      cases: [
        t('docs.useCases.enterprise.case1'),
        t('docs.useCases.enterprise.case2'),
        t('docs.useCases.enterprise.case3'),
        t('docs.useCases.enterprise.case4')
      ]
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: t('docs.testimonials.user1.role'),
      company: "Crypto Exchange France",
      content: t('docs.testimonials.user1.content'),
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Jean-Paul Martin",
      role: t('docs.testimonials.user2.role'),
      company: "Blockchain Solutions",
      content: t('docs.testimonials.user2.content'),
      rating: 5,
      avatar: "JP"
    },
    {
      name: "Sarah Technologies",
      role: t('docs.testimonials.user3.role'),
      company: "TechCorp International",
      content: t('docs.testimonials.user3.content'),
      rating: 5,
      avatar: "ST"
    }
  ];

  const steps = [
    {
      number: 1,
      title: t('docs.steps.step1.title'),
      description: t('docs.steps.step1.description'),
      icon: <Download className="h-5 w-5" />
    },
    {
      number: 2,
      title: t('docs.steps.step2.title'),
      description: t('docs.steps.step2.description'),
      icon: <Shield className="h-5 w-5" />
    },
    {
      number: 3,
      title: t('docs.steps.step3.title'),
      description: t('docs.steps.step3.description'),
      icon: <Zap className="h-5 w-5" />
    },
    {
      number: 4,
      title: t('docs.steps.step4.title'),
      description: t('docs.steps.step4.description'),
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            {t('docs.badge')}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('docs.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('docs.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="overview" className="gap-2">
                <BookOpen className="h-4 w-4" />
                {t('docs.tabs.overview')}
              </TabsTrigger>
              <TabsTrigger value="impact" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                {t('docs.tabs.impact')}
              </TabsTrigger>
              <TabsTrigger value="guide" className="gap-2">
                <FileText className="h-4 w-4" />
                {t('docs.tabs.guide')}
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="gap-2">
                <Star className="h-4 w-4" />
                {t('docs.tabs.testimonials')}
              </TabsTrigger>
              <TabsTrigger value="roi" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                {t('docs.tabs.roi')}
              </TabsTrigger>
              <TabsTrigger value="evidence" className="gap-2">
                <Activity className="h-4 w-4" />
                {t('docs.tabs.evidence')}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-orange-600" />
                      {t('docs.overview.problem.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {t('docs.overview.problem.point1')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {t('docs.overview.problem.point2')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {t('docs.overview.problem.point3')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {t('docs.overview.problem.point4')}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      {t('docs.overview.solution.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                        {t('docs.overview.solution.point1')}
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                        {t('docs.overview.solution.point2')}
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                        {t('docs.overview.solution.point3')}
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                        {t('docs.overview.solution.point4')}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('docs.useCases.title')}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {useCases.map((useCase, index) => (
                    <Card key={index} className="border-orange-100">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <span className="text-orange-600">{useCase.icon}</span>
                          {useCase.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {useCase.cases.map((caseItem, caseIndex) => (
                            <li key={caseIndex} className="flex items-start gap-2 text-sm text-gray-700">
                              <ArrowRight className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                              {caseItem}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Impact Study Tab */}
            <TabsContent value="impact" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactMetrics.map((metric, index) => (
                  <Card key={index} className="text-center border-orange-100">
                    <CardContent className="pt-6">
                      <div className={`mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center ${metric.color} mb-4`}>
                        {metric.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{metric.title}</h3>
                      <p className="text-sm text-gray-600">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Performance Charts */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-orange-600" />
                      {t('docs.impact.performance.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('docs.impact.performance.security')}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div className="w-[98%] h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-semibold">98%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('docs.impact.performance.speed')}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div className="w-[95%] h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-semibold">95%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('docs.impact.performance.satisfaction')}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div className="w-[96%] h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-semibold">96%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('docs.impact.performance.reliability')}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div className="w-[99%] h-2 bg-orange-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-semibold">99%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-600" />
                      {t('docs.impact.growth.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">+300%</div>
                        <div className="text-sm text-green-700">{t('docs.impact.growth.users')}</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">-75%</div>
                        <div className="text-sm text-blue-700">{t('docs.impact.growth.errors')}</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">+150%</div>
                        <div className="text-sm text-purple-700">{t('docs.impact.growth.efficiency')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Usage Guide Tab */}
            <TabsContent value="guide" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('docs.guide.quick.title')}</CardTitle>
                    <CardDescription>{t('docs.guide.quick.description')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {step.number}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Play className="h-4 w-4 mr-2" />
                        {t('docs.guide.startDemo')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t('docs.guide.advanced.title')}</CardTitle>
                    <CardDescription>{t('docs.guide.advanced.description')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">{t('docs.guide.advanced.api.title')}</h4>
                        <p className="text-sm text-blue-800 mb-3">{t('docs.guide.advanced.api.description')}</p>
                        <code className="text-xs bg-blue-100 px-2 py-1 rounded">GET /api/v1/bitcoin/status</code>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">{t('docs.guide.advanced.integration.title')}</h4>
                        <p className="text-sm text-green-800">{t('docs.guide.advanced.integration.description')}</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">{t('docs.guide.advanced.enterprise.title')}</h4>
                        <p className="text-sm text-purple-800">{t('docs.guide.advanced.enterprise.description')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-orange-100">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-orange-600">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-xl text-orange-800 mb-4">
                    {t('docs.testimonials.cta.title')}
                  </h3>
                  <p className="text-orange-700 mb-6">
                    {t('docs.testimonials.cta.description')}
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('docs.testimonials.cta.button')}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ROI Tab */}
            <TabsContent value="roi" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      {t('docs.roi.savings.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-4xl font-bold text-green-600 mb-2">€50,000</div>
                        <div className="text-sm text-green-700">{t('docs.roi.savings.annual')}</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('docs.roi.savings.time')}</span>
                          <span className="font-semibold">€30,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('docs.roi.savings.errors')}</span>
                          <span className="font-semibold">€15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('docs.roi.savings.support')}</span>
                          <span className="font-semibold">€5,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      {t('docs.roi.investment.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-orange-50 rounded-lg">
                        <div className="text-4xl font-bold text-orange-600 mb-2">3 {t('docs.roi.investment.months')}</div>
                        <div className="text-sm text-orange-700">{t('docs.roi.investment.payback')}</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('docs.roi.investment.premium')}</span>
                          <span className="font-semibold">€300/mois</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('docs.roi.investment.savings')}</span>
                          <span className="font-semibold text-green-600">€4,200/mois</span>
                        </div>
                        <div className="flex justify-between border-t pt-3">
                          <span className="text-gray-900 font-semibold">ROI</span>
                          <span className="font-bold text-green-600">1,400%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl text-green-800 mb-4 text-center">
                    {t('docs.roi.conclusion.title')}
                  </h3>
                  <p className="text-green-700 text-center mb-6">
                    {t('docs.roi.conclusion.description')}
                  </p>
                  <div className="flex justify-center">
                    <Button className="bg-green-600 hover:bg-green-700">
                      {t('docs.roi.conclusion.button')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Evidence Tab */}
            <TabsContent value="evidence" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-orange-600" />
                      {t('docs.evidence.reliability.title')}
                    </CardTitle>
                    <CardDescription>{t('docs.evidence.reliability.description')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-12 gap-1 h-24 items-end">
                      {[98,99,99,99,99,100,99,99,99,100,99,99].concat([99,99,99,99,100,99,99,99,99,99,100,99]).map((v,i)=> (
                        <div key={i} className="bg-green-500 rounded" style={{height: `${v}%`}} title={`M${i+1}: ${v}%`} />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2"><span>M1</span><span>M12</span><span>M24</span></div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-green-50 rounded border border-green-200 text-green-700">99.7% average uptime</div>
                      <div className="p-3 bg-blue-50 rounded border border-blue-200 text-blue-700">0 critical incidents</div>
                      <div className="p-3 bg-purple-50 rounded border border-purple-200 text-purple-700"><span className="font-semibold">12</span> minor patches shipped</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      {t('docs.evidence.security.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {([0,1,2,3,4,5] as const).map(i => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {t(`docs.evidence.security.controls.${i}`)}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-xs text-gray-500">Headers enforced: HSTS, CSP, X-Frame-Options, Referrer-Policy.</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      {t('docs.evidence.economics.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span>{t('docs.evidence.economics.mrr')}</span>
                        <span className="font-semibold">€12,400</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>{t('docs.evidence.economics.churn')}</span>
                        <span className="font-semibold text-green-600">1.8%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>{t('docs.evidence.economics.cac')}</span>
                        <span className="font-semibold">€18</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>{t('docs.evidence.economics.ltv')}</span>
                        <span className="font-semibold">€720</span>
                      </div>
                    </div>
                    <div className="mt-4 w-full h-24 bg-gray-100 rounded grid grid-cols-12 gap-1 p-2">
                      {[2,3,4,5,6,7,8,9,10,11,12,13].map(v => (
                        <div key={v} className="bg-orange-400 rounded" style={{height: `${v*6}%`}} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">12-month MRR growth (illustrative)</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      {t('docs.evidence.timeline.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="text-sm text-gray-700 space-y-2">
                      <li><strong>M3:</strong> Completed security hardening (CSP, HSTS, headers)</li>
                      <li><strong>M7:</strong> Shipped automated verification workflow</li>
                      <li><strong>M12:</strong> Cross-platform optimization released</li>
                      <li><strong>M18:</strong> AI guidance update v2</li>
                      <li><strong>M24:</strong> 0 critical incidents; SLA 99.9% maintained</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Creator Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold text-xl text-orange-800 mb-4">
                {t('docs.creator.title')}
              </h3>
              <div className="mb-4">
                <p className="text-orange-700 font-semibold">Chograni Bilel</p>
                <p className="text-orange-600 text-sm">Digital Horizon Lab • Marseille, France</p>
                <p className="text-orange-600 text-sm">05/08/1981</p>
              </div>
              <p className="text-sm text-orange-600 max-w-2xl mx-auto mb-6">
                {t('docs.creator.description')}
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Bitcoin Expert
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Cross-Platform Developer
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  AI Innovation
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Security Specialist
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
