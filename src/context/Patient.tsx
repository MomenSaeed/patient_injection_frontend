import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CurrentPatientResult,
  queryCurrentPatient,
} from '../api/patients/currentPatient'
import { Patient } from '../api/patients/types'
import { setClientApiKey } from '../utils/requestClient'
import { useLocalStorage } from '../utils/useLocalStorage'

export interface PatientContextType {
  currentPatient: Patient | null
  setCurrentPatient: React.Dispatch<React.SetStateAction<Patient | null>>
  patientApiKey: string | null
  setPatientApiKey: React.Dispatch<React.SetStateAction<string | null>>
  refetchPatient: () => void
  logout: () => void
  isLoading?: boolean
}

export const PatientContext = React.createContext({} as PatientContextType)

interface PatientProviderProps {
  children: React.ReactNode
}

export const PatientProvider: React.FC<PatientProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate()
  const [currentPatient, setCurrentPatient] = React.useState<Patient | null>(
    null
  )
  const [patientApiKey, setPatientApiKey] = useLocalStorage<string | null>(
    'patientApiKey',
    null
  )

  const logout = React.useCallback(() => {
    setClientApiKey('')
    setCurrentPatient(null)
    setPatientApiKey(null)
    navigate('/login')
  }, [navigate, setPatientApiKey])

  const { data, isLoading, refetch } = queryCurrentPatient({
    onError: logout,
    onSuccess: (response: CurrentPatientResult) => {
      setCurrentPatient(response.currentPatient)
      navigate('/')
    },
  })

  React.useEffect(() => {
    setClientApiKey(patientApiKey || '')
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientApiKey])

  React.useEffect(() => {
    setCurrentPatient(data?.currentPatient || null)
  }, [data])

  const value = {
    currentPatient,
    setCurrentPatient,
    patientApiKey,
    setPatientApiKey,
    refetchPatient: refetch,
    logout,
    isLoading,
  }
  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  )
}
