# Wireframe textual — Home UFA (v1, borrador)

> **Estado:** puntapié inicial. Todo iterable. Nada definitivo.
> **Fuente de contenido:** `Relevamiento web UFA (Respuestas).csv` + doc estratégico.
> **Estructura:** landing de una sola página (mobile-first). Secciones numeradas de arriba hacia abajo.
> **Fotos:** hero = `13.jpg` (provisorio, a validar). Galería = 17 fotos optimizadas WebP (pendiente).
> **Contacto:** WhatsApp (único canal). Sin precios ni horarios en la web.

---

## 0. `<head>` (SEO + meta)

- **Title:** `UFA · Una Forma Amable — Peluquería Canina en Paraná`
- **Meta description (borrador):** `Peluquería canina en Paraná con 35 años de oficio. Trato familiar, amoroso y sin jaulas. Viejitos, cachorros y perritos con miedo, bienvenidos. Consultanos por WhatsApp.`
- **OG image:** foto hero (`13.jpg`, provisorio).

---

## 1. Header (sticky, siempre visible)

- **Izquierda:** logo UFA (Marisa tiene logo — pedir archivo).
- **Centro/derecha (desktop):** links de ancla → `Marisa` · `Servicios` · `La diferencia` · `Galería` · `Opiniones` · `Preguntas` · `Contacto`
- **CTA fijo:** botón `WhatsApp` (color contrastante, siempre visible).
- **Mobile:** hamburguesa + CTA WhatsApp visible.

---

## 2. Hero (pantalla completa)

- **Fondo:** `13.jpg` (1800×1200, Marisa trabajando — provisorio, a validar si queda).
- **Headline (grande):** `Increíble lo que logra.`
- **Sub (mediano):** `U.F.A. — Una forma amable… de vincularnos.`
- **Apoyo (chico):** `Peluquería canina en Paraná · 35 años de oficio · trato familiar y sin jaulas.`
- **CTAs:**
  - Primario → `Reservar por WhatsApp`
  - Secundario → `Conocer los servicios`
- **Nota:** el hero vende *confianza*, no estética. La foto debe mostrar vínculo (Marisa + perrito), no solo un corte.

---

## 3. Tira de confianza (strip, 3–4 datos)

Fila horizontal con íconos simples:

1. `35 años de oficio`
2. `Sin bozales · Sin jaulas`
3. `Especialidad en viejitos y cachorros`
4. `Paraná · traslados y domicilios`

---

## 4. Sobre Marisa / Filosofía UFA (`#marisa`)

- **Título:** `No es solo peluquería. Es vínculo.`
- **Texto (borrador, a refinar con Marisa):**
  > "Hace 35 años que trabajo con perritos como si fueran de mi familia — porque para sus dueños, lo son. En UFA no hay jaulas ni apuros: hay camitas cómodas, agua fresca, música suave y todo el tiempo que cada bichito necesite para confiar."
- **Foto:** Marisa trabajando (retrato cálido).
- **Firma:** `Marisa · UFA Paraná`
- **Cita destacada (del audio):** `"Es como tener la médica de cabecera."`

---

## 5. Servicios (`#servicios`)

- **Título:** `Servicios`
- **Aclaración visible:** `Los precios se consultan por WhatsApp según cada perrito.`
- **Grilla de cards (sin precios):**
  1. Baño
  2. Corte
  3. Deslanado
  4. Spa Canino
  5. Corte de uñas
  6. Higiene y depilado de oídos
  7. Vaciado de sacos perianales
  8. Traslado
  9. Domicilios
  10. Observación e informe del estado general + asesoramiento
- **Cada card:** nombre + 1 línea descriptiva (a redactar) + link `Consultar →` (WhatsApp con mensaje pre-llenado por servicio — detalle técnico a implementar).
- **CTA cierre sección:** `Contanos de tu perrito por WhatsApp`

---

## 6. La diferencia UFA (`#diferencia`)

> Esta es la sección PVU. Lo que la competencia no puede copiar: el *cómo*.

- **Título:** `Cuidado y respeto, en cada detalle.`
- **Columna "Lo que NO hacemos":**
  - Sin bozales, cogoteras ni mordazas.
  - Sin jaulas para la espera (camitas cómodas).
  - Sin apuros (turnos espaciados para que nadie espere ansioso).
- **Columna "Lo que SÍ hacemos":**
  - Shampoo y crema diluidos en agua calientita (sin contrastes incómodos).
  - Masajes relajantes (aceite de tea tree en algunos casos).
  - Baños de inmersión cuando lo toleran.
  - Movimientos suaves, silencio y música de mantras/relajación.
  - Ambiente cálido, agua fresca y lugar de descanso siempre disponibles.
- **Cierre:** `"Trabajando con amor, respeto y confianza se logra la total colaboración de nuestro amigo." — Marisa`

---

## 7. Especialidades (sub-bloque o cards)

- **Título:** `En buenas manos, sobre todo ellos.`
- **Cards:**
  - Perritos viejitos
  - Cachorros
  - Perritos con miedo o maltrato previo
  - Convalecientes o con problemas de salud
  - Todas las razas y tamaños (preferencia: pequeños y medianos)
- **Nota:** esta sección habla directo al público objetivo (dueños que ven al perro como familia y buscan seguridad, no precio).

---

## 8. Galería (`#galeria`)

