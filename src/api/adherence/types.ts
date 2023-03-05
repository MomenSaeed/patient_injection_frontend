export interface InjectionGraph {
  date: string
  day: number
  month: string
  year: number
  weekDay: string
  expectedInjection: boolean
  hasInjection: boolean
}

export interface AdherenceScore {
  adherenceScore: number
  expectedInjection: number
  actualInjection: number
  onTimeInjection: number
  injectionsGraph: InjectionGraph[]
}
