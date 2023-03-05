import React from 'react'
import { useNavigate } from 'react-router-dom'
import { queryCurrentPatient } from '../api/patient/currentPatient'
import { Patient } from '../api/patient/types'
import { setClientApiKey } from '../core/requestClient'
import { useLocalStorage } from '../utils/useLocalStorage'

export interface PatientContextType {
  currentPatient: Patient | null
  setCurrentPatient: React.Dispatch<React.SetStateAction<Patient | null>>
  patientApiKey: string | null
  setPatientApiKey: React.Dispatch<React.SetStateAction<string | null>>
  refetch: () => void
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
    enabled: false,
    onError: logout,
  })

  React.useEffect(() => {
    setClientApiKey(patientApiKey || '')
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientApiKey])

  React.useEffect(() => {
    setCurrentPatient(data?.currentPatient || null)
  }, [data])

  React.useEffect(() => {
    if (currentPatient) {
      setPatientApiKey(currentPatient.apiKey)
    }
  }, [currentPatient, setPatientApiKey])

  const value = {
    currentPatient,
    setCurrentPatient,
    patientApiKey,
    setPatientApiKey,
    refetch,
    logout,
    isLoading,
  }
  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  )
}
