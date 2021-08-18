import React from 'react'
import ReactCountryFlag from 'react-country-flag'
function NewsLetter() {
  return (
    //  NewsLetter parent div
    <div className="relative pr-0 xl:pr-10 lg:pr-10 md:pr-7 xl:mt-20 md:mt-10 mb-2 xl:mb-10 lg:mb-10 md:mb-10 ml-10 overflow-hidden">
      <div className="container relative h-48 w-96 bg-green-300">
        <h1 className="xl:text-xl lg:text-xl xl:text-left font-bold pt-10 ml-5">
          Get 15% off - Join our mailing list
        </h1>
        <p className="ml-5">Be the first to get updates on special offers.</p>
        <p className="ml-5">Product launches and insider exclusives.</p>
        <div className="flex items-center pl-5 px-7  xl:mx-0 justify-between xl:w-80 lg:w-full md:w-full lg:mx-auto w-10/12 border-b border-gray-400 z-10">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-transparent focus:outline-none"
            id="email"
            aria-label="email"
          />
          <div className="cursor-pointer">
            {/* this is the width and hieght of the arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#CBD5E0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* This is for the arrow design in the newsletter sign up */}
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={5} y1={12} x2={19} y2={12} />
              <line x1={15} y1={16} x2={19} y2={12} />
              <line x1={15} y1={8} x2={19} y2={12} />
            </svg>
          </div>
        </div>
      </div>
      {/* adding the currency flag to the footer */}
      <div className="hidden xl:inline-flex xl:flex-row xl:mt-36">
        <p className=" mt-2 text-gray-400">
          Search Curreny here
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="CA"
            style={{
              fontSize: '2em',
              display: 'inline-flex',
              width: '150px',
              marginTop: '10px',
              marginRight: '200px',
              paddingBottom: '15px',
              paddingLeft: '15px',

              position: 'relative',
            }}
            aria-label="Canada"
          />
        </p>
      </div>
    </div>
  )
}

export default NewsLetter
