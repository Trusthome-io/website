import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="container max-w-3xl py-14 md:py-20 [&_a]:text-brand [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-muted-foreground">
          <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
