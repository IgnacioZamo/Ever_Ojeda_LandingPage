/**
 * DATOS GENERALES DEL SITIO
 * ------------------------------------------------------------------
 * Única fuente de verdad para nombre, título y datos de contacto.
 * Lo usan Header, Hero, Contact y Footer: si cambiás un dato acá,
 * se actualiza en toda la página.
 *
 * ⚠️ Los valores marcados como EJEMPLO deben reemplazarse por los reales.
 */
export const site = {
  name: 'Ever Ojeda',
  initials: 'EO',
  title: 'Lic. en Higiene y Seguridad en el Trabajo',
  shortTitle: 'Higiene y Seguridad',

  contact: {
    // EJEMPLO: correo profesional
    email: 'ever.ojeda@ejemplo.com',

    // EJEMPLO: número como se muestra en pantalla
    whatsappLabel: '+54 9 11 0000-0000',
    // EJEMPLO: mismo número solo con dígitos (código de país + área + número), para el enlace wa.me
    whatsappNumber: '5491100000000',

    // EJEMPLO: URL pública del perfil de LinkedIn
    linkedinUrl: 'https://www.linkedin.com/in/ever-ojeda',
    linkedinLabel: 'in/ever-ojeda',

    zone: 'Buenos Aires y alrededores · seguimiento remoto en todo el país',
    hours: 'Lunes a viernes, 8 a 18 h',
  },
} as const;

/** Enlace de WhatsApp con un mensaje inicial pensado para empresas. */
export const whatsappUrl = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
  'Hola Ever, te escribo desde la web. Quisiera una propuesta de Higiene y Seguridad para mi empresa.'
)}`;
