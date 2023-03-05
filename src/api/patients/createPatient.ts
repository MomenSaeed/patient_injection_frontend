import {
  useMutation,
  UseMutationResult,
  UseMutationOptions,
  MutationKey,
} from '@tanstack/react-query'
import { graphqlRequestClient } from '../../utils/requestClient'
import { Patient } from './types'

export interface CreatePatientResult {
  createPatient: {
    patient: Patient
  }
}
export const queryName = 'createPatient'

export const query = `
  mutation createPatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
      patient {
        id
        apiKey
        fullName
        createdAt
      }
    }
  }
`

export const createPatientMutation = (
  options?: UseMutationOptions<CreatePatientResult, Error, any, MutationKey>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(
    ['create patient'],
    async (input) => graphqlRequestClient.request(query, { input }),
    options
  ) as UseMutationResult<CreatePatientResult, unknown>
}
