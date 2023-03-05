import {
  useMutation,
  UseMutationResult,
  UseMutationOptions,
  MutationKey,
} from '@tanstack/react-query'
import { graphqlRequestClient } from '../../utils/requestClient'
import { Injection } from './types'

export interface CreateInjectionInput {
  dose: string
  drugName: string
  lotNumber: string
}

export interface CreateInjectionResult {
  createInjection: {
    injection: Injection
  }
}
export const queryName = 'createInjection'

export const query = `
  mutation createInjection($input: CreateInjectionInput!) {
    createInjection(input:$input) {
      injection {
        id
        dose
        drugName
        lotNumber
      }
    }
  }
`

export const createInjectionMutation = (
  options?: UseMutationOptions<
    CreateInjectionResult,
    Error,
    CreateInjectionInput,
    MutationKey
  >
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(
    ['create', 'injection'],
    async (injection) =>
      graphqlRequestClient.request(query, { input: { injection } }),
    options
  ) as UseMutationResult<CreateInjectionResult, unknown>
}
