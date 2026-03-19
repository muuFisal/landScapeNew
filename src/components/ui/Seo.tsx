import { useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';

export function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  const { settings } = useSettings();

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalHref = `${origin}${path}`;
    
    const dynamicTitle = settings?.name ? title.replace('MDO Landscape', settings.name) : title;
    const dynamicDesc = description !== 'undefined' ? description : (settings?.meta_desc || '');
    
    document.title = dynamicTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta('description', dynamicDesc);
    setMeta('og:title', dynamicTitle, true);
    setMeta('og:description', dynamicDesc, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalHref, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', dynamicTitle);
    setMeta('twitter:description', dynamicDesc);

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
  }, [description, path, title]);

  return null;
}
