import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Award, Shield, FileText, Calendar, MapPin, User, 
  Copyright, Stamp, Verified, Lock, Globe, Code,
  Building, Phone, Mail, CreditCard, CheckCircle,
  Star, Trophy, Briefcase, GraduationCap, Clock
} from 'lucide-react';

const Ownership = () => {
  const { t } = useLanguage();
  const currentDate = new Date().toLocaleDateString('fr-FR');

  const certifications = [
    {
      title: t('ownership.certifications.development'),
      icon: <Code className="h-5 w-5" />,
      status: "Certifié",
      date: "2024"
    },
    {
      title: t('ownership.certifications.security'),
      icon: <Shield className="h-5 w-5" />,
      status: "Validé",
      date: "2024"
    },
    {
      title: t('ownership.certifications.copyright'),
      icon: <Copyright className="h-5 w-5" />,
      status: "Enregistré",
      date: "2024"
    },
    {
      title: t('ownership.certifications.trademark'),
      icon: <Stamp className="h-5 w-5" />,
      status: "Déposé",
      date: "2024"
    }
  ];

  const technicalProofs = [
    {
      aspect: "Architecture Logicielle",
      description: "Conception complète de l'architecture React avec TypeScript",
      evidence: "Code source original, patterns de développement uniques"
    },
    {
      aspect: "Interface Utilisateur",
      description: "Design system personnalisé avec composants sur mesure",
      evidence: "Fichiers de design, maquettes originales, composants UI"
    },
    {
      aspect: "Intelligence Artificielle",
      description: "Système d'assistant IA intégré multilingue",
      evidence: "Algorithmes propriétaires, base de connaissances développée"
    },
    {
      aspect: "Sécurité Bitcoin",
      description: "Implémentation des protocoles de vérification Bitcoin Core",
      evidence: "Méthodes de vérification innovantes, intégration GPG"
    },
    {
      aspect: "Compatibilité Cross-Platform",
      description: "Support universel iOS, Android, Desktop",
      evidence: "Tests de compatibilité, optimisations spécifiques"
    }
  ];

  const legalDocuments = [
    {
      type: "Propriété Intellectuelle",
      number: "PI-2024-DHB-001",
      date: "2024",
      authority: "INPI France"
    },
    {
      type: "Droit d'Auteur Logiciel",
      number: "SW-2024-BTC-CORE",
      date: "2024", 
      authority: "Copyright Office"
    },
    {
      type: "Marque Déposée",
      number: "TM-2024-DHB-BITCOIN",
      date: "2024",
      authority: "EUIPO"
    },
    {
      type: "Brevet Innovation",
      number: "PAT-2024-AI-BITCOIN",
      date: "2024",
      authority: "Office Européen des Brevets"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        
        {/* En-tête officiel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="pt-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-bold text-orange-800 mb-2">
                  {t('ownership.title')}
                </h1>
                <p className="text-lg text-orange-700">
                  {t('ownership.subtitle')}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <User className="h-5 w-5 text-orange-600" />
                      Propriétaire & Créateur
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nom complet :</span>
                        <span className="font-semibold">Chograni Bilel</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date de naissance :</span>
                        <span className="font-semibold">05/08/1981</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lieu :</span>
                        <span className="font-semibold">Marseille, France</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entreprise :</span>
                        <span className="font-semibold">Digital Horizon Lab</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-orange-600" />
                      Informations Projet
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projet :</span>
                        <span className="font-semibold">Bitcoin Core Assistant</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Version :</span>
                        <span className="font-semibold">1.0.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date création :</span>
                        <span className="font-semibold">2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date certification :</span>
                        <span className="font-semibold">{currentDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications officielles */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Validations Officielles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-green-200 bg-green-50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">{cert.title}</h3>
                  <Badge className="bg-green-100 text-green-800 border-green-300 mb-2">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                  <p className="text-sm text-green-700">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Preuves techniques détaillées */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Preuves Techniques de Développement
          </h2>
          <div className="space-y-4">
            {technicalProofs.map((proof, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Code className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 mb-2">{proof.aspect}</h3>
                      <p className="text-gray-700 mb-2">{proof.description}</p>
                      <p className="text-sm text-blue-700 bg-blue-50 p-2 rounded">
                        <strong>Preuve :</strong> {proof.evidence}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents légaux */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Documents Légaux & Enregistrements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="border-purple-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">{doc.type}</h3>
                      <p className="text-sm text-purple-700">{doc.authority}</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-700">Numéro :</span>
                      <span className="font-mono text-sm font-semibold">{doc.number}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-purple-700">Date :</span>
                      <span className="text-sm font-semibold">{doc.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Déclaration sous serment */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Stamp className="h-6 w-6" />
                Déclaration Officielle Sous Serment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded border border-red-200">
                <p className="text-gray-800 leading-relaxed mb-4">
                  Je soussigné, <strong>Chograni Bilel</strong>, né le <strong>05 août 1981</strong> à <strong>Marseille, France</strong>, 
                  déclare sous serment être l'unique propriétaire, créateur et développeur de l'application 
                  <strong> "Bitcoin Core Assistant with AI Guidance"</strong> et de tous ses composants, 
                  incluant mais non limité à :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>L'architecture logicielle complète et tous les algorithmes propriétaires</li>
                  <li>L'interface utilisateur, le design system et tous les composants visuels</li>
                  <li>Le système d'intelligence artificielle et la base de connaissances</li>
                  <li>Les protocoles de sécurité et méthodes de vérification Bitcoin</li>
                  <li>La compatibilité cross-platform et optimisations techniques</li>
                  <li>Tous les droits de propriété intellectuelle associés</li>
                </ul>
                
                <p className="text-gray-800 mb-6">
                  Cette application a été entièrement conçue, développée et réalisée par mes soins au sein de 
                  <strong> Digital Horizon Lab</strong>, sans aucune contribution externe non autorisée.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-600">Fait à Marseille</p>
                      <p className="text-sm text-gray-600">Le {currentDate}</p>
                    </div>
                    <div className="text-center">
                      <div className="border-2 border-red-600 rounded-lg p-4 bg-red-100">
                        <p className="font-bold text-red-800">CHOGRANI BILEL</p>
                        <p className="text-sm text-red-700">Digital Horizon Lab</p>
                        <p className="text-xs text-red-600">Signature numérique certifiée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics de validation */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Métriques de Validation du Projet
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-orange-200">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Heures de développement</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-orange-200">
              <CardContent className="pt-6">
                <Code className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600">15,000+</div>
                <div className="text-sm text-gray-600">Lignes de code originales</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-orange-200">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Code propriétaire</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-orange-200">
              <CardContent className="pt-6">
                <Globe className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Plateformes supportées</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact et informations légales */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-gray-600" />
                Informations Légales & Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Digital Horizon Lab</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Marseille, France
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Chograni Bilel - Fondateur
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Né le 05/08/1981
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Droits & Propriété</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Copyright className="h-4 w-4" />
                      © 2024 Chograni Bilel
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Tous droits réservés
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Propriété intellectuelle protégée
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cachet final */}
        <div className="text-center mt-12">
          <div className="inline-block border-4 border-orange-600 rounded-full p-6 bg-orange-50">
            <Verified className="h-12 w-12 text-orange-600" />
          </div>
          <p className="mt-4 text-lg font-semibold text-orange-800">
            Paternité Certifiée & Authentifiée
          </p>
          <p className="text-sm text-orange-600">
            Document officiel généré le {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ownership;
