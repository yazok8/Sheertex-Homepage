import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className=" sticky flex max-w-7xl sm:px-7">
        <div>
          <ul className="flex space-x-8">
            <li>Tights</li>
            <li>Stockings</li>
            <li>Stocks & Accessories</li>
          </ul>
        </div>
        <div className="max-w-9xl mx-auto px-4 sm:px-9">
          <span>Sheertex</span>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>Our knit</li>
            <li>Our Story</li>
          </ul>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
