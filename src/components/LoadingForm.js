import React from 'react';

export default function LoadingForm({ friends }) {
  return (
    <>
      <div className="border  bg-[#ffe8cc] shadow rounded-xl p-4  w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-[#4b4a49] h-14 w-14 my-auto"></div>
          <div className="flex-1 space-y-5 py-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-[#4b4a49] rounded col-span-2"></div>
              <div className="h-4 bg-[#d8a267] rounded col-span-1 "></div>
            </div>
            <div className="h-4 bg-[#4b4a49] rounded"></div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
