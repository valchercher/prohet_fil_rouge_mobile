export interface Response<T> {
    data:T
    status:number
    pagination:Pagination
    message:string
}
export interface Pagination{
    page_current: number
    per_page: number
    total:number
}
export interface All{
    cours:Cours[]
    modules:Module[]
    professeurs:User[]
    salles:Salle[]
    classes:Classe[]

}
export interface Cours{
    id:number
    nb_heure_global:number
    ecouler?:number
    annee_scolaire_semestre:AnneeScolaireSemestre
    annee_scolaire_classe:AnneeScolaireClasse
    module_user:ModuleUser
    etat:number
}
export interface AnneeScolaireSemestre{
    id:number
    annee:Annee
    semestre:Annee
}
export interface AnneeScolaireClasse{
    id:number
    annee:Annee
    classe:Classe
}
export interface ModuleUser{
    id:number
    user:User
    module:Module
}
export interface Annee{
    id:number
    libelle:string
    etat:string
}
export interface Module{
    id:number
    libelle:string
    professeur:User[]
}
export interface User{
    id: number
    nom: string
    prenom: string
    email: string
    specialite: string
    grade:string
    role: string
    date_naissance:string
    sexe:string
}
export interface ExcelUsers{
    users?:string,
}
export interface LegerResponse{
}
export interface Classe{
    id: number
    libelle:string
    etat: string
    filiere:filiere
    effectif:number
}
export interface filiere{
        id: number
        libelle: string
}
export interface Salle{
    id: number
    nom: string
    nombre: number
    numero: number
    etat: string
}
export const annee={
    id:2,
    libelle:"2023-2024",
    etat:'1'
}
export const semestre={
    id:1,
    libelle:"semestre 1",
    etat:"1"
}
export interface RequestCours{
    annee_id:number
    semestre_id:number
    module_id:number
    classe_id:number
    nb_heure_global:number
    user_id:number
}
export interface Etat{
    libelle:string

}
export const etat=[
    {
        libelle:"terminer"
    },
    {
        libelle:"en cours"
    }
]
export interface Sessions{
    id: number,
    date: string,
    heure_debut: string,
    heure_fin: string,
    valider_session: boolean,
    demande_annuler: boolean,
    motif:string
    background:string
    color:string
    cours:Cours
    salle:Salle
}
export interface AllSession{
    sessions:Sessions[],
}
export interface AllListePresence{
  listePresence:ListPresence[]
}
export interface ListPresence{
  id: number,
  date: string,
  emarge: number,
  inscription:Inscription
  sessions:Sessions
}
export interface Inscription{
  id:number
  annee_scolaire_classe:AnneeScolaireClasse,
  user_id:User
}
export interface Absence{
  session:Sessions
  inscription:Inscription
}
export interface ListerAbsence{
  absences:Absence[],
}
