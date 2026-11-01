import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { L } from './data/types'
export type Lang = 'fr' | 'en'
const ui = {
  fr: { about:'À propos', projects:'Projets', skills:'Compétences', experience:'Expérience', certs:'Certifications', contact:'Contact', cv:'Télécharger le CV', openCv:'Voir le CV',
    open:'OUVERT AUX OPPORTUNITÉS PFE · 2027', explore:'Découvrir mes projets', heroLine:'Stage PFE de 6 mois — 2027', aboutT:'À propos de moi', skillsT:'Compétences techniques',
    featured:'Projets en vedette', allProjects:'Tous les projets', allCerts:'Toutes les certifications', viewExp:'Voir l\'expérience', viewCase:'Voir l\'étude de cas', viewCert:'Voir le certificat',
    expT:'Expérience professionnelle', certT:'Certifications', contactT:'Travaillons ensemble', contactP:'Je recherche un stage PFE de 6 mois en 2027. Écrivez-moi pour en discuter.',
    soft:'Soft skills', langs:'Langues', edu:'Formation', all:'Tous', back:'Retour', home:'Accueil', tech:'Technologies', features:'Fonctionnalités', arch:'Architecture',
    shot:'Capture d\'écran à remplacer', missing:'Information à compléter', projectEnd:'Projet de fin de stage', tasks:'Missions', openCert:'Ouvrir le certificat', dlCert:'Télécharger le certificat',
    certMissing:'Aucun PDF trouvé. Place le fichier dans public/certificat/', form:'Formulaire (ouvre directement Gmail avec votre message pré-rempli)', name:'Nom', email:'Email', msg:'Message', send:'Préparer l\'email',
    nf:'Page introuvable', nfp:'Cette page n\'existe pas.', ph:'[PLACEHOLDER — INFORMATION TO BE PROVIDED]', foot:'Portfolio personnel', cat_ia:'IA & Data', cat_web:'Web', cat_mobile:'Mobile', cat_desktop:'Desktop',
    projIntro:'Une sélection de projets académiques et de stage, de l\'IA générative au développement mobile.', ctx:'Contexte', academic:'Projet académique', gh:'Code source', demo:'Démo en ligne', introCert:'Formations suivies en ligne.', cvNote:'Place ton CV dans public/cv/', gallery:'Captures d\'écran', zoom:'Agrandir', inProgress:'En cours', planned:'Planifiée', completed:'Obtenue', duration:'Durée estimée', targetSkills:'Compétences ciblées', objective:'Objectif', officialPath:'Voir le parcours officiel Oracle' },
  en: { about:'About', projects:'Projects', skills:'Skills', experience:'Experience', certs:'Certifications', contact:'Contact', cv:'Download CV', openCv:'View CV',
    open:'OPEN TO PFE OPPORTUNITIES · 2027', explore:'Explore My Work', heroLine:'6-month PFE internship — 2027', aboutT:'A little about me', skillsT:'Technical skills',
    featured:'Featured projects', allProjects:'View All Projects', allCerts:'View All Certifications', viewExp:'View Experience', viewCase:'View Case Study', viewCert:'View Certificate',
    expT:'Professional experience', certT:'Certifications', contactT:'Let\'s work together', contactP:'I\'m looking for a 6-month PFE internship in 2027. Get in touch to discuss it.',
    soft:'Soft skills', langs:'Languages', edu:'Education', all:'All', back:'Back', home:'Home', tech:'Technologies', features:'Features', arch:'Architecture',
    shot:'Screenshot to be replaced', missing:'Information to be provided', projectEnd:'End-of-internship project', tasks:'Responsibilities', openCert:'Open Certificate', dlCert:'Download Certificate',
    certMissing:'No PDF found. Put the file in public/certificat/', form:'Form (opens Gmail directly with your pre-filled message)', name:'Name', email:'Email', msg:'Message', send:'Prepare email',
    nf:'Page not found', nfp:'This page does not exist.', ph:'[PLACEHOLDER — INFORMATION TO BE PROVIDED]', foot:'Personal portfolio', cat_ia:'AI & Data', cat_web:'Web', cat_mobile:'Mobile', cat_desktop:'Desktop',
    projIntro:'A selection of academic and internship projects, from generative AI to mobile development.', ctx:'Context', academic:'Academic project', gh:'Source code', demo:'Live demo', introCert:'Online courses completed.', cvNote:'Put your CV in public/cv/', gallery:'Screenshots', zoom:'Enlarge', inProgress:'In progress', planned:'Planned', completed:'Completed', duration:'Estimated duration', targetSkills:'Targeted skills', objective:'Objective', officialPath:'View official Oracle learning path' },
}
type Ctx = { lang: Lang; setLang: (l: Lang) => void; u: typeof ui.fr; t: (x: L) => string }
const C = createContext<Ctx>(null as unknown as Ctx)
export const useI18n = () => useContext(C)
export function I18n({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'fr')
  useEffect(() => { localStorage.setItem('lang', lang); document.documentElement.lang = lang }, [lang])
  return <C.Provider value={{ lang, setLang, u: ui[lang], t: (x) => x[lang] }}>{children}</C.Provider>
}
export function useTitle(s: string) { useEffect(() => { document.title = s + ' — Douaa El Louadghiri El Idrissi' }, [s]) }
