import React from 'react'

export default function Footer() {
  return (
    <footer className="flex  flex-col lg:absolute  bottom-0 right-[40%] w-fit mx-auto  text-xs sm:text-lg md:text-xl py-2 px-4">
      <div className="flex justify-center gap-1">
        <p className=" font-medium">
          Source code 
        </p>
        <img src="/Svgs/code.svg" alt="code svg" className="h-[20px] my-auto" />:
        <a className=" text-blue-700 underline underline-offset-2 font-semibold" href="https://github.com/Ehsan-eslami/React-memory-game">GitHub</a>
      </div>
      <div className="flex justify-center gap-1" >
        <p className=" font-medium">
          Written by: 
        </p>
        <a className=" text-blue-700 underline underline-offset-2 font-semibold" href="https://github.com/Ehsan-eslami">@Ehsan-eslami</a>
      </div>
    </footer>
  )
}
