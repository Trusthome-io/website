export function Footer() {
  return (
    <footer className="py-8 text-center bg-card border-t">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TrustHome. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
