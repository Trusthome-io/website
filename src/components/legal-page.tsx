import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:pt-40 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
