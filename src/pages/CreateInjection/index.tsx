import { Button, Link as MuiLink, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CreateInjectionInput,
  createInjectionMutation,
} from '../../api/injections/createInjection'
import InputContainer from '../../components/InputContainer'

const CreateInjection: React.FC = () => {
  const navigate = useNavigate()
  const [input, setInput] = React.useState<CreateInjectionInput>({
    dose: '0',
    drugName: '',
    lotNumber: '',
  })

  const createInjection = createInjectionMutation({
    onSuccess: (data) => {
      navigate('/')
    },
  })

  return (
    <InputContainer>
      <Typography variant="h5" gutterBottom>
        Create Injection
      </Typography>
      <TextField
        id="create-injection-drug-name-input"
        label="Drug Name"
        value={input.drugName}
        onChange={(e) => setInput({ ...input, drugName: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="create-injection-lot-number-input"
        label="Lot Number"
        value={input.lotNumber}
        onChange={(e) => setInput({ ...input, lotNumber: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="create-injection-drug-name-input"
        label="Dose"
        value={Number(input.dose)}
        onChange={(e) => setInput({ ...input, dose: e.target.value })}
        type="number"
        fullWidth
      />
      <Button
        onClick={() => createInjection.mutate({ ...input })}
        sx={{ mt: 2, mb: 4 }}
        variant="outlined"
      >
        Create Injection
      </Button>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <MuiLink
          underline="hover"
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >
          Home Page
        </MuiLink>
      </Link>
    </InputContainer>
  )
}

export default CreateInjection
