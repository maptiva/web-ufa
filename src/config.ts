// Configuración central del sitio UFA.
// TODO: reemplazar WHATSAPP_NUMBER con el número real de Marisa.
// Formato: código país + código área + número, sin "+" ni espacios ni guiones.
// Ej. Paraná: 549343XXXXXXX
export const WHATSAPP_NUMBER = '5490000000000';

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_RESERVA = waLink(
  'Hola Marisa, quiero reservar un turno para mi perrito/a 🐾',
);
