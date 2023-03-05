import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query'
import { graphqlRequestClient } from '../../utils/requestClient'
import { Patient } from './types'

export interface CurrentPatientResult {
  currentPatient: Patient
}
export const queryName = 'currentPatient'

export const query = `
  query patient {
    currentPatient {
      id
      apiKey
      fullName
      createdAt
    }
  }
`

export const queryCurrentPatient = (
  options?: UseQueryOptions<unknown, unknown, CurrentPatientResult, string[]>
): UseQueryResult<CurrentPatientResult, unknown> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ['currentPatient'],
    async () => graphqlRequestClient.request(query, {}),
    options
  )
}
