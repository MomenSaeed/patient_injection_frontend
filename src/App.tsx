import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { BrowserRouter } from 'react-router-dom'
import { queryClient, setupGraphqlClient } from './core/requestClient'
import Routes from './Routes'
import { PatientProvider } from './context/Patient'

function App() {
  setupGraphqlClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PatientProvider>
          <Routes />
        </PatientProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
