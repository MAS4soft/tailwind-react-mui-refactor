
const Hero = () => {
  return (
  <div className="flex flex-col border-b-2 border-b-gray-800 py-4">
    <div className="py-8">
      <h1 className="text-3xl font-bold text-yellow-500">Build Your Dream</h1>
      <h2 className=" py-2 text-6xl font-bold">Vision Got Larger</h2>
    </div>
      <p className="w-8/12" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </p>
      <div className="flex space-x-10 gap-8 py-12" >
      <a href="#" className=" bg-transparent hover:bg-yellow-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded">
          OUR SERVICES </a>
      <a href="#" className="bg-transparent hover:bg-yellow-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded">
          CONTACT US  </a>

      </div>
      
  </div>
  )
};

export default Hero;
