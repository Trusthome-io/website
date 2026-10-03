import { Button, type ButtonProps } from '@/components/ui/button';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { CTA_LABEL, funnelHref } from '@/lib/site';

type Props = Omit<ButtonProps, 'asChild'> & { placement: string; label?: string };

// Bouton principal du site : ouvre le tunnel de demande avec les UTM de l'emplacement.
export function FunnelButton({ placement, label = CTA_LABEL, variant = 'cta', size = 'xl', ...props }: Props) {
  return (
    <Button asChild variant={variant} size={size} {...props}>
      <TrackedLink href={funnelHref(placement)} intent={{ kind: 'funnel', placement }}>
        {label}
      </TrackedLink>
    </Button>
  );
}
