import { Container } from '@mui/system'
import React from 'react'
import Base from '../../components/Base'
import Header from '../../components/Header'
import PatientData from '../../components/PatientData'
import { PatientContext } from '../../context/Patient'
import Adherence from './Adherence'
import InjectionsList from './InjectionsList'

const Home: React.FC = () => {
  const { currentPatient } = React.useContext(PatientContext)
  return (
    <Base>
      <Header title="Home Page">
        {currentPatient && <PatientData patient={currentPatient} />}
      </Header>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <InjectionsList />
        <Adherence />
      </Container>
    </Base>
  )
}

export default Home
