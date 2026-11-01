export interface L { fr: string; en: string }
export type Category = 'ia' | 'web' | 'mobile' | 'desktop'
export interface Project { id: string; name: string; cat: Category; period: string; featured: boolean; tech: string[]; desc: L; features: L[]; arch: string[] | null; github: string | null; demo: string | null; screenshots?: string[] }
export type CertStatus = 'completed' | 'in_progress' | 'planned'
export interface Certification {
  id: string
  name: string
  org: string
  file?: string
  status?: CertStatus
  duration?: string
  desc?: L
  skills?: string[]
  objective?: L
  link?: string
}
export interface Experience { id: string; company: string; role: L; period: string; place: string; tasks: L[]; tech: string[]; final: L }
export interface SkillGroup { title: L; items: L[] }
