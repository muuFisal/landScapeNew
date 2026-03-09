import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        const targetId = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(targetId) ?? document.querySelector(hash);

        if (target) {
          target.scrollIntoView({ block: 'start' });
          return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}
