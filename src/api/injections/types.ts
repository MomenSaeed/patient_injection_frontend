import { Patient } from '../patients/types'

export interface Injection {
  id: string
  dose: number
  drugName: string
  lotNumber: string
  patientId?: string
  patient?: Patient
  createdAt: string
}
