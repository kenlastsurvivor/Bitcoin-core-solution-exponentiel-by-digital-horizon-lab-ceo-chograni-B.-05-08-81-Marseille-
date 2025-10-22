import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage, fallback to browser language or English
    const saved = localStorage.getItem('bitcoin-core-language') as Language;
    if (saved && saved in translations) return saved;

    const n = navigator.language.toLowerCase();
    const map: Record<string, Language> = {
      fr: 'fr', 'fr-fr': 'fr',
      es: 'es', 'es-es': 'es',
      de: 'de', 'de-de': 'de',
      zh: 'zh', 'zh-cn': 'zh', 'zh-hans-cn': 'zh',
      hi: 'hi', 'hi-in': 'hi',
      ar: 'ar', 'ar-sa': 'ar',
      pt: 'pt', 'pt-br': 'pt', 'pt-pt': 'pt',
      ru: 'ru', 'ru-ru': 'ru',
      ja: 'ja', 'ja-jp': 'ja',
      en: 'en', 'en-us': 'en', 'en-gb': 'en'
    };
    return map[n] || map[n.split('-')[0]] || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bitcoin-core-language', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');

    const resolve = (lang: Language) => {
      let cur: any = translations[lang];
      for (const key of keys) cur = cur?.[key];
      return cur;
    };

    const val = resolve(language) ?? resolve('en');
    return (typeof val === 'string' && val) ? val : path;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    const rtlLangs: Language[] = ['ar', 'fa', 'he'];
    document.documentElement.dir = rtlLangs.includes(language) ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
