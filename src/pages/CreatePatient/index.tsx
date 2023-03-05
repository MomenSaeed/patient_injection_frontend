import { Button, Link as MuiLink, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createPatientMutation } from '../../api/patients/createPatient'
import AuthContainer from '../../components/AuthContainer'
import { PatientContext } from '../../context/Patient'

const CreatePatient: React.FC = () => {
  const navigate = useNavigate()
  const { setCurrentPatient, setPatientApiKey } =
    React.useContext(PatientContext)
  const [input, setInput] = React.useState<string | null>(null)

  const createPatient = createPatientMutation({
    onSuccess: (data) => {
      setPatientApiKey(data.createPatient.patient.apiKey)
      setCurrentPatient(data.createPatient.patient)
      navigate('/')
    },
  })

  return (
    <AuthContainer>
      <TextField
        id="create-patient-input-id"
        label="Patient Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button
        onClick={() => createPatient.mutate({ fullName: input })}
        sx={{ mt: 2, mb: 7 }}
        variant="outlined"
      >
        Create Patient
      </Button>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <MuiLink
          underline="hover"
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >
          Login Page
        </MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default CreatePatient
