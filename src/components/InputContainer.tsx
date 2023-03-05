import { Box, Container } from '@mui/material'
import React from 'react'

interface InputContainerProps {
  children?: React.ReactNode
}

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return (
    <Container sx={{ bgcolor: '#FFE4E1', my: 10, height: 300 }} maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          py: 5,
        }}
      >
        {children}
      </Box>
    </Container>
  )
}

export default InputContainer
