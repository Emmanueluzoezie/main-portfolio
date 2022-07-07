import Head from 'next/head'
import Menu from "../components/Menu"
import About from "../components/about"
import Footer from "../components/footer"
import Skill from "../components/Skills"
import Whatsapp from '../components/whatsapp'

const Abouts = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 text-white md:h-screen w-screen relative" >
      <Head>
        <title>About jonuel portfolio </title>
        <meta name="description" content="Jonuel portfolio About" />
      </Head>

      <Menu />
      <About />
      <Skill />
      <div className='md:absolute md:bottom-3'>
      <Footer />
      </div>
      <Whatsapp />
    </div>
  )
}

export default Abouts