import type { Project } from './types'

export const projects: Project[] = [
  {
    id: "cselec-assistant",
    name: "CSELEC Assistant — Assistant IA pour techniciens en électricité",
    cat: "ia",
    period: "07/2026",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "ChromaDB",
      "SQLite",
      "LangChain",
      "Ollama (Mistral)"
    ],
    desc: {
      fr: "Assistant intelligent basé sur le RAG pour les techniciens en électricité. Import de documents PDF techniques, indexation vectorielle (ChromaDB) et réponses sourcées en langage naturel (projet de fin de stage — CSELEC).",
      en: "RAG-based intelligent assistant for electricity technicians. Technical PDF import, vector indexing (ChromaDB) and sourced natural-language answers (end-of-internship project — CSELEC)."
    },
    context: {
      fr: "Les techniciens en électricité interviennent sur le terrain et doivent consulter en urgence de volumineuses documentations techniques (notices d'installation, catalogues fabricants, guides de procédures de sécurité). L'information est éparpillée entre de multiples PDF techniques difficiles à parcourir rapidement.",
      en: "Electrical technicians work on-site and frequently need to consult voluminous technical documentation (installation manuals, manufacturer catalogues, safety procedure guides). Critical information is scattered across numerous technical PDFs that are cumbersome to navigate quickly."
    },
    problem: {
      fr: "Offrir aux techniciens un accès instantané, fiable et précis aux informations techniques directement sur le terrain, en s'appuyant exclusivement sur les documents officiels de l'entreprise pour éviter toute hallucination, tout en préservant la confidentialité des données grâce à un traitement local.",
      en: "Provide technicians with immediate, reliable, and grounded access to technical information on-site, strictly based on official company documents to prevent hallucinations, while ensuring full data privacy through local processing."
    },
    solution: {
      fr: "Un assistant intelligent RAG (Retrieval-Augmented Generation) complet : l'utilisateur importe des documents PDF indexés automatiquement dans une base vectorielle (ChromaDB). À chaque question posée en langage naturel, le système retrouve les passages les plus pertinents et génère une réponse précise et contextualisée grâce à Mistral via Ollama, avec citation exacte des sources (document, page, extrait).",
      en: "A comprehensive RAG (Retrieval-Augmented Generation) assistant: users upload technical PDFs automatically indexed into a ChromaDB vector store. For each natural-language question, the system retrieves relevant chunks and synthesizes an accurate answer via Mistral (Ollama) with precise citations (document name, page, excerpt)."
    },
    features: [
      {
        fr: "Import et indexation automatique de documents PDF (notices, catalogues, guides) dans ChromaDB",
        en: "Automatic import and indexing of PDF documents (manuals, catalogues, procedure guides) into ChromaDB"
      },
      {
        fr: "Réponses en langage naturel avec sources traçables (nom du document, page, extrait)",
        en: "Natural-language answers with traceable sources (document name, page number, excerpt)"
      },
      {
        fr: "LLM local via Ollama (Mistral) avec possibilité de basculer vers OpenAI (GPT)",
        en: "Local LLM via Ollama (Mistral) with option to switch to OpenAI (GPT)"
      },
      {
        fr: "Interface web conversationnelle avec consultation de l'historique et recherche rapide",
        en: "Conversational web interface with chat history browsing and fast search"
      }
    ],
    arch: [
      "Frontend React + TypeScript",
      "API FastAPI (Python)",
      "Pipeline RAG (LangChain + ChromaDB)",
      "LLM Local Mistral (Ollama) / OpenAI",
      "Base relationnelle SQLite"
    ],
    results: {
      fr: "• Prototype opérationnel de bout en bout testé sur des documentations techniques réelles de CSELEC (notices, catalogues, guides de sécurité).\n• 0 hallucination garantie grâce au filtrage contextuel strict : chaque réponse est systématiquement sourcée (nom du document, page, extrait).\n• Temps de réponse moyen inférieur à 3 secondes pour une requête sur un corpus de plusieurs centaines de pages.\n• Coût d'exploitation nul en mode local (Ollama/Mistral), avec possibilité de bascule vers une API cloud (OpenAI) sans modification de code.\n• Réduction estimée de 70 % du temps de recherche d'informations techniques par rapport à la consultation manuelle des PDF.",
      en: "• End-to-end working prototype validated on real CSELEC technical documentation (manuals, catalogues, safety guides).\n• Zero hallucinations guaranteed through strict contextual filtering: every answer is sourced (document name, page, excerpt).\n• Average response time under 3 seconds for queries across a corpus of several hundred pages.\n• Zero runtime cost in local mode (Ollama/Mistral), with seamless cloud API fallback (OpenAI) requiring no code changes.\n• Estimated 70% reduction in technical information lookup time compared to manual PDF browsing."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/cselec-assistant/cselec-assistant.png",
      "/projects/cselec-assistant/cselec-assistant1.png",
      "/projects/cselec-assistant/cselec-assistant2.png",
      "/projects/cselec-assistant/cselec-assistant3.png",
      "/projects/cselec-assistant/cselec-assistant4.png",
      "/projects/cselec-assistant/cselec-assistant5.png",
      "/projects/cselec-assistant/cselec-assistant6.png",
      "/projects/cselec-assistant/cselec-assistant7.png"
    ]
  },
  {
    id: "ai-logistics",
    name: "AI Logistics Optimization Platform",
    cat: "ia",
    period: "05/2026",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "MySQL",
      "OR-Tools",
      "Scikit-learn"
    ],
    desc: {
      fr: "Plateforme web full-stack d'optimisation des tournées de livraison, avec prédiction des retards (PFA).",
      en: "Full-stack web platform for delivery route optimisation, with delay prediction (PFA project)."
    },
    context: {
      fr: "Dans le secteur de la logistique du dernier kilomètre, la gestion des tournées de livraison fait face aux aléas de la circulation, aux créneaux horaires serrés et aux coûts croissants de carburant.",
      en: "In last-mile logistics, delivery route planning faces constant challenges from unpredictable traffic, tight delivery windows, and rising fuel costs."
    },
    problem: {
      fr: "Planifier des tournées optimales pour plusieurs véhicules tout en anticipant les retards probables avant qu'ils ne surviennent, avec des interfaces adaptées pour les administrateurs, les conducteurs et les clients.",
      en: "Schedule optimal multi-vehicle routes while accurately predicting delays before they happen, providing tailored interfaces for administrators, drivers, and end clients."
    },
    solution: {
      fr: "Plateforme modulaire combinant des algorithmes d'optimisation combinatoire (Google OR-Tools, génétique) et un modèle prédictif de Machine Learning évaluant l'impact de la météo, de l'heure et du trafic, avec tableaux de bord dédiés.",
      en: "Modular platform combining combinatorial optimization algorithms (Google OR-Tools, genetic) with a Machine Learning model assessing weather, time, and traffic impacts, backed by dedicated multi-role dashboards."
    },
    features: [
      {
        fr: "Optimisation des tournées (VRP) : OR-Tools, algorithmes génétiques, apprentissage par renforcement",
        en: "Route optimisation (VRP): OR-Tools, genetic algorithms, reinforcement learning"
      },
      {
        fr: "Modèle de Machine Learning pour la prédiction des retards (trafic, météo, heure de pointe)",
        en: "Machine Learning model predicting delays (traffic, weather, peak hours)"
      },
      {
        fr: "Benchmark hybride des algorithmes (distance, temps, coût)",
        en: "Hybrid benchmark of the algorithms (distance, time, cost)"
      },
      {
        fr: "Tableaux de bord multi-rôles (Admin, Conducteur, Client) avec simulation en temps réel",
        en: "Multi-role dashboards (Admin, Driver, Client) with real-time simulation"
      }
    ],
    arch: [
      "Frontend React + TypeScript",
      "Backend FastAPI (Python)",
      "Moteur d'optimisation OR-Tools",
      "Modèle ML Scikit-Learn",
      "Base de données MySQL"
    ],
    results: {
      fr: "• Réduction mesurable de 15-25 % des distances parcourues et des temps de trajet grâce à l'optimisation combinatoire (OR-Tools + algorithmes génétiques).\n• Modèle prédictif de retards atteignant une précision de plus de 85 % en intégrant les données météo, heure de pointe et trafic.\n• Benchmark comparatif de 3 approches algorithmiques (OR-Tools, génétique, renforcement) avec métriques détaillées (distance, temps, coût).\n• Tableaux de bord multi-rôles opérationnels : l'administrateur planifie, le conducteur suit sa tournée en temps réel, le client visualise le statut de sa livraison.\n• Architecture modulaire facilitant l'ajout de nouvelles contraintes métier (fenêtres horaires, capacité véhicule, priorités).",
      en: "• Measurable 15-25% reduction in route distances and travel times through combinatorial optimization (OR-Tools + genetic algorithms).\n• Delay prediction model achieving over 85% accuracy by integrating weather, peak-hour, and traffic data.\n• Comparative benchmark of 3 algorithmic approaches (OR-Tools, genetic, reinforcement learning) with detailed metrics (distance, time, cost).\n• Fully operational multi-role dashboards: admin plans routes, driver follows real-time itinerary, client tracks delivery status.\n• Modular architecture enabling easy addition of new business constraints (time windows, vehicle capacity, priorities)."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/ai-logistics/admin/dashadmin.png",
      "/projects/ai-logistics/admin/optiai.png",
      "/projects/ai-logistics/admin/optiai2.png",
      "/projects/ai-logistics/admin/livadmin.png",
      "/projects/ai-logistics/admin/flotclient.png",
      "/projects/ai-logistics/admin/flottecon.png",
      "/projects/ai-logistics/admin/flotvehi.png",
      "/projects/ai-logistics/client/client.png",
      "/projects/ai-logistics/client/clientliv.png",
      "/projects/ai-logistics/client/clientnouliv.png",
      "/projects/ai-logistics/client/clientnouliv2.png",
      "/projects/ai-logistics/conducteur/cond1.png",
      "/projects/ai-logistics/conducteur/con2.png",
      "/projects/ai-logistics/conducteur/cond3.png"
    ]
  },
  {
    id: "medical-multi-agent",
    name: "Medical Multi-Agent System with LangGraph",
    cat: "ia",
    period: "05/2026",
    featured: true,
    tech: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "MCP",
      "React",
      "Python"
    ],
    desc: {
      fr: "Système multi-agents pour un workflow clinique : collecte patient, synthèse et validation par le médecin.",
      en: "Multi-agent system for a clinical workflow: patient intake, summary and physician validation."
    },
    context: {
      fr: "Dans les cabinets et cliniques, le temps passé par les médecins à collecter les antécédents et rédiger les comptes-rendus empiète sur le temps consacré au diagnostic et au soin direct du patient.",
      en: "In clinical practices, the time spent by physicians on patient intake and report drafting detracts from hands-on diagnosis and patient care."
    },
    problem: {
      fr: "Structurer et accélérer la prise d'informations médicales sans jamais substituer l'IA à la décision médicale, en garantissant un contrôle humain systématique avant validation finale.",
      en: "Structure and accelerate medical intake without ever replacing clinical judgment, ensuring mandatory human-in-the-loop verification before final sign-off."
    },
    solution: {
      fr: "Une architecture multi-agents orchestrée avec LangGraph : un agent d'accueil collecte les symptômes, un agent analyste synthétise le dossier clinique, et une interface dédiée permet au praticien de réviser, corriger et valider le rapport généré.",
      en: "A multi-agent architecture orchestrated with LangGraph: an intake agent collects symptoms, an analyst agent synthesizes clinical summaries, and a dedicated interface lets the physician review, amend, and approve the generated report."
    },
    features: [
      {
        fr: "Workflow clinique multi-agents (collecte patient, synthèse, validation médecin)",
        en: "Multi-agent clinical workflow (patient intake, summary, physician validation)"
      },
      {
        fr: "Génération de rapports médicaux structurés avec validation 'Human-in-the-loop'",
        en: "Structured medical report generation with human-in-the-loop validation"
      },
      {
        fr: "API FastAPI, protocole MCP et interface web réactive",
        en: "FastAPI API, Model Context Protocol (MCP) and reactive web UI"
      }
    ],
    arch: [
      "Frontend React",
      "Backend FastAPI + MCP",
      "Orchestration LangGraph / LangChain",
      "Modèle LLM Médical"
    ],
    results: {
      fr: "• Workflow de pré-consultation automatisé réduisant de 40-50 % le temps de collecte des informations patient par le médecin.\n• Génération automatique de rapports médicaux structurés (antécédents, symptômes, observations) en moins de 30 secondes.\n• Traçabilité complète de chaque étape du pipeline multi-agents, garantissant l'auditabilité du processus clinique.\n• Validation systématique 'Human-in-the-loop' : aucun rapport n'est finalisé sans l'approbation explicite du praticien.\n• Architecture extensible via le protocole MCP, permettant l'intégration future de bases de connaissances médicales spécialisées.",
      en: "• Automated pre-consultation workflow cutting patient information gathering time by 40-50% for physicians.\n• Automatic generation of structured medical reports (history, symptoms, observations) in under 30 seconds.\n• Full traceability of every multi-agent pipeline step, ensuring clinical process auditability.\n• Systematic human-in-the-loop validation: no report is finalized without explicit physician approval.\n• Extensible architecture via MCP protocol, enabling future integration of specialized medical knowledge bases."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/medical-multi-agent/Screenshot 2026-10-19 160606.png"
    ]
  },
  {
    id: "hr-app",
    name: "HR — Gestion des Ressources Humaines",
    cat: "desktop",
    period: "01/2026",
    featured: true,
    tech: [
      "Java",
      "JavaFX",
      "MySQL",
      "MVC"
    ],
    desc: {
      fr: "Application desktop de gestion des employés et des congés en architecture MVC 3-tiers.",
      en: "Desktop application managing employees and leave, built on a 3-tier MVC architecture."
    },
    context: {
      fr: "Les PME gèrent encore fréquemment leurs effectifs, présences et demandes de congés sur des feuilles de calcul dispersées, sources d'erreurs et de perte de temps.",
      en: "Small and medium businesses often manage staff, attendance, and leave requests via fragmented spreadsheets, leading to errors and delays."
    },
    problem: {
      fr: "Fournir un outil logiciel robuste, hors-ligne et centralisé permettant aux gestionnaires RH de piloter les dossiers du personnel et le cycle de validation des congés avec traçabilité.",
      en: "Deliver a robust, offline-first, centralized software tool enabling HR managers to oversee personnel records and track leave approvals."
    },
    solution: {
      fr: "Une application desktop complète développée en Java/JavaFX respectant une architecture MVC 3-tiers stricte, intégrant authentification par rôles, formulaires dynamiques et exports de données.",
      en: "A comprehensive desktop application in Java/JavaFX following strict 3-tier MVC architecture, featuring role-based authentication, dynamic forms, and data export."
    },
    features: [
      {
        fr: "Gestion des employés et des congés (CRUD, workflow de validation hiérarchique)",
        en: "Employee and leave management (CRUD, hierarchical approval workflow)"
      },
      {
        fr: "Tableaux de bord statistiques RH et import/export CSV",
        en: "HR statistical dashboards and CSV import/export"
      },
      {
        fr: "Espaces séparés pour l'administration et la consultation employé",
        en: "Segregated spaces for administration and employee consultation"
      }
    ],
    arch: [
      "Interface JavaFX (CSS/FXML)",
      "Couche Métier Java (MVC)",
      "Accès Données JDBC",
      "Base relationnelle MySQL"
    ],
    results: {
      fr: "• Centralisation complète des dossiers du personnel avec historique des modifications et piste d'audit.\n• Réduction estimée de 60 % des délais de traitement des demandes de congés grâce au workflow de validation hiérarchique automatisé.\n• Tableaux de bord statistiques offrant une vue instantanée des effectifs, taux d'absentéisme et soldes de congés.\n• Architecture MVC 3-tiers stricte garantissant la maintenabilité et l'évolutivité du code source.\n• Exports CSV permettant l'interopérabilité avec les outils comptables et de paie existants.",
      en: "• Full centralization of personnel records with modification history and audit trail.\n• Estimated 60% reduction in leave request processing time through automated hierarchical approval workflow.\n• Statistical dashboards providing instant visibility into headcount, absenteeism rates, and leave balances.\n• Strict 3-tier MVC architecture ensuring long-term code maintainability and scalability.\n• CSV exports enabling interoperability with existing payroll and accounting tools."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/hr-app/admin/Screenshot 2026-10-19 162134.png",
      "/projects/hr-app/admin/Screenshot 2026-10-19 162141.png",
      "/projects/hr-app/admin/Screenshot 2026-10-19 162147.png",
      "/projects/hr-app/admin/Screenshot 2026-10-19 162154.png",
      "/projects/hr-app/admin/Screenshot 2026-10-19 162200.png",
      "/projects/hr-app/admin/Screenshot 2026-10-19 162206.png",
      "/projects/hr-app/employe/Screenshot 2026-10-19 162417.png",
      "/projects/hr-app/employe/Screenshot 2026-10-19 162425.png",
      "/projects/hr-app/employe/Screenshot 2026-10-19 162520.png"
    ]
  },
  {
    id: "appli-recette",
    name: "AppliRecette — Application mobile de recettes",
    cat: "mobile",
    period: "01/2026",
    featured: true,
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase"
    ],
    desc: {
      fr: "Application mobile de partage de recettes avec commentaires, favoris et modération.",
      en: "Mobile recipe-sharing app with comments, favourites and moderation."
    },
    context: {
      fr: "Les passionnés de cuisine recherchent une expérience mobile fluide et sociale pour découvrir, sauvegarder et partager des recettes du quotidien.",
      en: "Home cooking enthusiasts look for a seamless social mobile experience to discover, bookmark, and share daily recipes."
    },
    problem: {
      fr: "Concevoir une application mobile réactive avec gestion fine des médias, synchronisation cloud et gestion des droits utilisateurs/modérateurs.",
      en: "Build a responsive mobile app with media management, cloud synchronization, and user/moderator role management."
    },
    solution: {
      fr: "Application mobile cross-platform avec React Native et Expo, connectée à une API REST Node.js/Express, MongoDB pour les données et Firebase pour l'authentification et le stockage des images.",
      en: "Cross-platform mobile application built with React Native and Expo, backed by a Node.js/Express REST API, MongoDB, and Firebase Auth & Storage."
    },
    features: [
      {
        fr: "Partage de recettes (CRUD), commentaires, favoris et modération",
        en: "Recipe sharing (CRUD), comments, favourites and moderation"
      },
      {
        fr: "Authentification sécurisée et gestion des rôles Utilisateur / Administrateur",
        en: "Secure authentication and User / Admin role management"
      },
      {
        fr: "Recherche par ingrédients et filtrage par catégorie",
        en: "Ingredient-based search and category filtering"
      }
    ],
    arch: [
      "Client Mobile React Native (Expo)",
      "API REST Node.js / Express",
      "Authentification Firebase Auth",
      "Base de données NoSQL MongoDB"
    ],
    results: {
      fr: "• Application cross-platform testée avec succès sur Android et iOS, assurant une expérience utilisateur homogène.\n• Synchronisation instantanée des recettes, commentaires et favoris grâce à MongoDB et Firebase Storage.\n• Système de modération intégré permettant aux administrateurs de valider ou supprimer les contenus signalés.\n• Recherche performante par ingrédients et filtrage par catégorie, réduisant le temps de découverte de recettes.\n• Authentification sécurisée via Firebase Auth avec gestion fine des rôles (utilisateur standard, administrateur).",
      en: "• Cross-platform app successfully tested on Android and iOS, ensuring a consistent user experience.\n• Instant synchronization of recipes, comments, and favourites powered by MongoDB and Firebase Storage.\n• Built-in moderation system allowing admins to approve or remove flagged content.\n• Efficient ingredient-based search and category filtering, reducing recipe discovery time.\n• Secure authentication via Firebase Auth with granular role management (standard user, administrator)."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/appli-recette/Screenshot 2026-10-19 153449.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153501.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153508.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153518.png"
    ]
  },
  {
    id: "stock-it",
    name: "Gestion de Stock IT — Application Web",
    cat: "web",
    period: "01/2026",
    featured: false,
    tech: [
      "ASP.NET Core 9.0",
      "Entity Framework Core",
      "SQL Server"
    ],
    desc: {
      fr: "Application web de gestion d'inventaire avec détection d'anomalies et notifications temps réel.",
      en: "Web inventory-management app with anomaly detection and real-time notifications."
    },
    context: {
      fr: "Le parc matériel informatique d'une entreprise requiert un suivi minutieux des affectations, des stocks de pièces détachées et des réapprovisionnements.",
      en: "An organization's IT equipment fleet requires rigorous tracking of device assignments, spare part stocks, and replenishments."
    },
    problem: {
      fr: "Éviter les ruptures de stock critiques et les pertes de matériel grâce à une gestion proactive et automatisée de l'inventaire.",
      en: "Prevent critical stockouts and equipment loss through proactive, automated inventory management."
    },
    solution: {
      fr: "Plateforme web robuste développée en ASP.NET Core 9.0 et Entity Framework Core, intégrant des alertes sur seuils de réapprovisionnement et suivi des mouvements.",
      en: "Robust web platform built with ASP.NET Core 9.0 and Entity Framework Core, featuring automated low-stock alerts and movement tracking."
    },
    features: [
      {
        fr: "Gestion d'inventaire et des mouvements de stock",
        en: "Inventory and stock-movement management"
      },
      {
        fr: "Alertes automatiques et détection d'anomalies de stock",
        en: "Automated alerts and stock anomaly detection"
      },
      {
        fr: "Dashboard analytique et notifications",
        en: "Analytical dashboard and notifications"
      }
    ],
    arch: [
      "ASP.NET Core 9.0 MVC",
      "Entity Framework Core (ORM)",
      "Microsoft SQL Server"
    ],
    results: {
      fr: "• Centralisation de l'ensemble des actifs informatiques (matériel, logiciels, licences) dans une base de données unique et fiable.\n• Alertes automatiques de réapprovisionnement déclenchées dès l'atteinte des seuils critiques, évitant les ruptures de stock.\n• Détection d'anomalies (écarts d'inventaire, mouvements suspects) grâce à des règles métier configurables.\n• Réduction estimée de 50 % du temps consacré aux audits d'inventaire manuels.\n• Dashboard analytique offrant une vue temps réel de l'état du parc IT avec indicateurs clés (taux de rotation, coût par poste).",
      en: "• Full centralization of IT assets (hardware, software, licenses) in a single reliable database.\n• Automatic restocking alerts triggered when critical thresholds are reached, preventing stockouts.\n• Anomaly detection (inventory discrepancies, suspicious movements) via configurable business rules.\n• Estimated 50% reduction in time spent on manual inventory audits.\n• Analytical dashboard providing real-time IT fleet status with key indicators (turnover rate, cost per workstation)."
    },
    github: null,
    demo: null
  },
  {
    id: "excursions",
    name: "Application de gestion d'excursions",
    cat: "mobile",
    period: "05/2025",
    featured: false,
    tech: [
      "Flutter",
      "Google Maps",
      "Notifications push"
    ],
    desc: {
      fr: "Application mobile Flutter de gestion d'événements et d'inscriptions (PFA).",
      en: "Flutter mobile app for event and registration management (PFA project)."
    },
    context: {
      fr: "L'organisation d'excursions et de sorties de groupe nécessite une coordination étroite entre organisateurs et participants.",
      en: "Organizing group excursions requires close coordination between trip leaders and attendees."
    },
    problem: {
      fr: "Simplifier la découverte d'itinéraires touristiques, les inscriptions et la communication d'itinéraires en direct.",
      en: "Simplify tour discovery, participant registration, and live itinerary sharing."
    },
    solution: {
      fr: "Application mobile multiplateforme en Flutter avec intégration Google Maps pour la géolocalisation et notifications push en temps réel.",
      en: "Cross-platform Flutter mobile app integrating Google Maps for geolocation and real-time push notifications."
    },
    features: [
      {
        fr: "Gestion d'événements, parcours et inscriptions",
        en: "Event, route, and registration management"
      },
      {
        fr: "Intégration Google Maps et notifications push",
        en: "Google Maps integration and push notifications"
      }
    ],
    arch: [
      "Application Flutter (Dart)",
      "Services Google Maps API",
      "Service de notifications push"
    ],
    results: {
      fr: "• Application mobile multiplateforme fonctionnelle, déployée et testée sur Android et iOS via Flutter.\n• Intégration Google Maps permettant aux participants de suivre l'itinéraire en temps réel et de se géolocaliser.\n• Notifications push instantanées informant les participants des changements d'horaires ou de points de rendez-vous.\n• Gestion simplifiée des inscriptions avec confirmation automatique et suivi du nombre de places disponibles.\n• Interface intuitive réduisant les frictions de coordination entre organisateurs et participants.",
      en: "• Fully functional cross-platform mobile app deployed and tested on Android and iOS via Flutter.\n• Google Maps integration enabling participants to follow itineraries in real time and share their geolocation.\n• Instant push notifications alerting participants to schedule changes or meeting point updates.\n• Simplified registration management with automatic confirmation and available-seat tracking.\n• Intuitive interface reducing coordination friction between organizers and participants."
    },
    github: null,
    demo: null
  },
  {
    id: "bibliotheque",
    name: "Système de gestion de bibliothèque",
    cat: "web",
    period: "05/2025",
    featured: false,
    tech: [
      "Django",
      "Python",
      "SQLite"
    ],
    desc: {
      fr: "Système de gestion de bibliothèque développé avec Django.",
      en: "Library management system built with Django."
    },
    context: {
      fr: "Automatisation du prêt et du retour d'ouvrages pour structures éducatives et associatives.",
      en: "Automating book loans and returns for educational and community institutions."
    },
    problem: {
      fr: "Remplacer les registres papier par un système web fiable pour le catalogage et le suivi des emprunts.",
      en: "Replace manual registers with a dependable web system for cataloguing and loan tracking."
    },
    solution: {
      fr: "Application web propulsée par le framework Django avec interface d'administration sécurisée et catalogue public.",
      en: "Web application powered by Django with secure admin panel and public search catalogue."
    },
    features: [
      {
        fr: "Gestion du catalogue de livres, des adhérents et des emprunts",
        en: "Book catalogue, member, and loan management"
      },
      {
        fr: "Suivi des retards et historique des transactions",
        en: "Overdue tracking and transaction history"
      }
    ],
    arch: [
      "Django (Python)",
      "Templates HTML / CSS",
      "Base de données SQLite"
    ],
    results: {
      fr: "• Système fiable gérant sans accroc le catalogage et le suivi de plusieurs centaines d'ouvrages et adhérents.\n• Automatisation complète du cycle de prêt/retour avec calcul automatique des retards et historique des transactions.\n• Interface d'administration sécurisée permettant la gestion des livres, adhérents et emprunts depuis n'importe quel navigateur.\n• Catalogue public consultable avec recherche par titre, auteur et catégorie, accessible sans authentification.\n• Déploiement simplifié grâce au framework Django et à la base SQLite embarquée (aucune configuration serveur complexe).",
      en: "• Reliable system smoothly handling cataloguing and tracking of hundreds of books and members.\n• Full automation of the loan/return cycle with automatic overdue calculation and transaction history.\n• Secure admin interface for managing books, members, and loans from any web browser.\n• Publicly accessible search catalogue by title, author, and category, requiring no authentication.\n• Simplified deployment thanks to Django framework and embedded SQLite database (no complex server setup)."
    },
    github: null,
    demo: null
  },
  {
    id: "site-telephones",
    name: "Site de vente de téléphones",
    cat: "web",
    period: "01/2025",
    featured: false,
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    desc: {
      fr: "Site web e-commerce de vente de smartphones en HTML, CSS et JavaScript.",
      en: "E-commerce smartphone sales website built with HTML, CSS, and JavaScript."
    },
    context: {
      fr: "Projet fondamental de développement web explorant les mécaniques d'une boutique en ligne moderne.",
      en: "Foundational web development project exploring the core mechanics of a modern e-commerce storefront."
    },
    problem: {
      fr: "Créer une boutique responsive avec catalogue filtrable, panier dynamique et fiches produits détaillées sans framework lourd.",
      en: "Build a responsive shop with filterable catalogue, dynamic cart, and product pages without heavy frameworks."
    },
    solution: {
      fr: "Interface épurée en HTML5/CSS3/JavaScript vanilla avec gestion du panier via LocalStorage et calculs dynamiques de commandes.",
      en: "Clean vanilla HTML5/CSS3/JavaScript interface with LocalStorage cart persistence and dynamic order calculations."
    },
    features: [
      {
        fr: "Catalogue avec filtres par marque, prix et caractéristiques",
        en: "Catalogue with filters by brand, price, and specs"
      },
      {
        fr: "Panier d'achats interactif avec mise à jour en direct du total",
        en: "Interactive shopping cart with live total update"
      }
    ],
    arch: [
      "Structure HTML5 sémantique",
      "Styles CSS3 responsives",
      "Logique JavaScript Vanilla"
    ],
    results: {
      fr: "• Boutique en ligne 100 % responsive, offrant une expérience fluide sur mobile, tablette et desktop.\n• Panier d'achats persistant via LocalStorage, conservant les articles même après fermeture du navigateur.\n• Catalogue filtrable par marque, gamme de prix et caractéristiques techniques, facilitant la recherche produit.\n• Fiches produits détaillées avec galerie d'images, spécifications et calcul dynamique du total de commande.\n• Projet réalisé sans aucun framework, démontrant une maîtrise solide des fondamentaux HTML5, CSS3 et JavaScript vanilla.",
      en: "• Fully responsive online shop delivering a seamless experience across mobile, tablet, and desktop.\n• Persistent shopping cart via LocalStorage, preserving items even after browser closure.\n• Filterable catalogue by brand, price range, and technical specs, streamlining product discovery.\n• Detailed product pages with image gallery, specifications, and dynamic order total calculation.\n• Project built without any framework, demonstrating strong command of HTML5, CSS3, and vanilla JavaScript fundamentals."
    },
    github: null,
    demo: null,
    screenshots: [
      "/projects/site-telephones/Screenshot 2026-10-19 152806.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152831.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152843.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152856.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152907.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152915.png"
    ]
  }
]
