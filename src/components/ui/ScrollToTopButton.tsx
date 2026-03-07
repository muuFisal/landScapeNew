import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-5 left-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-white shadow-card transition-all duration-700 hover:scale-110 active:scale-95',
        'border border-white/10 backdrop-blur-md',
        'dark:bg-surface-strong dark:text-white',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-y-1" />
    </button>
  );
}
