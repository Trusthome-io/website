export function Footer() {
  return (
    <footer className='border-t bg-card py-8 text-center'>
      <div className='container mx-auto'>
        <p className='text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} TrustHome. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
