import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Languages className="h-4 w-4 text-gray-600" />
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-orange-600 hover:bg-orange-700' : ''}
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className={language === 'fr' ? 'bg-orange-600 hover:bg-orange-700' : ''}
      >
        FR
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={language === 'es' ? 'bg-orange-600 hover:bg-orange-700' : ''}
      >
        ES
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('de')}
        className={language === 'de' ? 'bg-orange-600 hover:bg-orange-700' : ''}
      >
        DE
      </Button>
    </div>
  );
}