- **Título:** `Antes y después`
- **Formato:** grilla masonry o carrusel (a decidir en diseño). Todas las fotos optimizadas WebP + `srcset`.
- **Filtros simples (opcional v2):** `Baño` · `Corte` · `Spa`.
- **Nota:** material provisto por Marisa (Drive/IG). Respetar consentimiento de dueños.

---

## 9. Opiniones / Testimonios (`#opiniones`)

- **Título:** `Lo que dicen las familias`
- **Estado:** ✅ 14 testimonios reales (`borrador/testimonios.csv`, 25/9–1/10/2026). Mayoría "cliente histórico". 9 con video en Drive (links en el CSV — descargar y alojar al implementar).
- **Hallazgo clave:** la palabra dominante es **CONFIANZA** (~10/14), seguida de **AMOR/CARIÑO**. El copy de la web debe apoyarse en estas dos palabras, no en "belleza" ni "estética".
- **Estructura:** carrusel de cards con `frase destacada + nombre del perrito + foto/video`.
- **Destacados propuestos (historias con nombre propio):**
  - **Betún** (caniche toy, 11 años, cliente hace 10): *"Es con la única peluquera que dejo a Betún con confianza y tranquilidad… a veces son 4 horas de su trabajo para desanudarlo rulito por rulito."* — Andrea Torchia. (Viejito + difícil + dedicación extrema. Historia estrella.)
  - **Luna** (miedo a todo → confianza y amor): *"Marisa se ganó su confianza y amor gracias a lo excelente que es."* — Juanma y Vale. (Valida la especialidad en miedosos.)
  - **Fini** (Bichón Frisé, 12 años, desde cachorrita): *"UFA es mucho más que una peluquería canina: es un lugar donde FINI está cuidada, querida y en las mejores manos… parte de nuestra familia."* (Fidelidad de por vida.)
  - **Pepa y Simón:** *"Te reciben con besos y mucha alegría."* — María Rosa. (Valida el "¡no se quieren ir de acá!")
  - **Tina:** *"Cuidado integral… No es solo higiene y estética. Un mimo para mascota y dueñes."* — Adriana Beade. (Diferencial en una frase.)
- **Resto (frases cortas para cards secundarias):** "Delicadeza" (Mumy) · "La mejor peluquería canina del mundo" (Cala) · "excelencia" (Beto Oliver) · "LA MEJOR" (Junior) · "Confianza plena" (Alma/Mía) · "Responsabilidad, confianza y amor" (Bianca).
- **Nota técnica:** los 9 videos de Drive hay que descargarlos, comprimirlos y alojarlos (o embeber). Evaluar peso/formato en etapa de implementación.
- **CTA:** `¿Tu perrito ya pasó por UFA? Contanos tu experiencia →` (link al Forms de testimonios — Opción A, pendiente).

---

## 10. Preguntas frecuentes (`#preguntas`)

> Las 9 preguntas ya las dio Marisa en el relevamiento. Respuestas a redactar con ella.

1. ¿Puedo quedarme a esperarlo?
2. ¿Cuánto tiempo tarda el servicio?
3. ¿Se le puede cortar el pelo sin bañarlo?
4. ¿Puedo saber el precio exacto antes de realizar el trabajo?
5. ¿Puedo llevar todos mis perros juntos?
6. ¿Cada cuánto es recomendable bañarlos/as?
7. ¿Cada cuánto es recomendable el mantenimiento del corte?
8. ¿Cada cuánto se cortan las uñas?
9. ¿Es recomendable darles algo de comer antes de la sesión?
- **Formato:** acordeón (pregunta + respuesta desplegable).
- **CTA cierre:** `¿Otra duda? Escribinos por WhatsApp`

---

## 11. Contacto / Reservas (`#contacto`)

- **Título:** `Reservá el turno de tu perrito`
- **CTA grande:** botón `WhatsApp` (mensaje pre-llenado: *"Hola Marisa, quiero reservar un turno para mi perrito/a…"*).
- **Datos:**
  - Zona: Paraná (traslados y domicilios según el caso).
  - Atención: en local propio y a domicilio.
  - Sin horarios publicados (coordinar por WhatsApp).
- **Redes:** Instagram + Facebook (links, los gestiona Marisa).
- **Nota:** NO hay formulario de contacto con backend en v1 — todo va a WhatsApp (simple, sin Supabase todavía).

---

## 12. Footer

- Logo UFA (chico).
- Links de ancla (mismos del header).
- Instagram + Facebook.
- Línea: `© UFA · Una Forma Amable — Paraná, Entre Ríos.`
- Crédito discreto (opcional): `Hecho con ♥ por Ale`.

---

## Decisiones técnicas derivadas (para la etapa de stack)

- [ ] Landing estática de 1 página (ideal para v1 rápida; Supabase recién en v2 si hace falta: testimonios dinámicos, turnos online).
- [ ] WhatsApp deep-links con mensajes pre-llenados por servicio.
- [ ] Imágenes WebP + `srcset` responsivo + `lazy loading`.
- [ ] Paleta: *cálido y hogareño, tierno y colorido* (a definir tokens en etapa de diseño).
- [ ] Tipografías: redondeadas/cálidas (a definir; evitar frías corporativas).
- [ ] SEO local: `Peluquería canina Paraná` en title/H1/meta + datos estructurados `LocalBusiness` (a implementar).

---

*Próximo paso: validar estructura y copy con Ale → iterar → definir stack.*
