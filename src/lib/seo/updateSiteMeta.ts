import type { SettingsData } from '@/types/settings';

export function updateSiteMeta({
  settings,
  pageTitle,
  pageDesc,
  pagePath,
}: {
  settings?: SettingsData;
  pageTitle?: string;
  pageDesc?: string;
  pagePath?: string;
}) {
  const setMeta = (name: string, content: string, property = false) => {
    if (!content) return;
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(property ? 'property' : 'name', name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  const siteName = settings?.name || settings?.title || 'Landscape Studio';
  const siteDesc = settings?.meta_desc || settings?.desc || 'Landscape Studio';
  const metaImage = settings?.media?.selected_logo || settings?.media?.logo || settings?.media?.favicon || '';
  const metaKeywords = settings?.meta_key || '';

  let finalTitle = siteName;
  if (pageTitle) {
    let cleanTitle = pageTitle.replace('MDO Landscape', siteName).replace('VerdeScape', siteName);
    finalTitle = cleanTitle.includes(siteName) ? cleanTitle : `${cleanTitle} | ${siteName}`;
  }
  document.title = finalTitle;

  const finalDesc = pageDesc && pageDesc !== 'undefined' ? pageDesc : siteDesc;
  setMeta('description', finalDesc);

  if (metaKeywords) {
    setMeta('keywords', metaKeywords);
  }

  if (settings?.media?.favicon) {
    let iconLink = document.head.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!iconLink) {
      iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      document.head.appendChild(iconLink);
    }
    iconLink.href = settings.media.favicon;
  }

  setMeta('og:title', finalTitle, true);
  setMeta('og:description', finalDesc, true);
  setMeta('og:type', 'website', true);
  
  if (pagePath) {
    const origin = window.location.origin;
    const canonicalHref = `${origin}${pagePath.startsWith('/') ? pagePath : '/' + pagePath}`;
    setMeta('og:url', canonicalHref, true);

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
  }

  if (metaImage) {
    setMeta('og:image', metaImage, true);
    setMeta('twitter:image', metaImage);
  }
  
  setMeta('twitter:card', metaImage ? 'summary_large_image' : 'summary');
  setMeta('twitter:title', finalTitle);
  setMeta('twitter:description', finalDesc);
}
