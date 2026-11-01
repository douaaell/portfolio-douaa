import type { Experience } from './types'
export const experiences: Experience[] = [
  {
    "id": "cselec",
    "company": "CSELEC",
    "role": {
      "fr": "Stagiaire en Intelligence Artificielle",
      "en": "Artificial Intelligence Intern"
    },
    "period": "03/07/2026 – 30/08/2026",
    "place": "Casablanca",
    "tasks": [
      {
        "fr": "Analyse et exploitation de documents techniques destinés aux techniciens en électricité",
        "en": "Analysis and use of technical documents for electrical technicians"
      },
      {
        "fr": "Conception et développement d'un assistant intelligent basé sur l'IA générative",
        "en": "Design and development of an intelligent assistant based on generative AI"
      },
      {
        "fr": "Mise en œuvre d'une approche RAG pour la recherche et la génération de réponses contextualisées",
        "en": "RAG approach for retrieval and contextualised answer generation"
      },
      {
        "fr": "Développement d'une interface web pour interagir avec l'assistant et consulter l'historique",
        "en": "Web interface to interact with the assistant and browse history"
      }
    ],
    "tech": [
      "Python",
      "FastAPI",
      "React",
      "ChromaDB",
      "LangChain",
      "Ollama",
      "SQLite"
    ],
    "final": {
      "fr": "Assistant intelligent basé sur l'IA générative pour l'assistance des techniciens en électricité",
      "en": "Generative-AI assistant supporting electrical technicians"
    }
  },
  {
    "id": "otis",
    "company": "Otis Elevator Maroc",
    "role": {
      "fr": "Stagiaire en Services IT",
      "en": "IT Services Intern"
    },
    "period": "01/07/2025 – 01/08/2025",
    "place": "Casablanca",
    "tasks": [
      {
        "fr": "Configuration et déploiement de PC HP et d'iPhones via AirWatch (MDM) au domaine Otis",
        "en": "Configuration and deployment of HP PCs and iPhones via AirWatch (MDM) on the Otis domain"
      },
      {
        "fr": "Support technique et résolution des incidents liés aux postes informatiques",
        "en": "Technical support and incident resolution on workstations"
      },
      {
        "fr": "Gestion de tâches administratives et techniques sur Excel",
        "en": "Administrative and technical tasks in Excel"
      },
      {
        "fr": "Assistance aux utilisateurs et maintenance du parc informatique",
        "en": "User assistance and IT equipment maintenance"
      }
    ],
    "tech": [
      "AirWatch",
      "Microsoft Excel"
    ],
    "final": {
      "fr": "Détection automatique de la langue et traduction en temps réel dans Microsoft Teams",
      "en": "Automatic language detection and real-time translation in Microsoft Teams"
    }
  }
]
