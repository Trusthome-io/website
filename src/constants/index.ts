// Application constants

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Form validation patterns
export const REGEX_PATTERNS = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
  POSTAL_CODE: /^\d{5}$/,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  TESTIMONIALS: '/api/testimonials',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'trusthome-theme',
  FORM_DATA: 'trusthome-form-data',
  USER_PREFERENCES: 'trusthome-preferences',
} as const;

// Form field limits
export const FORM_LIMITS = {
  NAME: { MIN: 2, MAX: 50 },
  MESSAGE: { MIN: 10, MAX: 1000 },
  EMAIL: { MAX: 100 },
  PHONE: { MAX: 20 },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED: 'Ce champ est obligatoire',
  EMAIL_INVALID: 'Veuillez saisir une adresse email valide',
  PHONE_INVALID: 'Veuillez saisir un numéro de téléphone valide',
  NAME_TOO_SHORT: `Le nom doit contenir au moins ${FORM_LIMITS.NAME.MIN} caractères`,
  NAME_TOO_LONG: `Le nom ne peut pas dépasser ${FORM_LIMITS.NAME.MAX} caractères`,
  MESSAGE_TOO_SHORT: `Le message doit contenir au moins ${FORM_LIMITS.MESSAGE.MIN} caractères`,
  MESSAGE_TOO_LONG: `Le message ne peut pas dépasser ${FORM_LIMITS.MESSAGE.MAX} caractères`,
  GENERIC: 'Une erreur est survenue. Veuillez réessayer.',
  NETWORK: 'Problème de connexion. Vérifiez votre connexion internet.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Votre message a été envoyé avec succès !',
  NEWSLETTER_SUBSCRIBED: 'Inscription à la newsletter réussie !',
  FORM_SAVED: 'Vos informations ont été sauvegardées',
} as const;
