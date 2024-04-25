import React from 'react';

export default function LoadingForm({ friends }) {
  return (
    <>
      <p className='text-start py-2 px-4 font-semiBold text-xl  '>Please add a new friend...</p>
      <div className=" relative border  bg-[#ffe8cc] shadow rounded-xl p-4  w-full mx-auto">
        <div className=" flex space-x-4">
          <div className="rounded-full bg-[#ffffff] h-14 w-14 my-auto">
            <img src="Svgs/undraw_male_avatar_g98d.svg" alt="" />
          </div>
          <div className="flex-1 space-y-5 py-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-[#4b4a49] rounded col-span-2"></div>
              <div className="h-4 bg-[#d8a267] rounded col-span-1 "></div>
            </div>
            <div className="h-4 bg-[#4b4a49] rounded"></div>
          </div>
        </div>
        <div className=' absolute top-[-140px] right-0'>
          <img src="/Svgs/fun-moments.svg" alt="" />
        </div>
      </div>
      <br />
    </>
  );
}
