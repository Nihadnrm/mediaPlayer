import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
     <Navbar className="bg-secondary ">
        <Container>
          <Navbar.Brand href="#home">
           <i className="fa-solid fa-photo-film"></i>
           {' '}
            Media-player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header