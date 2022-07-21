import Head from 'next/head'
import Menu from "../components/menu"
import Footer from "../components/footer"
import Project from "../components/project"
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Whatsapp from '../components/whatsapp'

const Projects = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 relative" >
      <Head>
        <title>Jonuel Projects </title>
        <meta name="description" content="Jonuel portfolio About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Project />
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default Projects;