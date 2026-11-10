/**
 * EMPRESAS DEL CARRUSEL
 * ------------------------------------------------------------------
 * ⚠️ Son empresas de EJEMPLO. Para usar las reales:
 *   - name / sector: nombre comercial y rubro.
 *   - color: color principal de la marca (se ve al pasar el mouse).
 *   - mark: forma del ícono de ejemplo (ver `marks` en LogoCarousel.astro).
 * Más adelante se puede agregar un campo `logo` con la ruta a un SVG/PNG
 * real en /public/logos y mostrarlo en lugar del ícono generado.
 */
export type Mark = 'triangle' | 'circle' | 'hex' | 'drop' | 'bolt' | 'leaf' | 'gear' | 'anchor';

export interface Company {
  name: string;
  sector: string;
  color: string;
  mark: Mark;
}

export const companies: Company[] = [
  { name: 'ANDES', sector: 'Constructora', color: '#E2702B', mark: 'triangle' },
  { name: 'Paraná', sector: 'Logística', color: '#1F6FD1', mark: 'circle' },
  { name: 'Molinos Sur', sector: 'Alimentos', color: '#D69A12', mark: 'leaf' },
  { name: 'PETROLAR', sector: 'Energía', color: '#D7263D', mark: 'bolt' },
  { name: 'Ferrovial Norte', sector: 'Metalúrgica', color: '#5B6CD6', mark: 'gear' },
  { name: 'Química Litoral', sector: 'Industria química', color: '#8A4FD0', mark: 'hex' },
  { name: 'AguaPura', sector: 'Bebidas', color: '#0E9BC7', mark: 'drop' },
  { name: 'Puerto Austral', sector: 'Terminal portuaria', color: '#0F7A5C', mark: 'anchor' },
];
