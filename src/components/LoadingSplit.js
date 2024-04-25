import React from 'react'

export default function LoadingSplit() {
  return (
    <>
      
      <div className="border  bg-[#ffe8cc] shadow rounded-xl p-4 h-[350px] w-full mt-8 mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-8 my-10 mx-24 bg-[#4b4a49] rounded"></div>
            <div className="grid grid-cols-3 px-10 gap-4">
              <div className="h-5 my-auto bg-[#4b4a49] rounded col-span-1"></div>
              <div className="h-14 bg-[#c3c5c5] rounded col-span-1 col-start-3 "></div>
            </div>
            <div className="grid grid-cols-3 px-10 gap-4">
              <div className="h-5 my-auto bg-[#4b4a49] rounded col-span-1"></div>
              <div className="h-14 bg-[#c3c5c5] rounded col-span-1 col-start-3 "></div>
            </div>
            <div className="grid grid-cols-3 px-10 gap-4">
              <div className="h-5 my-auto bg-[#4b4a49] rounded col-span-1"></div>
              <div className="h-14 bg-[#c3c5c5] rounded col-span-1 col-start-3 "></div>
            </div>
            <div className="grid grid-cols-3 px-10 gap-4">
              <div className="h-5 my-auto bg-[#4b4a49] rounded col-span-1"></div>
              <div className="h-14 bg-[#c3c5c5] rounded col-span-1 col-start-3 "></div>
            </div>
            <div className="grid grid-cols-3 px-10 gap-4">
              <div className="h-14 bg-[#c3c5c5] rounded col-span-1 col-start-3 "></div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
