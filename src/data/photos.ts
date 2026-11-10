/**
 * FOTOS DE OBRAS Y VISITAS (sección #obras)
 * ------------------------------------------------------------------
 * ⚠️ Por ahora son ILUSTRACIONES DE EJEMPLO (campo `scene`).
 *
 * Para usar una foto real:
 *   1. Guardar la imagen en /public/obras/ (ej. public/obras/torre-norte.jpg).
 *      Recomendado: JPG o WEBP de ~1600px de ancho y menos de 300 KB.
 *   2. Agregar `src: '/obras/torre-norte.jpg'` y un `alt` descriptivo.
 *   Si hay `src`, se muestra la foto; si no, la ilustración `scene`.
 *
 * Campos:
 *   - title / place / date: texto que se ve sobre la foto.
 *   - category: se usa en los filtros (debe coincidir con `categories`).
 *   - size: "wide" ocupa 2 columnas, "tall" 2 filas, "normal" 1×1.
 */
export type Scene = 'obra' | 'andamio' | 'planta' | 'deposito' | 'capacitacion' | 'medicion';
export type Category = 'Construcción' | 'Industria' | 'Logística' | 'Capacitación';

export interface Photo {
  title: string;
  place: string;
  date: string;
  category: Category;
  scene: Scene;
  size?: 'normal' | 'wide' | 'tall';
  src?: string;
  alt?: string;
}

export const categories: Category[] = ['Construcción', 'Industria', 'Logística', 'Capacitación'];

export const photos: Photo[] = [
  { title: 'Control de izaje con grúa torre', place: 'Edificio de viviendas · Zona norte', date: 'Mar. 2026', category: 'Construcción', scene: 'obra', size: 'wide' },
  { title: 'Inspección de andamios', place: 'Obra en altura · 8 pisos', date: 'Feb. 2026', category: 'Construcción', scene: 'andamio', size: 'tall' },
  { title: 'Medición de ruido en prensas', place: 'Planta metalúrgica', date: 'Ene. 2026', category: 'Industria', scene: 'medicion' },
  { title: 'Relevamiento de planta', place: 'Industria química · Parque industrial', date: 'Dic. 2025', category: 'Industria', scene: 'planta' },
  { title: 'Señalización y racks', place: 'Centro de distribución', date: 'Nov. 2025', category: 'Logística', scene: 'deposito', size: 'wide' },
  { title: 'Capacitación en uso de EPP', place: 'Personal de planta · 40 asistentes', date: 'Oct. 2025', category: 'Capacitación', scene: 'capacitacion' },
  { title: 'Circulación de autoelevadores', place: 'Depósito logístico', date: 'Sep. 2025', category: 'Logística', scene: 'deposito' },
  { title: 'Charla de trabajo en altura', place: 'Obra · cuadrilla de estructura', date: 'Ago. 2025', category: 'Capacitación', scene: 'andamio' },
];
