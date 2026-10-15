// Configuración central del sitio UFA.
export const WHATSAPP_NUMBER = '5491163568535';

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_RESERVA = waLink(
  'Hola Marisa, quiero reservar un turno para mi perrito/a',
);
