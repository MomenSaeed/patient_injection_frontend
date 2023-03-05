import { Button, Link as MuiLink, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthContainer from '../../components/AuthContainer'
import { PatientContext } from '../../context/Patient'

const Login: React.FC = () => {
  const { setPatientApiKey } = React.useContext(PatientContext)
  const [input, setInput] = React.useState<string | null>(null)
  return (
    <AuthContainer>
      <TextField
        id="login-input-id"
        label="Patient Api Key"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button
        onClick={() => setPatientApiKey(input)}
        sx={{ mt: 2, mb: 7 }}
        variant="outlined"
      >
        Login
      </Button>
      <Link to="/create-patient" style={{ textDecoration: 'none' }}>
        <MuiLink
          underline="hover"
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >
          Create New Patient
        </MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Login
