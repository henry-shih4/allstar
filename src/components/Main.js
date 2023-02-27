export default function Main() {
  return (
    <>
      <div className="flex justify-center items-center pb-4 bg-[#C9082A] text-white">
        <div className="w-[90%] flex justify-center items-center flex-col md:flex-row">
          <div className="flex justify-center items-center mt-4 w-[50%]">
            <div className="">
              <img
                alt="main"
                src="/images/main.png"
                className="min-w-[320px]"
              />
            </div>
          </div>
          <div className="w-[50%] h-max flex justify-center items-center mt-4 bg">
            <div className="space-y-3">
              <div className="flex justify-center items-center">
                <h1 className="font-PT-sans tracking-wider text-md font-bold text-center p-2 md:text-xl mb-4">
                  The NBA All-Star Game is a thrilling annual event that brings
                  together the best basketball players in the world!
                </h1>
              </div>
              <div className="flex justify-center items-center space-x-6 text-sm">
                <button class="w-[120px] h-[40px]  text-gray-900 rounded-lg group bg-gradient-to-br p-[2px] from-[#17408b] to-[#7dbff8] hover:text-white ">
                  <div class="bg-white rounded-lg h-full flex justify-center items-center group-hover:bg-opacity-0">
                    Watch Now
                  </div>
                </button>
                <button class="w-[120px] h-[40px]  text-gray-900 rounded-lg group bg-gradient-to-br p-[2px] from-[#17408b] to-[#7dbff8] hover:text-white">
                  <div class="bg-white rounded-lg h-full flex justify-center items-center group-hover:bg-opacity-0">
                    Buy Tickets
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
