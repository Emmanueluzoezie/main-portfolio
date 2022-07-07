import Head from 'next/head'
import About from '../components/about'
import Footer from '../components/footer'
import Form from '../components/form'
import Main from '../components/main'
import Menu from '../components/menu'
import Skill from '../components/skills'
import Whatsapp from '../components/whatsapp'

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 w-screen relative h-screen hide">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Main />
      <About />
      <Skill />
      <Form />
      <Footer />
      <Whatsapp />
      
    </div>
  )
}


