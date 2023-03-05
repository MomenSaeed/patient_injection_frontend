import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query'
import { graphqlRequestClient } from '../../core/requestClient'
import { AdherenceScore } from './types'

export interface AdherenceInput {
  startDate?: string
  endDate?: string
  treatmentSchedule: number
}

export interface AdherenceResult {
  adherenceScore: AdherenceScore
}

export const queryName = 'adherenceScore'

export const query = `
  query adherenceScore($startDate: String, $endDate: String, $treatmentSchedule: Int!) {
    adherenceScore(startDate: $startDate, endDate: $endDate, treatmentSchedule: $treatmentSchedule) {
      adherenceScore
      expectedInjection
      actualInjection
      onTimeInjection
      injectionsGraph{
        date
        day
        month
        year
        weekDay
        expectedInjection
        hasInjection
      }
    }
  }
`

export const queryAdherence = (
  input: AdherenceInput,
  options?: UseQueryOptions<unknown, unknown, AdherenceResult, string[]>
): UseQueryResult<AdherenceResult, unknown> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ['adherence score'],
    async () => graphqlRequestClient.request(query, { ...input }),
    options
  )
}
