import { BiPackage } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { CgGym } from 'react-icons/cg'

export default function Home() {
  return (
    <div>
      <div className=" bg-gray-200 max-h-screen">
        <main>
          <div className="flex flex-wrap items-center content-center justify-center">
            <div className="block text-center content-center justify-center mt-40 mb-28 mr-36">
              <FiBox className="text-9xl w-64 "></FiBox>
              <h2 className="w-64 flex flex-col justify-center items-center">
                FREE SHIPPING
              </h2>
              <p className="w-64 flex flex-col justify-center items-center pl-3">
                Same day shipping is included on all orders
              </p>
            </div>

            <div className="block text-center content-center justify-center mt-40 mb-28 mr-44">
              <img className="w-32 ml-20" src="money-back.png" />
              <h2 className="flex flex-col justify-center items-center">
                30-DAY GUARANTEE
              </h2>
              <p className="w-64 flex flex-col justify-center items-center">
                {' '}
                Covers any damage that renders your tights unwearable
              </p>
            </div>
            <div className="block text-center content-center justify-center mt-40 mb-28 mr-36">
              <CgGym className="text-9xl w-64" />
              <h2 className="w-64 flex flex-col justify-center items-center">
                STRENGTH TESTED
              </h2>
              <p className="w-64 flex flex-col justify-center items-center">
                Rated 5 stars by thousands of happy customers
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-gray-100 flex max-h-screen">
        <form className=" bg-green-300 text-left justify-start ml-24 my-52">
          <h1>Get 15% off - Join our mailing list</h1>
          <p>Be the first to get updates on special offers.</p>
          <input
            type="email"
            name="txtEmail"
            placeholder="Your Email *"
            value=""
          />
        </form>
        <footer className="my-52 ml-36 flex space-x-40">
          <ul>
            <h3 className=" mb-5">About</h3>
            <li>Our Story</li>
            <li>Our Knit</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
          <ul>
            <h3 className=" mb-5">Shop</h3>
            <li>Home</li>
            <li>Shop All</li>
            <li>Gift Card</li>
            <li>Refer a friend</li>
          </ul>
        </footer>
        <div className="text-left justify-start ml-24 my-52">
          <h2>Contact</h2>
          <p className="w-64 flex">
            Same day shipping is included on all orders
          </p>
        </div>
      </div>
    </div>
  )
}
