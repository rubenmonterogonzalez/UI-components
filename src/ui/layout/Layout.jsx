import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Container from '../Container/Container'
import Footer from '../components/Footer/Footer'
import Accordion from '../components/Accordion/Accordion'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Container>
        { children }
      </Container>
      <Footer />
    </div>
  )
}

export default Layout