/* ==========================================================================
   Rieux · contenido del sitio
   --------------------------------------------------------------------------
   Todo el texto vive aquí, en español (es) e inglés (en).
   - Para editar un texto, cámbialo en ambos idiomas.
   - Para agregar un trabajo, añade una entrada en `jobs` de ambos idiomas
     con el mismo id (ej. "acme"). Aparece solo en el índice, en el orden
     en que esté escrito, entre "Perfil" y "Formación".
   - Los cursos van en SITE.certs (una sola lista para ambos idiomas).
   ========================================================================== */

window.SITE = {
  es: {
    role: "AI Automation Specialist · Bogotá",
    headline: "Convierto procesos manuales en sistemas que trabajan solos.",
    lede: "Diseño y construyo agentes de IA y workflows que captan, nutren y atienden clientes, con la mirada de 8 años liderando productos digitales.",
    book: "Agendar una llamada",
    idx: "Trayectoria",
    footer: "Hecho con cuidado por Rieux · © 2026",
    theme: "Cambiar tema",
    showing: "Mostrando",
    loading: "cargando",
    prev: "Anterior",
    next: "Siguiente",
    newTab: "se abre en una pestaña nueva",
    home: "Ricardo Estepa, inicio",

    // Pantalla inicial de la terminal
    status: {
      ok: "AI Automation Specialist en FloLoop",
      big: "Elige un capítulo para ver qué hice, con quién y qué salió de ahí.",
      bigNarrow: "Toca un capítulo de arriba para ver qué hice, con quién y qué salió de ahí.",
      facts: [
        ["base", "Bogotá, Colombia"],
        ["idiomas", "Español · Inglés"],
        ["sectores", "fintech · movilidad eléctrica · automatización con IA"],
        ["trayectoria", "8+ años en producto y automatización"],
        ["aprendiendo", "Data Science · TripleTen"],
        ["lanzamientos", "flotas en 7 países"]
      ]
    },

    // Capítulo "Perfil"
    profile: {
      title: "Perfil",
      meta: "Cómo trabajo",
      paragraphs: [
        "Llevo más de 8 años construyendo productos digitales: de apps para flotas eléctricas en 7 países a experiencias de pago en fintech.",
        "Hoy aplico esa misma lógica a la automatización con IA: entiendo el negocio y a su audiencia, y diseño agentes y workflows que se encargan del trabajo repetitivo.",
        "Me estoy formando en ciencia de datos para que cada automatización también se mida y mejore con evidencia."
      ],
      skillsTitle: "Habilidades",
      skills: ["Automatización con IA", "GoHighLevel y n8n", "Agentes de voz", "Análisis de audiencia", "Gestión de producto", "Metodologías ágiles"]
    },

    // Capítulo "Formación"
    education: {
      title: "Formación",
      meta: "Data Science · Ingeniería · 11 cursos",
      current: { dates: "Jun 2026 – hoy", name: "Data Science · TripleTen", tag: "EN CURSO" },
      degree: "Ingeniería Electromecánica · UPTC",
      degreeDate: "Abr 2015",
      coursesTitle: "Cursos en Platzi"
    },

    // Etiquetas de cada trabajo
    labels: { highlight: "DESTACADO", resp: "Responsabilidades", ach: "Logros" },

    // Trabajos: el orden aquí es el orden del índice
    jobs: {
      floloop: {
        role: "AI Automation Specialist", org: "FloLoop", place: "Las Vegas, Nevada, EE. UU.",
        dates: "Nov 2024 – hoy", years: "2024 – hoy",
        highlight: ["Intake automatizado de prospectos", "Un agente de voz con IA y 9 workflows en GoHighLevel, del formulario de contacto a cliente activo."],
        resp: [
          "Analizo la audiencia de cada cliente (Audience Deep Dive, +10 marcas) como base de sus mensajes, productos y automatizaciones.",
          "Construyo automatizaciones con IA en GoHighLevel, n8n y Notion: prospectos, email nurturing, productos digitales y contenido.",
          "Estandarizo procesos repetitivos y defino el roadmap de las herramientas de automatización."
        ],
        ach: [
          "Agentes de voz con IA que atienden llamadas y dan seguimiento a prospectos.",
          "Nurturing por email según la etapa: agendado, no asistió, sin cerrar y cliente activo.",
          "Flujos para producir productos digitales: libros, audiolibros, workbooks y hojas de trabajo.",
          "Pipeline de contenido de Notion a GoHighLevel y agentes en n8n que redactan propuestas comerciales."
        ]
      },
      wava: {
        role: "Product Manager", org: "Wava", place: "Bogotá, Colombia",
        dates: "Mar 2022 – Sep 2024", years: "2022 – 2024",
        highlight: ["3 métodos de pago, una sola experiencia", "Stripe, Nequi y DaviPlata integrados en un flujo de pago web con su propio sistema de diseño."],
        resp: [
          "Recolecté y analicé métricas de usuario para encontrar mejoras, impulsar la adopción y asegurar valor en cada actualización.",
          "Coordiné tecnología, ventas y marketing para lanzar productos escalables sin perder de vista la satisfacción del cliente."
        ],
        ach: [
          "Diseñé la experiencia web del proceso de pago.",
          "Definí el sistema de diseño de toda la experiencia de pago web.",
          "Integré Stripe, Nequi y DaviPlata como métodos de pago."
        ]
      },
      cosmic: {
        role: "Product Manager", org: "Cosmic", place: "Bogotá, Colombia",
        dates: "Feb 2018 – Ago 2021", years: "2018 – 2021",
        highlight: ["Flotas eléctricas en 7 países", "Colombia, Perú, Argentina, Chile, Canadá, Italia y Arabia Saudita."],
        resp: [
          "Supervisé la integración de hardware y software en flotas de vehículos eléctricos.",
          "Analicé datos operativos para optimizar rutas y disponibilidad de vehículos.",
          "Implementé estrategias para mejorar la experiencia en las apps móviles."
        ],
        ach: [
          "Publiqué las apps de usuarios y logística en Play Store y App Store.",
          "Diseñé la experiencia móvil y web de las apps y el panel de administración.",
          "Coordiné el lanzamiento de flotas en Colombia, Perú, Argentina, Chile, Canadá, Italia y Arabia Saudita."
        ]
      },
      eden: {
        role: "Design Engineer", org: "City of Eden", place: "Bogotá, Colombia",
        dates: "Nov 2017 – Feb 2018", years: "2017 – 2018",
        highlight: ["Un prototipo en proceso de patente", "Además, fabricación de equipos para la sede de Motorola en Israel."],
        resp: [
          "Diseño y gestión de operaciones de manufactura.",
          "Desarrollo y administración con manufactura asistida por computador (CAM).",
          "Producción de prototipos y especificaciones para evaluación de producto."
        ],
        ach: [
          "Coordiné la fabricación de equipos para la sede de Motorola en Israel.",
          "Desarrollé el prototipo de un producto en proceso de patente en EE. UU."
        ]
      }
    },

    // Abreviaturas de meses para las fechas de SITE.certs
    months: { Jan: "Ene", Apr: "Abr", Aug: "Ago", Dec: "Dic" }
  },

  en: {
    role: "AI Automation Specialist · Bogotá",
    headline: "I turn manual processes into systems that run on their own.",
    lede: "I design and build AI agents and workflows that capture, nurture and serve customers, backed by 8 years leading digital products.",
    book: "Book a call",
    idx: "Career",
    footer: "Made with care by Rieux · © 2026",
    theme: "Toggle theme",
    showing: "Showing",
    loading: "loading",
    prev: "Previous",
    next: "Next",
    newTab: "opens in a new tab",
    home: "Ricardo Estepa, home",

    status: {
      ok: "AI Automation Specialist at FloLoop",
      big: "Pick a chapter to see what I did, who with, and what came out of it.",
      bigNarrow: "Tap a chapter above to see what I did, who with, and what came out of it.",
      facts: [
        ["based", "Bogotá, Colombia"],
        ["languages", "Spanish · English"],
        ["sectors", "fintech · e-mobility · AI automation"],
        ["track", "8+ years in product and automation"],
        ["learning", "Data Science · TripleTen"],
        ["launches", "fleets in 7 countries"]
      ]
    },

    profile: {
      title: "Profile",
      meta: "How I work",
      paragraphs: [
        "I've spent 8+ years building digital products: from apps for electric fleets in 7 countries to payment experiences in fintech.",
        "Today I apply the same thinking to AI automation: I understand the business and its audience, then design agents and workflows that take over the repetitive work.",
        "I'm training in data science so every automation can also be measured and improved with evidence."
      ],
      skillsTitle: "Skills",
      skills: ["AI automation", "GoHighLevel and n8n", "Voice agents", "Audience analysis", "Product management", "Agile methodologies"]
    },

    education: {
      title: "Education",
      meta: "Data Science · Engineering · 11 courses",
      current: { dates: "Jun 2026 – present", name: "Data Science · TripleTen", tag: "IN PROGRESS" },
      degree: "B.Sc. Electromechanical Engineering · UPTC",
      degreeDate: "Apr 2015",
      coursesTitle: "Courses on Platzi"
    },

    labels: { highlight: "HIGHLIGHT", resp: "Responsibilities", ach: "Achievements" },

    jobs: {
      floloop: {
        role: "AI Automation Specialist", org: "FloLoop", place: "Las Vegas, Nevada, USA",
        dates: "Nov 2024 – present", years: "2024 – now",
        highlight: ["Automated lead intake", "An AI voice agent and 9 GoHighLevel workflows, from contact form to active client."],
        resp: [
          "Analyze each client's audience (Audience Deep Dive, 10+ brands) as the foundation for their messaging, products and automations.",
          "Build AI automations in GoHighLevel, n8n and Notion: lead follow-up, email nurturing, digital products and content.",
          "Standardize repetitive processes and define the roadmap for our automation tools."
        ],
        ach: [
          "AI voice agents that answer calls and follow up with leads.",
          "Email nurturing by stage: booked, no-show, not closed and active client.",
          "Workflows to produce digital products: books, audiobooks, workbooks and worksheets.",
          "A content pipeline from Notion to GoHighLevel, and n8n agents that draft sales proposals."
        ]
      },
      wava: {
        role: "Product Manager", org: "Wava", place: "Bogotá, Colombia",
        dates: "Mar 2022 – Sep 2024", years: "2022 – 2024",
        highlight: ["3 payment methods, one experience", "Stripe, Nequi and DaviPlata in a single web checkout with its own design system."],
        resp: [
          "Collected and analyzed user metrics to find improvements, drive adoption and ensure value in every update.",
          "Coordinated technology, sales and marketing to launch scalable products while keeping customer satisfaction first."
        ],
        ach: [
          "Designed the web user experience for the payment process.",
          "Defined the design system for the entire web payment experience.",
          "Integrated Stripe, Nequi and DaviPlata as payment methods."
        ]
      },
      cosmic: {
        role: "Product Manager", org: "Cosmic", place: "Bogotá, Colombia",
        dates: "Feb 2018 – Aug 2021", years: "2018 – 2021",
        highlight: ["Electric fleets in 7 countries", "Colombia, Peru, Argentina, Chile, Canada, Italy and Saudi Arabia."],
        resp: [
          "Oversaw hardware and software integration in electric vehicle fleets.",
          "Analyzed operational data to optimize routes and vehicle availability.",
          "Implemented strategies to improve the mobile app experience."
        ],
        ach: [
          "Released user and logistics apps on the Play Store and App Store.",
          "Designed the mobile and web experience for the apps and admin panel.",
          "Coordinated fleet launches in Colombia, Peru, Argentina, Chile, Canada, Italy and Saudi Arabia."
        ]
      },
      eden: {
        role: "Design Engineer", org: "City of Eden", place: "Bogotá, Colombia",
        dates: "Nov 2017 – Feb 2018", years: "2017 – 2018",
        highlight: ["A prototype in the patent process", "Plus equipment manufacturing for Motorola's headquarters in Israel."],
        resp: [
          "Designed and managed manufacturing operations.",
          "Development and administration through computer-aided manufacturing (CAM).",
          "Prototype production and specifications for product evaluation."
        ],
        ach: [
          "Coordinated equipment manufacturing for Motorola's headquarters in Israel.",
          "Developed the prototype of a product currently in the U.S. patent process."
        ]
      }
    },

    months: null  // las fechas de SITE.certs ya están en inglés
  },

  // Cursos: [fecha, nombre en inglés, nombre en español, enlace al diploma]
  certs: [
    ["Feb 2025", "Chatbot development with OpenAI", "Chatbots con OpenAI", "https://platzi.com/p/Rieux/curso/8022-openai-api-23/diploma/detalle/"],
    ["Feb 2025", "AI Agents", "Agentes de IA", "https://platzi.com/p/Rieux/curso/10794-agentes-ai/diploma/detalle/"],
    ["Oct 2024", "Tableau: Data Visualization and Storytelling", "Tableau: visualización y storytelling", "https://platzi.com/p/Rieux/curso/2197-tableau/diploma/detalle/"],
    ["Jul 2024", "Databases with SQL", "Bases de datos con SQL", "https://platzi.com/p/Rieux/curso/9873-db-sql/diploma/detalle/"],
    ["Jun 2024", "Google Data Studio", "Google Data Studio", "https://platzi.com/p/Rieux/curso/1838-data-studio/diploma/detalle/"],
    ["Apr 2024", "Metrics and Dashboards for Startups", "Métricas y dashboards para startups", "https://platzi.com/p/Rieux/curso/2294-dashboards-startups/diploma/detalle/"],
    ["Feb 2024", "Social Media Reports with Looker Studio", "Reportes de redes con Looker Studio", "https://platzi.com/p/Rieux/curso/8046-reportes-looker/diploma/detalle/"],
    ["Jan 2024", "Git & GitHub", "Git y GitHub", "https://platzi.com/p/Rieux/curso/1557-git-github/diploma/detalle/"],
    ["Nov 2022", "User Research", "Investigación de usuarios", "https://platzi.com/p/Rieux/curso/1742-user-research/diploma/detalle/"],
    ["Jan 2022", "Design Systems", "Sistemas de diseño", "https://platzi.com/p/Rieux/curso/1420-sistemas-diseno/diploma/detalle/"],
    ["Dec 2021", "Figma: Design and Prototyping", "Figma: diseño y prototipado", "https://platzi.com/p/Rieux/curso/2582-figma-avanzado/diploma/detalle/"]
  ]
};
