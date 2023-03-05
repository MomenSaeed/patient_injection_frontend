import { Box } from '@mui/material'
import React from 'react'

interface BaseProps {
  children?: React.ReactNode
}

const Base: React.FC<BaseProps> = ({ children }) => {
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

export default Base
