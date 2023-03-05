import { QueryClient } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'

export const graphqlRequestClient = new GraphQLClient(
  'http://localhost:3000/graphql'
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export const setupGraphqlClient = (): void => {
  const patientApiKey = JSON.parse(
    window.localStorage.getItem('patientApiKey') as string
  )
  setClientApiKey(patientApiKey)
}

export const setClientApiKey = (patientApiKey: string): void => {
  graphqlRequestClient.setHeader('Patient-Api-Key', patientApiKey)
}
