import { BiPackage } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { CgGym } from 'react-icons/cg'

export default function Home() {
  return (
    <div className=" bg-gray-200 max-h-full">
      <main>
        <div className="flex items-center content-center justify-center space-x-24">
          <FiBox className=" block text-9xl my-52"></FiBox>
          hello
          <img className=" inline-flex w-32" src="money-back.png" />
          <CgGym className="text-9xl my-52" />
        </div>
      </main>
    </div>
  )
}
