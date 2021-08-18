import { FiBox } from 'react-icons/fi'
import { CgGym } from 'react-icons/cg'

export default function Home() {
  return (
    <div>
      <div className=" bg-gray-200 ">
        <main>
          {/* responsive tailwind */}
          <div className="flex flex-wrap xl:items-center xl:content-center xl:justify-center lg:items-center lg:content-center lg:justify-center md:items-center md:content-center md:justify-center sm:items-center sm:content-center sm:justify-center">
            <div className="block mt-10 xl:mt-40 lg:mt-30 md:mt-20 mb-5 xl:mb-10 lg:mb-40 md:mb-30 mr-36">
              <FiBox className=" text-9xl w-96 xl:w-64 lg:w-64 md:w-64"></FiBox>
              <h2 className="w-96 xl:w-64 lg:w-64 md:w-64 flex flex-col justify-center items-center">
                FREE SHIPPING
              </h2>
              <p className="w-96 xl:w-64 lg:w-64 md:w-64 flex flex-col text-center justify-center items-center pl-3">
                Same day shipping is included on all orders
              </p>
            </div>
            {/* Couldn't find similar icon to the one you are using */}
            <div className="block text-center content-center justify-center mt-5 xl:mt-40 lg:mt-30 md:mt-20 mb-5 xl:mb-10 lg:mb-40 md:mb-30 mr-44">
              <img
                className="w-32 ml-32 xl:ml-20 lg:ml-20 md:ml-20"
                src="money-back.png"
              />
              <h2 className=" w-96 xl:w-64 lg:w-64 md:w-64  flex flex-col justify-center items-center">
                30-DAY GUARANTEE
              </h2>
              <p className="w-96 xl:w-64 lg:w-64 md:w-64  flex flex-col justify-center items-center pl-5">
                Covers any damage that renders your tights unwearable
              </p>
            </div>
            <div className="block text-center content-center justify-center mt-5 xl:mt-40 lg:mt-30 md:mt-20 mb-5 xl:mb-10 lg:mb-40 md:mb-30 mr-36">
              <CgGym className="text-9xl w-96 xl:w-64 lg:w-64 md:w-64" />
              <h2 className="w-96 xl:w-64 lg:w-64 md:w-64 flex flex-col justify-center items-center">
                STRENGTH TESTED
              </h2>
              <p className="w-96 xl:w-64 lg:w-64 md:w-64 flex flex-col justify-center items-center">
                Rated 5 stars by thousands of happy customers
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
