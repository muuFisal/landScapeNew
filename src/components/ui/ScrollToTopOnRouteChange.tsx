import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as any // Use instant to avoid weird flickering, but the request says "smooth" for scroll-to-top button. Usually route change should be instant top.
    });
  }, [pathname]);

  return null;
}
