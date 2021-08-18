function Footer() {
  return (
    <div className="flex flex-wrap xl:py-32 lg:py-40 md:py-20 max-h-full">
      <div className="flex justify-between space-x-40 mb-5 xl:mb-10 lg:mb-10 md:mb-10">
        <ul>
          <h3 className="mb-5">About</h3>
          <li>Our Story</li>
          <li>Our Knit</li>
          <li>Reviews</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
        <ul>
          <h3 className="mb-5">Shop</h3>
          <li>Home</li>
          <li>Shop All</li>
          <li>Gift Card</li>
          <li>Refer a friend</li>
        </ul>
      </div>
      <div className="xl:ml-40 lg:ml-24">
        <h2>Contact</h2>
        <p className="w-64 flex">
          7471 Avenue Leonard-De Vinci, Montreal, QC H2A 2P3
        </p>
        <br></br>
        <p className="w-64 flex">1 800-715-1658</p>

        <div className="relative text-right pt-16 bottom-0 xl:absolute xl:p-4">
          <p className=" text-xs lg:text-sm leading-none text-gray-900">
            &#169; 2021 Sheertex All Rights Reserved. &nbsp; &nbsp;
            <a className="flex-wrap underline" href="#">
              Privacy
            </a>
            &nbsp; &nbsp;
            <a className="flex-wrap underline" href="#">
              Terms
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
