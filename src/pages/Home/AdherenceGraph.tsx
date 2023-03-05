import { Box } from '@mui/material'
import React from 'react'

interface AdherenceGraphProps {
  children?: React.ReactNode
}

const AdherenceGraph: React.FC<AdherenceGraphProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ flex: 1, mb: 6 }}>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}

export default AdherenceGraph
