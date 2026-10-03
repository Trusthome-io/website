import { cn } from '@/lib/utils';

// Logo temporaire redessiné en SVG (#28), sans « Sous location & Conciergerie ».
// À remplacer par le fichier vectoriel définitif du graphiste.
export function LogoMark({ className, tone = 'brand' }: { className?: string; tone?: 'brand' | 'white' }) {
  return (
    <svg
      viewBox="2 0 105 66"
      aria-hidden="true"
      className={cn('h-8 w-auto', tone === 'white' ? 'fill-white' : 'fill-brand', className)}
    >
      <path d="M42.5 13.5 50.5 21.5 37.5 34.5 55 52V64H39.5V52L30.5 43.5 21 53V64H4V52Z" />
      <path d="M54.5 26.5 46.5 34.5 64 52V64H80V52L68.5 40.5 73 36 89 52V64H105V52L54.5 2 46.75 9.75 65 28 60.5 32.5Z" />
      <path d="M27 54.9h2.8v2.8H27zM30.9 54.9h2.8v2.8h-2.8zM27 58.8h2.8v2.8H27zM30.9 58.8h2.8v2.8h-2.8z" />
    </svg>
  );
}

export function Logo({ className, tone = 'brand' }: { className?: string; tone?: 'brand' | 'white' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark tone={tone} />
      <span
        className={cn(
          'font-logo text-xl font-semibold tracking-wide',
          tone === 'white' ? 'text-white' : 'text-brand',
        )}
      >
        TRUSTHOME
      </span>
    </span>
  );
}
