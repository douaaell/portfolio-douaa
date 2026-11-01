import type { Project } from './types'
export const projects: Project[] = [
  {
    "id": "cselec-assistant",
    "name": "CSELEC Assistant — Assistant IA pour techniciens en électricité",
    "cat": "ia",
    "period": "07/2026",
    "featured": true,
    "tech": [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "ChromaDB",
      "SQLite",
      "LangChain",
      "Ollama (Mistral)"
    ],
    "desc": {
      "fr": "Assistant intelligent basé sur le RAG pour les techniciens en électricité. Import de documents PDF techniques, indexation vectorielle (ChromaDB) et réponses sourcées en langage naturel (projet de fin de stage — CSELEC).",
      "en": "RAG-based intelligent assistant for electricity technicians. Technical PDF import, vector indexing (ChromaDB) and sourced natural-language answers (end-of-internship project — CSELEC)."
    },
    "features": [
      {
        "fr": "Import et indexation automatique de documents PDF (notices, catalogues, guides) dans ChromaDB",
        "en": "Automatic import and indexing of PDF documents (manuals, catalogues, procedure guides) into ChromaDB"
      },
      {
        "fr": "Réponses en langage naturel avec sources traçables (nom du document, page, extrait)",
        "en": "Natural-language answers with traceable sources (document name, page number, excerpt)"
      },
      {
        "fr": "LLM local via Ollama (Mistral) avec possibilité de basculer vers OpenAI (GPT)",
        "en": "Local LLM via Ollama (Mistral) with option to switch to OpenAI (GPT)"
      },
      {
        "fr": "Interface web conversationnelle avec consultation de l'historique",
        "en": "Conversational web interface with chat history"
      }
    ],
    "arch": [
      "React + TypeScript",
      "FastAPI (Python)",
      "SQLite + ChromaDB"
    ],
    "github": null,
    "demo": null,
    "screenshots": [
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
    "id": "ai-logistics",
    "name": "AI Logistics Optimization Platform",
    "cat": "ia",
    "period": "05/2026",
    "featured": true,
    "tech": [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "MySQL"
    ],
    "desc": {
      "fr": "Plateforme web full-stack d'optimisation des tournées de livraison, avec prédiction des retards (PFA).",
      "en": "Full-stack web platform for delivery route optimisation, with delay prediction (PFA project)."
    },
    "features": [
      {
        "fr": "Optimisation des tournées (VRP) : OR-Tools, algorithmes génétiques, apprentissage par renforcement",
        "en": "Route optimisation (VRP): OR-Tools, genetic algorithms, reinforcement learning"
      },
      {
        "fr": "Modèle de Machine Learning pour la prédiction des retards (trafic, météo, heure de pointe)",
        "en": "Machine Learning model predicting delays (traffic, weather, peak hours)"
      },
      {
        "fr": "Benchmark hybride des algorithmes (distance, temps, coût)",
        "en": "Hybrid benchmark of the algorithms (distance, time, cost)"
      },
      {
        "fr": "Dashboard interactif (Admin / Operator / Client) avec visualisation et simulation",
        "en": "Interactive dashboard (Admin / Operator / Client) with visualisation and simulation"
      },
      {
        "fr": "Amélioration des performances",
        "en": "Performance improvements"
      }
    ],
    "arch": [
      "React + TypeScript",
      "FastAPI (Python)",
      "MySQL"
    ],
    "github": null,
    "demo": null,
    "screenshots": [
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
    "id": "medical-multi-agent",
    "name": "Medical Multi-Agent System with LangGraph",
    "cat": "ia",
    "period": "05/2026",
    "featured": true,
    "tech": [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "MCP",
      "React"
    ],
    "desc": {
      "fr": "Système multi-agents pour un workflow clinique : collecte patient, synthèse et validation par le médecin.",
      "en": "Multi-agent system for a clinical workflow: patient intake, summary and physician validation."
    },
    "features": [
      {
        "fr": "Workflow clinique multi-agents (collecte patient, synthèse, validation médecin)",
        "en": "Multi-agent clinical workflow (patient intake, summary, physician validation)"
      },
      {
        "fr": "Génération de rapports médicaux structurés avec un LLM",
        "en": "Structured medical report generation with an LLM"
      },
      {
        "fr": "API FastAPI, intégration MCP et interface frontend",
        "en": "FastAPI API, MCP integration and frontend interface"
      }
    ],
    "arch": [
      "React",
      "FastAPI + MCP",
      "LangGraph / LangChain"
    ],
    "github": null,
    "demo": null,
    "screenshots": [
      "/projects/medical-multi-agent/Screenshot 2026-10-19 160606.png"
    ]
  },
  {
    "id": "hr-app",
    "name": "HR — Gestion des Ressources Humaines",
    "cat": "desktop",
    "period": "01/2026",
    "featured": true,
    "tech": [
      "Java",
      "JavaFX",
      "MySQL"
    ],
    "desc": {
      "fr": "Application desktop de gestion des employés et des congés en architecture MVC 3-tiers.",
      "en": "Desktop application managing employees and leave, built on a 3-tier MVC architecture."
    },
    "features": [
      {
        "fr": "Gestion des employés et des congés (CRUD, workflow de validation)",
        "en": "Employee and leave management (CRUD, approval workflow)"
      },
      {
        "fr": "Tableaux de bord et import/export CSV",
        "en": "Dashboards and CSV import/export"
      }
    ],
    "arch": [
      "JavaFX",
      "Java (MVC)",
      "MySQL"
    ],
    "github": null,
    "demo": null,
    "screenshots": [
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
    "id": "appli-recette",
    "name": "AppliRecette — Application mobile de recettes",
    "cat": "mobile",
    "period": "01/2026",
    "featured": true,
    "tech": [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase"
    ],
    "desc": {
      "fr": "Application mobile de partage de recettes avec commentaires, favoris et modération.",
      "en": "Mobile recipe-sharing app with comments, favourites and moderation."
    },
    "features": [
      {
        "fr": "Partage de recettes (CRUD), commentaires, favoris et modération",
        "en": "Recipe sharing (CRUD), comments, favourites and moderation"
      },
      {
        "fr": "Authentification et rôles USER / ADMIN",
        "en": "Authentication and USER / ADMIN roles"
      }
    ],
    "arch": [
      "React Native (Expo)",
      "Node.js / Express",
      "MongoDB"
    ],
    "github": null,
    "demo": null,
    "screenshots": [
      "/projects/appli-recette/Screenshot 2026-10-19 153449.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153501.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153508.png",
      "/projects/appli-recette/Screenshot 2026-10-19 153518.png"
    ]
  },
  {
    "id": "stock-it",
    "name": "Gestion de Stock IT — Application Web",
    "cat": "web",
    "period": "01/2026",
    "featured": false,
    "tech": [
      "ASP.NET Core 9.0",
      "Entity Framework Core",
      "SQL Server"
    ],
    "desc": {
      "fr": "Application web de gestion d'inventaire avec détection d'anomalies et notifications temps réel.",
      "en": "Web inventory-management app with anomaly detection and real-time notifications."
    },
    "features": [
      {
        "fr": "Gestion d'inventaire et des mouvements de stock",
        "en": "Inventory and stock-movement management"
      },
      {
        "fr": "Alertes et détection d'anomalies",
        "en": "Alerts and anomaly detection"
      },
      {
        "fr": "Dashboard et notifications temps réel",
        "en": "Dashboard and real-time notifications"
      }
    ],
    "arch": [
      "ASP.NET Core 9.0",
      "Entity Framework Core",
      "SQL Server"
    ],
    "github": null,
    "demo": null
  },
  {
    "id": "excursions",
    "name": "Application de gestion d'excursions",
    "cat": "mobile",
    "period": "05/2025",
    "featured": false,
    "tech": [
      "Flutter",
      "Google Maps",
      "Notifications push"
    ],
    "desc": {
      "fr": "Application mobile Flutter de gestion d'événements et d'inscriptions (PFA).",
      "en": "Flutter mobile app for event and registration management (PFA project)."
    },
    "features": [
      {
        "fr": "Gestion d'événements et inscriptions",
        "en": "Event and registration management"
      },
      {
        "fr": "Google Maps et notifications push",
        "en": "Google Maps and push notifications"
      }
    ],
    "arch": null,
    "github": null,
    "demo": null
  },
  {
    "id": "bibliotheque",
    "name": "Système de gestion de bibliothèque",
    "cat": "web",
    "period": "05/2025",
    "featured": false,
    "tech": [
      "Django"
    ],
    "desc": {
      "fr": "Système de gestion de bibliothèque développé avec Django.",
      "en": "Library management system built with Django."
    },
    "features": [],
    "arch": null,
    "github": null,
    "demo": null
  },
  {
    "id": "site-telephones",
    "name": "Site de vente de téléphones",
    "cat": "web",
    "period": "01/2025",
    "featured": false,
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "desc": {
      "fr": "Site web de vente de téléphones en HTML, CSS et JavaScript.",
      "en": "Phone-shop website in HTML, CSS and JavaScript."
    },
    "features": [],
    "arch": null,
    "github": null,
    "demo": null,
    "screenshots": [
      "/projects/site-telephones/Screenshot 2026-10-19 152806.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152831.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152843.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152856.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152907.png",
      "/projects/site-telephones/Screenshot 2026-10-19 152915.png"
    ]
  }
]
