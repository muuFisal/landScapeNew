import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@/components/ui/Button';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="section-space pt-40 lg:pt-56">
      <div className="container-shell text-center">
        <h1 className="font-display text-5xl font-semibold text-ink-900">404</h1>
        <p className="mt-4 text-lg text-ink-500">{t('notFound.description')}</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink to="/">{t('common.backHome')}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
