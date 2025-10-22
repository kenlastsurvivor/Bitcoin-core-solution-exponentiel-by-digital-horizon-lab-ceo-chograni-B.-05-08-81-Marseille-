import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { Bitcoin, Download, Shield, MessageCircle, CreditCard, Play, BookOpen, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('nav.home'), icon: Bitcoin },
    { href: '/downloads', label: t('nav.downloads'), icon: Download },
    { href: '/verification', label: t('nav.verification'), icon: Shield },
    { href: '/chat', label: t('nav.chat'), icon: MessageCircle },
    { href: '/pricing', label: t('nav.pricing'), icon: CreditCard },
    { href: '/demo', label: t('nav.demo'), icon: Play },
    { href: '/docs', label: t('nav.docs'), icon: BookOpen },
    { href: '/ownership', label: t('nav.ownership'), icon: Award },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
            <Bitcoin className="h-8 w-8" />
            Bitcoin Core
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                variant={isActive(href) ? "default" : "ghost"}
                size="sm"
                asChild
                className={cn(
                  "gap-2",
                  isActive(href)
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "text-gray-600 hover:text-orange-600"
                )}
              >
                <Link to={href}>
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <div className="flex flex-col gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Button
                  key={href}
                  variant={isActive(href) ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    "justify-start gap-2",
                    isActive(href)
                      ? "bg-orange-600 text-white"
                      : "text-gray-600"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to={href}>
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                </Button>
              ))}
              <div className="pt-2 mt-2 border-t border-orange-100">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
