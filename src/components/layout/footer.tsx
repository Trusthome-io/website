import Link from 'next/link';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-headline font-bold text-primary">TrustHome</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              La solution de gestion locative professionnelle qui garantit vos loyers et simplifie votre vie de propriétaire.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Clichy, Hauts-de-Seine</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#storytelling" className="text-muted-foreground hover:text-primary transition-colors">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Avantages
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Informations légales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Protection des données (RGPD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <a href="tel:0781685556" className="text-muted-foreground hover:text-primary transition-colors">
                    07 81 68 55 56
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <a href="mailto:ajithanmoorthy@outlook.fr" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    ajithanmoorthy@outlook.fr
                  </a>
                </div>
              </li>
              <li>
                <Link href="#contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Formulaire de contact →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} TrustHome. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>🇫🇷 Service basé en France</span>
              <span className="hidden md:inline">•</span>
              <span>Conforme RGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
