import '../styles/globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import NewsLetter from './components/newsletter'

function MyApp({ Component, pageProps }) {
  return (
    <div className=" h-screen w-screen xl:overflow-hidden lg:overflow-hidden md:overflow-hidden">
      <Navbar />
      <Component {...pageProps} />
      <div className="min-h-screen min-w-full container flex flex-wrap space-x-12 bg-gray-100 ">
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
