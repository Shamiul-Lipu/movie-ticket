
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      {/* Outlet section for all component */}
      <Container className='py-5'>
        <Outlet></Outlet>
      </Container>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
