import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ExportDestination } from '../types';
import { TRANSLATIONS, EXPORT_DESTINATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { 
  Globe, 
  Plane, 
  Ship, 
  MapPin, 
  ArrowUpRight, 
  RotateCw, 
  Layers, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Activity, 
  Compass, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface ExportGlobalMapProps {
  currentLang: Language;
  onOpenRfqForDestination: (dest: ExportDestination) => void;
}

// Geographic metadata for export corridors
interface GeoNode {
  id: string;
  code: string;
  flag: string;
  name: { fa: string; ar: string; en: string };
  city: { fa: string; ar: string; en: string };
  lat: number;
  lon: number;
  mode: 'air' | 'sea' | 'both';
  transitAir: string;
  transitSea: string;
  cargoType: { fa: string; ar: string; en: string };
  portSummary: string;
}

const DESTINATION_GEOS: GeoNode[] = [
  {
    id: 'uae',
    code: 'DXB / JEA',
    flag: '🇦🇪',
    name: { fa: 'امارات متحده عربی', ar: 'الإمارات العربية المتحدة', en: 'United Arab Emirates' },
    city: { fa: 'دبی و شارجه', ar: 'دبي والشارقة', en: 'Dubai & Sharjah' },
    lat: 25.2048,
    lon: 55.2708,
    mode: 'both',
    transitAir: '۲۴ ساعت',
    transitSea: '۳ روز',
    cargoType: { fa: 'فیله سوپر پرایم، روغن خالص، چرم', ar: 'فيليه ممتاز، زيت نقي، جلود', en: 'Prime Fillet, Pure Oil, Leather' },
    portSummary: 'DXB Cargo / Jebel Ali Port',
  },
  {
    id: 'qatar',
    code: 'DOH / HMD',
    flag: '🇶🇦',
    name: { fa: 'دولت قطر', ar: 'دولة قطر', en: 'State of Qatar' },
    city: { fa: 'دوحه', ar: 'الدوحة', en: 'Doha' },
    lat: 25.2854,
    lon: 51.5310,
    mode: 'both',
    transitAir: '۲۴ ساعت',
    transitSea: '۵ روز',
    cargoType: { fa: 'استیک فیله و راسته، پرهای فشن', ar: 'ستيك وفيليه، ريش الأزياء', en: 'Steaks & Fillet, Couture Plumes' },
    portSummary: 'Hamad Int Airport / Hamad Port',
  },
  {
    id: 'oman',
    code: 'MCT / SOH',
    flag: '🇴🇲',
    name: { fa: 'سلطنت عمان', ar: 'سلطنة عُمان', en: 'Sultanate of Oman' },
    city: { fa: 'مسقط و صحار', ar: 'مسقط وصحار', en: 'Muscat & Sohar' },
    lat: 23.5880,
    lon: 58.3829,
    mode: 'both',
    transitAir: '۳۶ ساعت',
    transitSea: '۴ روز',
    cargoType: { fa: 'گوشت بسته‌بندی، تخم بارور، روغن', ar: 'لحوم مبردة، بيض مخصب، زيت', en: 'Chilled Meat, Hatching Eggs, Oil' },
    portSummary: 'Muscat MCT / Sohar Port',
  },
  {
    id: 'kuwait-iraq',
    code: 'KWI / BSR',
    flag: '🇰🇼',
    name: { fa: 'کویت و عراق', ar: 'الكويت والعراق', en: 'Kuwait & Iraq' },
    city: { fa: 'کویت، بصره و اربیل', ar: 'الكويت والبصرة وأربيل', en: 'Kuwait City, Basra & Erbil' },
    lat: 29.8081,
    lon: 47.9183,
    mode: 'both',
    transitAir: '۴۸ ساعت',
    transitSea: '۳ روز',
    cargoType: { fa: 'گوشت منجمد، روغن مفاصل، جوجه', ar: 'لحوم مجمدة، زيت علاجي، كتاكيت', en: 'Frozen Carcass, Therapeutic Oil, Chicks' },
    portSummary: 'Kuwait KWI / Basra Um Qasr',
  },
  {
    id: 'turkey-europe',
    code: 'IST / MER',
    flag: '🇹🇷',
    name: { fa: 'ترکیه و شرق اروپا', ar: 'تركيا وأوروبا الشرقية', en: 'Turkey & Eurasia' },
    city: { fa: 'استانبول و مرسین', ar: 'إسطنبول ومرسين', en: 'Istanbul & Mersin' },
    lat: 41.0082,
    lon: 28.9784,
    mode: 'both',
    transitAir: '۳۶ ساعت',
    transitSea: '۷ روز',
    cargoType: { fa: 'چرم اشباع وت‌بلو، پرهای صنعتی، روغن', ar: 'جلود مدبوغة، ريش للسيارات، زيت', en: 'Wet Blue Leather, Plumes, Cosmetic Oil' },
    portSummary: 'Istanbul IST / Mersin Seaport',
  },
  {
    id: 'eurasia',
    code: 'SVO / LED',
    flag: '🇷🇺',
    name: { fa: 'روسیه و قزاقستان', ar: 'روسيا وكازاخستان', en: 'Russia & Kazakhstan' },
    city: { fa: 'مسکو و آلماتی', ar: 'موسكو وألماتي', en: 'Moscow & Almaty' },
    lat: 55.7558,
    lon: 37.6173,
    mode: 'air',
    transitAir: '۴۸ ساعت',
    transitSea: '۱۰ روز',
    cargoType: { fa: 'گوشت منجمد صنعتی، روغن بالک، چرم خام', ar: 'لحوم مجمدة، زيت بالجملة، جلود', en: 'Bulk Industrial Meat, Pharma Oil, Hides' },
    portSummary: 'Moscow Sheremetyevo / Saint Petersburg',
  },
];

// Origin Hub in Iran (Khorasan Agribusiness & Tehran Cargo Hub)
const ORIGIN_HUB = {
  id: 'iran-hub',
  name: {
    fa: 'مجتمع کشت و صنعت سلامت راشین (مبدأ مرکزی)',
    ar: 'مجمع سلامة راشين الزراعي الصناعي (المركز الرئيسي)',
    en: 'Salamat Rashin Agro-Industrial Hub (Origin)'
  },
  city: { fa: 'خراسان / فرودگاه امام خمینی تهران', ar: 'خراسان / مطار طهران الدولي', en: 'Khorasan / Tehran IKA Cargo' },
  lat: 35.6892,
  lon: 51.3890,
};

// Regional flat projection coordinate conversions (Europe, Middle East, Central Asia, Russia)
const MAP_BOUNDS = {
  lonMin: 5,
  lonMax: 82,
  latMin: 12,
  latMax: 63,
  width: 960,
  height: 560,
};

function projectToFlatMap(lat: number, lon: number): { x: number; y: number } {
  const { lonMin, lonMax, latMin, latMax, width, height } = MAP_BOUNDS;
  const clampedLon = Math.max(lonMin, Math.min(lonMax, lon));
  const clampedLat = Math.max(latMin, Math.min(latMax, lat));
  
  const x = ((clampedLon - lonMin) / (lonMax - lonMin)) * width;
  const y = ((latMax - clampedLat) / (latMax - latMin)) * height;
  return { x, y };
}

// 3D Orthographic projection for interactive globe
function projectToGlobe(
  lat: number, 
  lon: number, 
  centerLat: number, 
  centerLon: number, 
  radius: number,
  centerX: number,
  centerY: number
): { x: number; y: number; visible: boolean; z: number } {
  const phi = (lat * Math.PI) / 180;
  const lambda = (lon * Math.PI) / 180;
  const phi0 = (centerLat * Math.PI) / 180;
  const lambda0 = (centerLon * Math.PI) / 180;

  // Angular distance cos(c)
  const cosC = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0);
  
  const visible = cosC >= 0;
  
  const x = centerX + radius * Math.cos(phi) * Math.sin(lambda - lambda0);
  const y = centerY - radius * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0));
  
  return { x, y, visible, z: cosC };
}

