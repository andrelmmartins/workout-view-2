export interface SignInData {
  mail: string;
  senha: string;
}

export interface SignInResponse {
  token: string;
  error: string;
}

export interface Profile {
  id: number;
  idAluno: number;
  idUser: number;
  objetivo: number;
  dificuldade: number;
  descricao: string;
  diaTipo: number;
  dataInicio: string;
  dataFim: string;
  status: number;
  nome: string;
  tipo: number;
  shareLink: string;
  arquivar: number;
  mostrarNoInicio: number;
  allowPdf: boolean;
  path: number;
  challenge: boolean;
  allowTimer: boolean;
}

export interface Workout {
  id: number;
  idUser: number;
  idAluno: number;
  idRoutine: number;
  nome: string;
  obs: string;
  diaTipo: number;
  status: number;
  circuito: boolean;
  shareLink: string;
  ordenacao: number;
}

export interface MyWorkouts extends Profile {
  workouts: Workout[];
}

export interface WorkoutDetails {
  id: number;
  nome: string;
  obs: string;
  exercs: IWorkoutSession[];
  routine_id: number;
  allowTimer: boolean;
  allowPdf: boolean;
}

export interface IWorkoutSession {
  id: number;
  order: number;
  exercises: Exercise[];
  type: number;
}

export interface Exercise {
  id: number;
  idUser: number;
  name: string;
  name_en_US?: string;
  name_es_ES?: string;
  alias?: string;
  series: ISeries[];
  ordenacao: number;
  status: number;
  idExercSession: number;
  isCombinado: boolean;
  urlMedia?: string;
  urlPoster?: string;
  mediaType: number;
  group?: ExerciseGroup;
}

export interface ISeries {
  id: number;
  idExercSession: number;
  tipo: number;
  repeticao?: string;
  carga?: string;
  intervalo: number;
  status: number;
  idExerc: number;
  ordenacao: number;
  tempo?: string;
  inclinacao?: string;
  obs?: string;
  exercicio?: ExerciseDetail;
}

export interface ExerciseDetail {
  id: number;
  idUser: number;
  name: string;
  name_en_US?: string;
  name_es_ES?: string;
  alias?: string;
  ordenacao: number;
  status: number;
  idExercSession: number;
  isCombinado: boolean;
  urlMedia?: string;
  urlPoster?: string;
  mediaType: number;
  group?: ExerciseGroup;
}

export interface ExerciseGroup {
  id: number;
  idUser: number;
  nome: string;
  alias?: string;
}
