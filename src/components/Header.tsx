import { Box, Typography } from '@mui/material'
import React from 'react'

interface HeaderProps {
  title?: string
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title = '', children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: '100%',
        bgcolor: '#FAF0E6',
      }}
    >
      <Box pt={{ xs: '58px', md: '64px' }} sx={{ flex: 1, mb: 6 }}>
        <Typography variant="h2" mt={2} mb={4} textAlign="center">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  )
}

export default Header
