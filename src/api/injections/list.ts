import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  UseInfiniteQueryOptions,
  InfiniteData,
} from '@tanstack/react-query'
import { graphqlRequestClient } from '../../utils/requestClient'
import { Injection } from './types'

export interface InjectionsListInput {
  first: number
  after?: string
}

export interface InjectionsListResult {
  injectionsConnection: {
    nodes: Injection[]
    pageInfo: {
      endCursor: string
      startCursor: string
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    totalCount: number
    count: number
  }
}
export const queryName = 'injectionsList'

export const query = `
query injectionsList($first: Int, $after: String) {
	injectionsConnection(first: $first, after: $after) {
		nodes {
			id
			dose
			drugName
			lotNumber
      createdAt
		}
		pageInfo {
			endCursor
			startCursor
			hasNextPage
			hasPreviousPage
			startCursor
		}
		totalCount
		count
	}
}
`

export const queryInjectionsList = (
  options?: UseInfiniteQueryOptions<
    unknown,
    unknown,
    InjectionsListResult,
    unknown,
    string[]
  >
): UseInfiniteQueryResult<InjectionsListResult, unknown> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useInfiniteQuery(
    ['injections', 'list'],
    async ({ pageParam = undefined }) =>
      graphqlRequestClient.request(query, { first: 5, after: pageParam }),
    {
      getNextPageParam: (page) => {
        const lastPage = page as InjectionsListResult
        const pageInfo = lastPage.injectionsConnection.pageInfo
        if (pageInfo.hasNextPage) return pageInfo.endCursor
        return undefined
      },
      select: (data: InfiniteData<any>) => ({
        ...data,
        totalCount: data?.pages[0].injectionsConnection.totalCount,
      }),
      ...options,
    }
  )
}
