import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { IoIosCart, IoIosSearch, IoIosArrowDown } from 'react-icons/io'
import { IoPersonOutline } from 'react-icons/io5'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="bg-gray-100">
        <div className="flex justify-between border-b-2 flex-1 px-4 h-auto">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-grey-888 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
            <a className="flex my-6" href="">
              <IoIosSearch
                style={{
                  color: 'grey',
                  alignItems: 'flex-end',
                  fontSize: '25px',
                }}
              />
            </a>
          </div>
          <div div className="hidden md:inline-block mx-auto lg:px-8">
            <ul className=" ml-10 flex items-baseline space-x-4 mx-auto my-4">
              <li>
                <a className=" px-3 py-2 text-sm font-medium" href="">
                  Tights{' '}
                </a>
              </li>
              <li>
                <a className=" px-3 py-2 text-sm font-medium" href="">
                  Stockings{' '}
                </a>
              </li>
              <li>
                <a className=" px-3 py-2 text-sm font-medium" href="">
                  Socks & Accessories{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 font-bold text-center justify-center content-center mx-auto px-auto ">
            <h1 className="text-2xl px-auto my-4">
              <a href="#"> Sheertex </a>
            </h1>
          </div>
          <div className="hidden md:inline-block mx-auto lg:px-8">
            <ul className="ml-10 flex items-baseline space-x-4 mx-auto my-4">
              <li>
                <a className=" px-3 py-2 text-sm font-medium" href="#">
                  Our knit
                </a>
              </li>
              <li>
                <a className=" px-3 py-2 text-sm font-medium" href="#">
                  Our Story
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 my-4 sm:px-16 ">
            <a className="hidden md:block" href="">
              <IoIosSearch
                style={{
                  color: 'grey',
                  alignItems: 'flex-end',
                  fontSize: '25px',
                }}
              />
            </a>
            <a href="#">
              <IoIosCart
                style={{
                  color: 'grey',
                  fontSize: '25px',
                }}
              />
            </a>
            <a className="" href="#">
              <IoPersonOutline
                style={{
                  color: 'grey',
                  fontSize: '25px',
                }}
              />
            </a>
          </div>
          <div className="hidden md:block">
            <a className="flex my-4" href="#">
              EN
              <IoIosArrowDown
                style={{
                  color: '#2874f0',
                  fontSize: '25px',
                }}
              />
            </a>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        ></Transition>
      </nav>
    </div>
  )
}
