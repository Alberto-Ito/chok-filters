export const siteConfig = {
  companyName: "Chok Filtros",
  tagline: "Proteccion para cada motor",
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "5491100000000",
  contactEmail: "ventas@chokfiltros.com",
  contactPhone: "+54 11 0000 0000",
  contactHours: "Lunes a viernes de 8 a 18 hs",
};

export const heroStats = [
  { value: "250+", label: "Referencias de filtros" },
  { value: "48 hs", label: "Respuesta comercial" },
  { value: "B2B y retail", label: "Atencion para talleres y clientes" },
];

export const highlights = [
  {
    title: "Busqueda simple",
    description:
      "Catalogo dividido por categorias para ubicar referencias rapidamente.",
  },
  {
    title: "Promociones visibles",
    description:
      "Espacio dedicado a combos, volumen y campanas temporales.",
  },
  {
    title: "Escalable",
    description:
      "Estructura pensada para sumar carrito, stock y acciones comerciales despues.",
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "livianos", label: "Livianos" },
  { id: "pesados", label: "Pesados" },
  { id: "agricola", label: "Agricola" },
];

export const products = [
  {
    id: "cf-108",
    code: "CF-108",
    category: "livianos",
    categoryLabel: "Livianos",
    name: "Filtro CF-108",
    description:
      "Compatible con motores nafteros de uso urbano y mantenimiento frecuente.",
    features: [
      "Rosca estandar",
      "Alta retencion de particulas",
      "Linea economica",
    ],
  },
  {
    id: "cf-211",
    code: "CF-211",
    category: "livianos",
    categoryLabel: "Livianos",
    name: "Filtro CF-211",
    description:
      "Desarrollado para sedanes y SUVs con ciclos de cambio prolongados.",
    features: [
      "Medio filtrante reforzado",
      "Valvula antidrenaje",
      "Uso mixto ruta-ciudad",
    ],
  },
  {
    id: "cf-540-hd",
    code: "CF-540 HD",
    category: "pesados",
    categoryLabel: "Pesados",
    name: "Filtro CF-540 HD",
    description:
      "Solucion para utilitarios y flotas con exigencia de trabajo continuo.",
    features: [
      "Cuerpo de alta resistencia",
      "Mayor capacidad de retencion",
      "Aplicaciones diesel",
    ],
  },
  {
    id: "cf-620-pro",
    code: "CF-620 Pro",
    category: "pesados",
    categoryLabel: "Pesados",
    name: "Filtro CF-620 Pro",
    description: "Disenado para transporte de media y larga distancia.",
    features: [
      "Construccion reforzada",
      "Mayor durabilidad",
      "Ideal para mantenimiento programado",
    ],
  },
  {
    id: "cf-ag90",
    code: "CF-AG90",
    category: "agricola",
    categoryLabel: "Agricola",
    name: "Filtro CF-AG90",
    description:
      "Rendimiento estable para maquinaria con uso intensivo en polvo y tierra.",
    features: [
      "Sellado seguro",
      "Aplicaciones multiples",
      "Alta tolerancia operativa",
    ],
  },
  {
    id: "cf-tr88",
    code: "CF-TR88",
    category: "agricola",
    categoryLabel: "Agricola",
    name: "Filtro CF-TR88",
    description:
      "Modelo orientado a tractores y equipos de trabajo estacional.",
    features: [
      "Facil reposicion",
      "Uso en motores de gran torque",
      "Linea profesional",
    ],
  },
];

export const promotions = [
  {
    title: "10% off en compras por lote",
    kicker: "Combo taller",
    description:
      "Ideal para talleres que reponen filtros de alta rotacion en una sola orden.",
    accent: true,
  },
  {
    title: "Bonificacion por zona",
    kicker: "Envio coordinado",
    description:
      "Entrega programada para distribuidores y clientes con compra recurrente.",
  },
  {
    title: "Nuevas referencias premium",
    kicker: "Lanzamiento",
    description:
      "Espacio ideal para comunicar nuevas lineas y aplicaciones especiales.",
  },
];

export const faqItems = [
  {
    question: "Como identifico el filtro correcto para mi vehiculo?",
    answer:
      "La forma recomendada es buscar por modelo, motorizacion y codigo de referencia del filtro actual.",
  },
  {
    question: "Trabajan con talleres o distribuidores?",
    answer:
      "Si. La estructura del sitio contempla atencion tanto mayorista como minorista.",
  },
  {
    question: "Se pueden destacar promociones temporales?",
    answer:
      "Si. La seccion de promociones esta pensada para campanas por volumen, combos o lanzamientos.",
  },
  {
    question: "Este sitio puede sumar carrito mas adelante?",
    answer:
      "Si. En esta version ya queda un carrito simple conectado a WhatsApp como primer paso.",
  },
];
