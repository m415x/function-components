import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Container
      component="article"
      maxWidth="sm"
    >
      <Typography
        variant='h3'
        align='center'
      >Formulario de Registro</Typography>
      <FormSignUp />
    </Container>
  );
}

export default App;