export const ExportGlobalMap: React.FC<ExportGlobalMapProps> = ({
  currentLang,
  onOpenRfqForDestination,
}) => {
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(EXPORT_DESTINATIONS[0].id);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'globe'>('map');
  const [filterMode, setFilterMode] = useState<'all' | 'air' | 'sea'>('all');
  
  // 3D Globe state
  const [globeRotation, setGlobeRotation] = useState<number>(50); // centered over Middle East
  const [globeTilt, setGlobeTilt] = useState<number>(28);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; rot: number }>({ x: 0, rot: 50 });

  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const activeDestination = EXPORT_DESTINATIONS.find((d) => d.id === selectedDestinationId) || EXPORT_DESTINATIONS[0];
  const activeGeoNode = DESTINATION_GEOS.find((g) => g.id === selectedDestinationId) || DESTINATION_GEOS[0];
  const originFlat = projectToFlatMap(ORIGIN_HUB.lat, ORIGIN_HUB.lon);

  // Auto-rotation effect for 3D Globe
  useEffect(() => {
    if (!isAutoRotating || viewMode !== 'globe' || isDragging) return;
    const interval = setInterval(() => {
      setGlobeRotation((prev) => (prev + 0.35) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isAutoRotating, viewMode, isDragging]);

  // Handle globe mouse drag
  const handleGlobeMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartRef.current = { x: e.clientX, rot: globeRotation };
  };

  const handleGlobeMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    setGlobeRotation((dragStartRef.current.rot - deltaX * 0.5) % 360);
  };

  const handleGlobeMouseUp = () => {
    setIsDragging(false);
  };

  // Focus globe on destination
  const focusGlobeOnDestination = (geo: GeoNode) => {
    setSelectedDestinationId(geo.id);
    setGlobeRotation(geo.lon);
    setGlobeTilt(Math.max(15, Math.min(45, geo.lat)));
    setIsAutoRotating(false);
  };

  // Filtered nodes
  const visibleDestinations = DESTINATION_GEOS.filter((geo) => {
    if (filterMode === 'all') return true;
    if (filterMode === 'air') return geo.mode === 'air' || geo.mode === 'both';
    if (filterMode === 'sea') return geo.mode === 'sea' || geo.mode === 'both';
    return true;
  });

  return (
    <section id="export-network" className={`w-full border-b transition-colors duration-200 py-20 lg:py-28 ${
      isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-stone-50/50'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
              <Globe className="h-4 w-4 animate-spin-slow" />
              <span>INTERACTIVE GLOBAL CORRIDORS & LOGISTICS HUB</span>
            </div>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {t.exportSection.title}
            </h2>
            <p className={`pt-1 text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
            }`}>
              {t.exportSection.subtitle}
            </p>
          </div>

          {/* Interactive Controls & View Mode Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode: Map vs Globe */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 ${
              isDark ? 'border-white/10 bg-[#16181d]' : 'border-stone-200 bg-white shadow-xs'
            }`}>
              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Compass className="h-3.5 w-3.5" />
                <span>{currentLang === 'fa' ? 'نقشه کریدورها' : currentLang === 'ar' ? 'خريطة الممرات' : 'Corridors Map'}</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('globe')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'globe'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLang === 'fa' ? 'کره زمین سه‌بعدی' : currentLang === 'ar' ? 'الكرة ثلاثية الأبعاد' : '3D Globe'}</span>
              </button>
            </div>

            {/* Filter by cargo mode */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 text-xs ${
              isDark ? 'border-white/10 bg-[#16181d]' : 'border-stone-200 bg-white shadow-xs'
            }`}>
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterMode === 'all'
                    ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-stone-100 text-stone-950 font-bold'
                    : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {currentLang === 'fa' ? 'همه مسیرها' : currentLang === 'ar' ? 'الكل' : 'All'}
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('air')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterMode === 'air'
                    ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-stone-100 text-stone-950 font-bold'
                    : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Plane className="h-3.5 w-3.5 text-rose-500" />
                <span>{currentLang === 'fa' ? 'هوایی اکسپرس' : currentLang === 'ar' ? 'جوي سريع' : 'Air'}</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('sea')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterMode === 'sea'
                    ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-stone-100 text-stone-950 font-bold'
                    : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Ship className="h-3.5 w-3.5 text-sky-500" />
                <span>{currentLang === 'fa' ? 'دریایی ریفر' : currentLang === 'ar' ? 'بحري مبرد' : 'Sea'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Telemetry Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black block text-rose-600 dark:text-rose-400 leading-none">۶ کریدور مستقیم</span>
              <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'هاب‌های خلیج فارس، اوراسیا و اروپا' : 'Gulf, Eurasia & Europe Hubs'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <ThermometerSnowflake className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black block text-cyan-600 dark:text-cyan-400 leading-none">-18°C / +2°C</span>
              <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'پایش دما با دیتالاگر ماهواره‌ای' : 'IoT Real-Time Temperature Log'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black block text-emerald-600 dark:text-emerald-400 leading-none">۲۴-۴۸ ساعت</span>
              <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'تحویل اکسپرس فرودگاه به فرودگاه' : 'Airport-to-Airport Transit SLA'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black block text-amber-600 dark:text-amber-400 leading-none">۱۰۰٪ گواهی بهداشت</span>
              <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'دامپزشکی، حلال جهانی و CITES' : 'Halal, OIE & CITES Verified'}
              </span>
            </div>
          </div>
        </div>

        {/* MAIN VISUAL CANVAS: Interactive Regional Map or 3D Globe */}
        <div className={`relative overflow-hidden rounded-3xl border transition-all shadow-xl ${
          isDark 
            ? 'border-white/15 bg-gradient-to-b from-[#0b0d11] via-[#101318] to-[#0a0c10]' 
            : 'border-stone-200 bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white'
        }`}>
          
          {/* Ambient Map Glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-[radial-gradient(ellipse_at_60%_50%,rgba(190,18,60,0.22),transparent_70%)]" />

          {/* VIEW MODE 1: Regional Flight & Sea Corridors Map */}
          {viewMode === 'map' && (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[640px] select-none">
              
              {/* Map SVG Canvas */}
              <svg 
                viewBox={`0 0 ${MAP_BOUNDS.width} ${MAP_BOUNDS.height}`}
                className="w-full h-full object-cover"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Glowing Route Gradients */}
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e11d48" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#f43f5e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="routeActiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#be123c" stopOpacity="1" />
                    <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                  </linearGradient>

                  {/* Radial origin pulse */}
                  <radialGradient id="originPulseGlow">
                    <stop offset="0%" stopColor="#e11d48" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#9b111e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#9b111e" stopOpacity="0" />
                  </radialGradient>

                  {/* Filter Glow */}
                  <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Coordinate Graticule Grid */}
                <g opacity="0.12" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 3">
                  {[20, 30, 40, 50, 60].map((lat) => {
                    const y = projectToFlatMap(lat, MAP_BOUNDS.lonMin).y;
                    return (
                      <g key={`lat-${lat}`}>
                        <line x1="0" y1={y} x2={MAP_BOUNDS.width} y2={y} />
                        <text x="12" y={y - 4} fill="#94a3b8" fontSize="9" fontFamily="monospace">{lat}°N</text>
                      </g>
                    );
                  })}
                  {[20, 35, 50, 65, 80].map((lon) => {
                    const x = projectToFlatMap(MAP_BOUNDS.latMin, lon).x;
                    return (
                      <g key={`lon-${lon}`}>
                        <line x1={x} y1="0" x2={x} y2={MAP_BOUNDS.height} />
                        <text x={x + 4} y={MAP_BOUNDS.height - 8} fill="#94a3b8" fontSize="9" fontFamily="monospace">{lon}°E</text>
                      </g>
                    );
                  })}
                </g>

                {/* Stylized Geographic Landmass Polygons */}
                <g fill="#181e28" stroke="#334155" strokeWidth="0.75" opacity="0.85">
                  {/* Western & Central Europe */}
                  <path d="M 30,120 L 110,80 L 190,95 L 260,140 L 290,190 L 250,230 L 180,240 L 130,220 L 60,190 Z" />
                  {/* Black Sea & Balkans */}
                  <path d="M 270,220 L 340,225 L 390,260 L 330,290 L 280,270 Z" />
                  {/* Turkey / Anatolia */}
                  <path d="M 330,265 L 430,260 L 460,300 L 380,315 L 325,295 Z" />
                  {/* Arabian Peninsula */}
                  <path d="M 520,380 L 590,385 L 670,440 L 720,490 L 670,540 L 570,520 L 500,450 L 510,400 Z" />
                  {/* Persian Gulf Basin waters outline */}
                  <path d="M 570,390 Q 620,410 660,450 L 640,460 Q 600,425 560,400 Z" fill="#091b29" stroke="#38bdf8" strokeWidth="0.6" opacity="0.9" />
                  {/* Iran Plateau */}
                  <path d="M 520,295 L 620,285 L 720,320 L 730,410 L 660,445 L 565,395 L 515,350 Z" fill="#1c2433" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 2" />
                  {/* Central Asia & Kazakhstan */}
                  <path d="M 610,180 L 780,170 L 920,220 L 870,320 L 740,310 L 620,270 Z" />
                  {/* Russian Federation European & Siberian Sector */}
                  <path d="M 360,60 L 650,40 L 940,70 L 930,170 L 770,160 L 600,170 L 440,140 L 350,110 Z" />
                  {/* Caspian Sea */}
                  <path d="M 570,230 Q 600,260 595,310 L 575,315 Q 560,270 560,235 Z" fill="#0b1726" stroke="#38bdf8" strokeWidth="0.8" />
                </g>

                {/* Country and Hub Region Watermark Labels */}
                <g fill="#475569" fontSize="10" fontWeight="bold" letterSpacing="2" opacity="0.6">
                  <text x="590" y="340">IRAN HUB</text>
                  <text x="640" y="475">PERSIAN GULF</text>
                  <text x="360" y="280">TURKEY</text>
                  <text x="550" y="110">EURASIA / RUSSIA</text>
                  <text x="140" y="160">EUROPE</text>
                  <text x="760" y="240">CENTRAL ASIA</text>
                </g>

                {/* Origin Radar Sweep Waves (Khorasan & Tehran complex) */}
                <g>
                  {[30, 60, 95].map((r, i) => (
                    <motion.circle
                      key={`pulse-${i}`}
                      cx={originFlat.x}
                      cy={originFlat.y}
                      r={r}
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="1.2"
                      initial={{ scale: 0.6, opacity: 0.8 }}
                      animate={{ scale: [0.6, 1.25, 1.5], opacity: [0.7, 0.25, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        delay: i * 0.9,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                  <circle cx={originFlat.x} cy={originFlat.y} r="24" fill="url(#originPulseGlow)" />
                </g>

                {/* Flight & Sea Route Curved Arcs */}
                <g>
                  {visibleDestinations.map((dest) => {
                    const destFlat = projectToFlatMap(dest.lat, dest.lon);
                    const isSelected = dest.id === selectedDestinationId;
                    const isHovered = dest.id === hoveredNodeId;
                    const isActive = isSelected || isHovered;

                    // Compute curved Bezier control point arched toward the north/sky
                    const midX = (originFlat.x + destFlat.x) / 2;
                    const midY = (originFlat.y + destFlat.y) / 2;
                    const dx = destFlat.x - originFlat.x;
                    const dy = destFlat.y - originFlat.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    // Arc curvature
                    const arcLift = Math.min(80, Math.max(30, dist * 0.28));
                    const ctrlX = midX - (dy / (dist || 1)) * (arcLift * 0.35);
                    const ctrlY = midY + (dx / (dist || 1)) * (arcLift * 0.35) - arcLift;

                    const pathD = `M ${originFlat.x},${originFlat.y} Q ${ctrlX},${ctrlY} ${destFlat.x},${destFlat.y}`;

                    return (
                      <g key={`route-${dest.id}`} className="cursor-pointer" onClick={() => setSelectedDestinationId(dest.id)}>
                        {/* Underlay glow path */}
                        {isActive && (
                          <path
                            d={pathD}
                            fill="none"
                            stroke="#e11d48"
                            strokeWidth="6"
                            strokeOpacity="0.4"
                            filter="url(#routeGlow)"
                          />
                        )}

                        {/* Base Route Arc */}
                        <motion.path
                          d={pathD}
                          fill="none"
                          stroke={isActive ? 'url(#routeActiveGradient)' : '#475569'}
                          strokeWidth={isActive ? 2.8 : 1.2}
                          strokeDasharray={dest.mode === 'sea' ? '6 4' : 'none'}
                          opacity={isActive ? 1 : 0.45}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />

                        {/* Animated traveling light particle along active/hovered route */}
                        {isActive && (
                          <motion.circle
                            r={dest.mode === 'sea' ? 4 : 4.5}
                            fill={dest.mode === 'sea' ? '#38bdf8' : '#fb7185'}
                            filter="url(#routeGlow)"
                            animate={{
                              offsetDistance: ['0%', '100%'],
                            }}
                            style={{
                              offsetPath: `path('${pathD}')`,
                            }}
                            transition={{
                              duration: dest.mode === 'sea' ? 4.5 : 2.5,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Origin Pin (Iran Hub) */}
                <g transform={`translate(${originFlat.x}, ${originFlat.y})`} className="pointer-events-none">
                  <circle r="7" fill="#be123c" stroke="#ffffff" strokeWidth="2" />
                  <circle r="3" fill="#ffffff" />
                  <g transform="translate(12, -10)">
                    <rect x="0" y="0" width="130" height="24" rx="6" fill="#181e28" stroke="#be123c" strokeWidth="1" opacity="0.92" />
                    <text x="10" y="16" fill="#ffffff" fontSize="10" fontWeight="bold">
                      {currentLang === 'fa' ? 'هاب صادراتی ایران (مبدأ)' : 'Iran Central Hub'}
                    </text>
                  </g>
                </g>

                {/* Destination Nodes & Pins */}
                <g>
                  {visibleDestinations.map((dest) => {
                    const pt = projectToFlatMap(dest.lat, dest.lon);
                    const isSelected = dest.id === selectedDestinationId;
                    const isHovered = dest.id === hoveredNodeId;
                    const isActive = isSelected || isHovered;

                    return (
                      <g 
                        key={`pin-${dest.id}`}
                        transform={`translate(${pt.x}, ${pt.y})`}
                        className="cursor-pointer transition-transform"
                        onClick={() => setSelectedDestinationId(dest.id)}
                        onMouseEnter={() => setHoveredNodeId(dest.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                      >
                        {/* Outer interactive hit zone */}
                        <circle r="22" fill="transparent" />

                        {/* Selection Ripple */}
                        {isActive && (
                          <motion.circle
                            r="16"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.5"
                            initial={{ scale: 0.8, opacity: 0.9 }}
                            animate={{ scale: [0.8, 1.8], opacity: [0.8, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                          />
                        )}

                        {/* Pin Dot */}
                        <circle
                          r={isActive ? 8 : 5}
                          fill={isActive ? '#38bdf8' : '#94a3b8'}
                          stroke={isActive ? '#ffffff' : '#1e293b'}
                          strokeWidth="2"
                        />

                        {/* Pin Label Badge */}
                        <g transform={`translate(${pt.x > 700 ? -85 : 12}, ${pt.y > 450 ? -22 : 6})`}>
                          <rect
                            x="0"
                            y="0"
                            width={dest.name[currentLang].length * 7.5 + 44}
                            height="22"
                            rx="6"
                            fill={isActive ? '#0f172a' : '#1e293b'}
                            stroke={isActive ? '#38bdf8' : '#475569'}
                            strokeWidth={isActive ? 1.5 : 0.8}
                            opacity={isActive ? 0.98 : 0.85}
                          />
                          <text x="6" y="15" fontSize="11">{dest.flag}</text>
                          <text
                            x="26"
                            y="15"
                            fill={isActive ? '#ffffff' : '#cbd5e1'}
                            fontSize="10"
                            fontWeight={isActive ? 'bold' : 'normal'}
                          >
                            {dest.city[currentLang].split(' و ')[0]}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </g>
              </svg>

              {/* Floating Map Legend & Status HUD */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-auto">
                <div className="bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-xl p-3 text-xs shadow-lg space-y-1.5 max-w-[210px]">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                      {currentLang === 'fa' ? 'راهنمای ترانزیت' : 'Transit Corridors'}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">LIVE GPS</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-300">
                    <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-rose-500 to-sky-400" />
                    <span>{currentLang === 'fa' ? 'هوایی اکسپرس (۲۴-۴۸h)' : 'Air Cargo Express'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-300">
                    <span className="h-1.5 w-6 rounded-full bg-sky-400 border-t border-dashed border-white" />
                    <span>{currentLang === 'fa' ? 'دریایی کانتینری (-18°C)' : 'Sea Reefer Reefer'}</span>
                  </div>
                </div>
              </div>

              {/* In-Canvas Hover / Active Destination Quick Card (Glassmorphic) */}
              <AnimatePresence>
                {activeGeoNode && (
                  <motion.div
                    key={activeGeoNode.id}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-4 right-4 z-10 max-w-sm w-full p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 shadow-2xl text-white space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{activeGeoNode.flag}</span>
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                            <span>{activeGeoNode.name[currentLang]}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              {activeGeoNode.code}
                            </span>
                          </h4>
                          <span className="text-xs text-stone-400">{activeGeoNode.city[currentLang]}</span>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800/40">
                        {activeGeoNode.transitAir}
                      </span>
                    </div>

                    <div className="text-xs text-stone-300 grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase">{currentLang === 'fa' ? 'مبادی ورودی' : 'Entry Gateways'}</span>
                        <span className="font-medium text-white truncate block">{activeGeoNode.portSummary}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase">{currentLang === 'fa' ? 'محصولات غالب' : 'Primary Cargo'}</span>
                        <span className="font-medium text-rose-300 truncate block">{activeGeoNode.cargoType[currentLang]}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => onOpenRfqForDestination(activeDestination)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 px-3.5 py-2 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
                      >
                        <span>{currentLang === 'fa' ? 'استعلام قیمت و بارنامه این مقصد' : currentLang === 'ar' ? 'طلب عرض أسعار لهذا الميناء' : 'Quote for this Destination'}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* VIEW MODE 2: 3D Interactive Orthographic Globe */}
          {viewMode === 'globe' && (
            <div 
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[640px] flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleGlobeMouseDown}
              onMouseMove={handleGlobeMouseMove}
              onMouseUp={handleGlobeMouseUp}
              onMouseLeave={handleGlobeMouseUp}
            >
              {/* Starfield Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12)_1px,transparent_1px),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />

              {/* 3D Globe SVG Canvas */}
              <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-4">
                <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_50px_rgba(190,18,60,0.35)]">
                  <defs>
                    {/* Spherical Ocean Gradient */}
                    <radialGradient id="globeOceanGrad" cx="35%" cy="30%" r="75%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="60%" stopColor="#0b1320" />
                      <stop offset="100%" stopColor="#030712" />
                    </radialGradient>

                    {/* Atmospheric Glow Rim */}
                    <radialGradient id="globeAtmosphere" cx="50%" cy="50%" r="50%">
                      <stop offset="85%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="96%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#be123c" stopOpacity="0.8" />
                    </radialGradient>

                    <filter id="globeGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Atmosphere Halo */}
                  <circle cx="250" cy="250" r="198" fill="url(#globeAtmosphere)" />

                  {/* Globe Sphere Base */}
                  <circle cx="250" cy="250" r="190" fill="url(#globeOceanGrad)" stroke="#334155" strokeWidth="1.5" />

                  {/* Graticule Latitude Rings (Orthographic) */}
                  {[-30, 0, 30, 60].map((lat) => {
                    const points: string[] = [];
                    for (let lon = 0; lon <= 360; lon += 5) {
                      const p = projectToGlobe(lat, lon, globeTilt, globeRotation, 190, 250, 250);
                      if (p.visible) {
                        points.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
                      }
                    }
                    if (points.length < 2) return null;
                    return (
                      <path
                        key={`glat-${lat}`}
                        d={`M ${points.join(' L ')}`}
                        fill="none"
                        stroke="#475569"
                        strokeWidth={lat === 0 ? '1' : '0.6'}
                        strokeDasharray={lat === 0 ? 'none' : '3 3'}
                        opacity="0.35"
                      />
                    );
                  })}

                  {/* Graticule Longitude Meridians (Orthographic) */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((lon) => {
                    const points: string[] = [];
                    for (let lat = -80; lat <= 80; lat += 5) {
                      const p = projectToGlobe(lat, lon, globeTilt, globeRotation, 190, 250, 250);
                      if (p.visible) {
                        points.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
                      }
                    }
                    if (points.length < 2) return null;
                    return (
                      <path
                        key={`glon-${lon}`}
                        d={`M ${points.join(' L ')}`}
                        fill="none"
                        stroke="#475569"
                        strokeWidth="0.6"
                        strokeDasharray="3 3"
                        opacity="0.3"
                      />
                    );
                  })}

                  {/* 3D Geodesic Export Route Arcs from Iran Hub to Destinations */}
                  {(() => {
                    const originGlobe = projectToGlobe(ORIGIN_HUB.lat, ORIGIN_HUB.lon, globeTilt, globeRotation, 190, 250, 250);
                    
                    return visibleDestinations.map((dest) => {
                      const destGlobe = projectToGlobe(dest.lat, dest.lon, globeTilt, globeRotation, 190, 250, 250);
                      const isSelected = dest.id === selectedDestinationId;

                      // Discretize great circle arc across 16 steps
                      const arcPoints: string[] = [];
                      for (let step = 0; step <= 16; step++) {
                        const t = step / 16;
                        // Linear interpolation of lat/lon
                        const curLat = ORIGIN_HUB.lat + (dest.lat - ORIGIN_HUB.lat) * t;
                        const curLon = ORIGIN_HUB.lon + (dest.lon - ORIGIN_HUB.lon) * t;
                        // Height offset above globe surface for flying arc
                        const heightAltitude = Math.sin(t * Math.PI) * (isSelected ? 26 : 14);
                        const pt = projectToGlobe(curLat, curLon, globeTilt, globeRotation, 190 + heightAltitude, 250, 250);
                        if (pt.visible) {
                          arcPoints.push(`${pt.x.toFixed(1)},${pt.y.toFixed(1)}`);
                        }
                      }

                      if (arcPoints.length < 2) return null;

                      return (
                        <g key={`globe-arc-${dest.id}`}>
                          <path
                            d={`M ${arcPoints.join(' L ')}`}
                            fill="none"
                            stroke={isSelected ? '#f43f5e' : '#38bdf8'}
                            strokeWidth={isSelected ? 3 : 1.4}
                            strokeDasharray={dest.mode === 'sea' ? '4 3' : 'none'}
                            opacity={isSelected ? 1 : 0.65}
                            filter="url(#globeGlow)"
                          />
                        </g>
                      );
                    });
                  })()}

                  {/* Origin Hub on Globe */}
                  {(() => {
                    const org = projectToGlobe(ORIGIN_HUB.lat, ORIGIN_HUB.lon, globeTilt, globeRotation, 190, 250, 250);
                    if (!org.visible) return null;
                    return (
                      <g transform={`translate(${org.x}, ${org.y})`} className="pointer-events-none">
                        <circle r="9" fill="#be123c" opacity="0.4" />
                        <circle r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
                        <circle r="2" fill="#ffffff" />
                      </g>
                    );
                  })()}

                  {/* Destination Pins on Globe */}
                  {visibleDestinations.map((dest) => {
                    const pt = projectToGlobe(dest.lat, dest.lon, globeTilt, globeRotation, 190, 250, 250);
                    if (!pt.visible) return null;
                    const isSelected = dest.id === selectedDestinationId;

                    return (
                      <g
                        key={`gpin-${dest.id}`}
                        transform={`translate(${pt.x}, ${pt.y})`}
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          focusGlobeOnDestination(dest);
                        }}
                      >
                        <circle r="16" fill="transparent" />
                        {isSelected && (
                          <circle r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
                        )}
                        <circle
                          r={isSelected ? 7 : 4.5}
                          fill={isSelected ? '#38bdf8' : '#e2e8f0'}
                          stroke={isSelected ? '#ffffff' : '#0f172a'}
                          strokeWidth="1.5"
                        />
                        <text
                          x="9"
                          y="4"
                          fill="#ffffff"
                          fontSize="10"
                          fontWeight={isSelected ? 'bold' : 'normal'}
                          filter="url(#globeGlow)"
                        >
                          {dest.flag} {dest.city[currentLang].split(' و ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Globe Rotation & Interaction Toolstrip */}
              <div className="absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-white/10 p-2 rounded-xl text-xs text-white">
                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    isAutoRotating ? 'bg-rose-600 text-white' : 'bg-white/10 text-stone-300 hover:text-white'
                  }`}
                >
                  <RotateCw className={`h-3.5 w-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
                  <span>{isAutoRotating ? (currentLang === 'fa' ? 'توقف چرخش' : 'Pause Orbit') : (currentLang === 'fa' ? 'چرخش خودکار' : 'Auto Orbit')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setGlobeRotation(ORIGIN_HUB.lon);
                    setGlobeTilt(30);
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white font-medium cursor-pointer"
                >
                  {currentLang === 'fa' ? 'مرکزیت ایران' : 'Center Iran'}
                </button>

                <span className="text-[11px] text-stone-400 px-1 hidden sm:inline">
                  {currentLang === 'fa' ? 'با ماوس بکشید تا بچرخد' : 'Drag to rotate 3D sphere'}
                </span>
              </div>

              {/* Destination Floating Card on Globe View */}
              <div className="absolute top-4 right-4 z-10 max-w-xs w-full p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-white shadow-xl space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeGeoNode.flag}</span>
                    <div>
                      <h4 className="text-sm font-bold">{activeGeoNode.name[currentLang]}</h4>
                      <span className="text-xs text-stone-400">{activeGeoNode.city[currentLang]}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    {activeGeoNode.transitAir}
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {activeDestination.dominantProducts[currentLang]}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenRfqForDestination(activeDestination)}
                  className="w-full py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>{currentLang === 'fa' ? 'ثبت استعلام این کریدور' : 'Request RFQ for Corridor'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Multimodal Transport Assurance Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-2xl border p-7 sm:p-8 flex items-start gap-5 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
          }`}>
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
              isDark 
                ? 'bg-rose-950/40 border-rose-500/30 text-rose-400' 
                : 'bg-rose-50 border-rose-200 text-rose-700'
            }`}>
              <Plane className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <span className={`text-base font-bold uppercase tracking-wider block ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {currentLang === 'fa' ? 'حمل اکسپرس هوایی زنجیره سرد (Air Freight IATA)' : currentLang === 'ar' ? 'الشحن الجوي السريع المبرد' : 'Chilled Air Freight Cargo (IATA Time-Critical)'}
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#9ca3af]' : 'text-stone-600'
              }`}>
                {t.exportSection.airCargo}
              </p>
            </div>
          </div>

          <div className={`rounded-2xl border p-7 sm:p-8 flex items-start gap-5 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
          }`}>
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
              isDark 
                ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400' 
                : 'bg-sky-50 border-sky-200 text-sky-700'
            }`}>
              <Ship className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <span className={`text-base font-bold uppercase tracking-wider block ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {currentLang === 'fa' ? 'کانتینرهای دریایی ریفر (-18°C Cryo-Reefer)' : currentLang === 'ar' ? 'حاويات بحرية مبردة (-18°C)' : 'Refrigerated Sea Reefer (-18°C Continuous Log)'}
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#9ca3af]' : 'text-stone-600'
              }`}>
                {t.exportSection.seaReefer}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Corridor Specifications & Tab Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Destination Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#9ca3af]' : 'text-stone-600'
            }`}>
              {currentLang === 'fa' ? 'انتخاب کریدور صادراتی از روی نقشه یا فهرست' : currentLang === 'ar' ? 'اختر وجهة التصدير من الخريطة' : 'Select Target Export Corridor'}
            </span>
            <div className="space-y-3">
              {EXPORT_DESTINATIONS.map((dest) => {
                const isSelected = dest.id === selectedDestinationId;
                const geo = DESTINATION_GEOS.find((g) => g.id === dest.id);

                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => {
                      setSelectedDestinationId(dest.id);
                      if (geo && viewMode === 'globe') {
                        focusGlobeOnDestination(geo);
                      }
                    }}
                    className={`w-full flex items-center justify-between p-5 rounded-xl border text-start transition-all cursor-pointer ${
                      isSelected
                        ? isDark
                          ? 'border-rose-600 bg-[#1c1214] text-white shadow-md'
                          : 'border-rose-600 bg-rose-50/70 text-stone-900 shadow-sm'
                        : isDark
                          ? 'border-white/5 bg-[#121417] text-[#9ca3af] hover:text-white hover:bg-white/5'
                          : 'border-stone-200 bg-white text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xl shrink-0">{geo?.flag || '🌐'}</span>
                      <div className="space-y-0.5">
                        <span className={`text-sm font-bold block ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          {dest.country[currentLang]}
                        </span>
                        <span className={`text-xs ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                          {dest.region[currentLang]}
                        </span>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className={`text-xs font-mono font-bold block ${isSelected ? 'text-rose-600 dark:text-rose-400' : isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                        {dest.transitTime[currentLang].split('/')[0]}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {geo?.code || ''}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Corridor Specifications Card (7 cols) */}
          <div className={`lg:col-span-7 rounded-2xl border p-8 sm:p-10 space-y-8 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-sm'
          }`}>
            
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b ${
              isDark ? 'border-white/10' : 'border-stone-200'
            }`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeGeoNode.flag}</span>
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                    {activeDestination.region[currentLang]}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}>
                  {activeDestination.country[currentLang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => onOpenRfqForDestination(activeDestination)}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9b111e] to-[#be123c] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer whitespace-nowrap self-start shadow-md"
              >
                <span>{currentLang === 'fa' ? 'استعلام قیمت این مقصد' : currentLang === 'ar' ? 'طلب عرض أسعار لهذا الميناء' : 'Quote for this Port'}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Specifications Grid */}
            <div className="space-y-5">
              
              {/* Ports */}
              <div className={`rounded-xl border p-5 space-y-2 ${
                isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50/70'
              }`}>
                <span className={`text-xs font-bold block uppercase tracking-wider ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {t.exportSection.ports}
                </span>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {activeDestination.ports.map((port, pIdx) => (
                    <span 
                      key={pIdx} 
                      className={`text-xs font-mono border px-3 py-1.5 rounded-md ${
                        isDark 
                          ? 'text-white bg-white/5 border-white/10' 
                          : 'text-stone-800 bg-white border-stone-300'
                      }`}
                    >
                      {port}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transit Times */}
              <div className={`rounded-xl border p-5 space-y-1.5 ${
                isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50/70'
              }`}>
                <span className={`text-xs font-bold block uppercase tracking-wider ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {t.exportSection.transit}
                </span>
                <span className="text-sm sm:text-base font-semibold text-rose-600 dark:text-rose-400 block">
                  {activeDestination.transitTime[currentLang]}
                </span>
              </div>

              {/* Dominant Products */}
              <div className={`rounded-xl border p-5 space-y-1.5 ${
                isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50/70'
              }`}>
                <span className={`text-xs font-bold block uppercase tracking-wider ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {t.exportSection.dominant}
                </span>
                <span className={`text-sm sm:text-base block ${isDark ? 'text-[#e5e7eb]' : 'text-stone-800'}`}>
                  {activeDestination.dominantProducts[currentLang]}
                </span>
              </div>

              {/* Health Standards & Quarantine Protocols */}
              <div className={`rounded-xl border p-5 space-y-1.5 ${
                isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50/70'
              }`}>
                <span className={`text-xs font-bold block uppercase tracking-wider ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {t.exportSection.regulation}
                </span>
                <span className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium block leading-relaxed">
                  {activeDestination.regulation[currentLang]}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
