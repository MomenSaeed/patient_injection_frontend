import React from 'react'
import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Patient } from '../api/patients/types'
import { PatientContext } from '../context/Patient'

interface PatientDataProps {
  patient: Patient
}

const PatientData: React.FC<PatientDataProps> = ({ patient }) => {
  const { logout } = React.useContext(PatientContext)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>Current Patient</Typography>
      <Typography>{`name: ${patient.fullName}`}</Typography>
      <Typography>{`id: ${patient.id}`}</Typography>
      <Typography>{`apiKey: ${patient.apiKey}`}</Typography>
      <Typography>{`created at: ${new Date(
        Date.parse(patient.createdAt)
      ).toLocaleDateString()}`}</Typography>
      <MuiLink
        onClick={logout}
        underline="hover"
        sx={{ fontWeight: 'bold', cursor: 'pointer' }}
      >
        Logout
      </MuiLink>
    </Box>
  )
}

export default PatientData
