export const environment = {
  production: true,
  api:"http://127.0.0.1:8000/api/ODC_FIL_ROUGE/"
};

export interface Response<T>{
  data:T
  status:number
  message:string
}
export interface Utilisateur{
  status:number
  message:string
  token:string
  data:User
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
}
export interface Info{
  email:string
  password:string
}