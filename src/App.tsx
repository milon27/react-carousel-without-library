import { useEffect, useRef, useState } from "react"
import { ImageList } from "./slider/ImageList"


export default function App() {
  const test = false
  const [select, setSelect] = useState(0)

  const prev = () => {
    setSelect(old => {
      if (old == 5) {
        return 2
      }
      return old - 1
    })
  }

  const next = () => {
    setSelect(old => {
      if (old == ImageList.length + 1) {
        return 2
      }
      return old + 1
    })
  }

  return (
    <div className="grid place-content-center min-h-screen">
      {/* <h1 className="text-4xl text-center">{"select=" + select}</h1> */}
      {/* <h1 className="text-4xl text-center">{select - 1}</h1> */}

      <div className={`cContainer  mx-auto ${test ? "w-[15%] border-2 border-red-500" : "w-[50%] overflow-hidden"}`}>

        <div className="clist flex w-full h-96 " >

          {ImageList.map((item, idx) => (
            <img src={item} alt={"id-" + idx} className="grow-0 shrink-0 w-full object-cover transition-transform" key={idx}
              style={{
                "transform": select == (ImageList.length + 1) ?
                  'translateX(-100%)'
                  :
                  `translateX(${(idx < select - 1) ? ((ImageList.length - select) * 100) : select * (-100)}%)`,
              }}
            />
          ))}

        </div>

      </div>
      {/* indicator */}
      <div className="flex gap-4 justify-center items-center">
        <button className="border py-2.5 px-5 text-sm text-gray-500" onClick={prev}>prev</button>
        <div className="flex gap-2 justify-center my-5">
          {ImageList.map((item, idx) => (
            <img src={item} alt=""
              className={`w-[100px] cursor-pointer object-cover ${(idx == ((select > ImageList.length - 1) ? (select - ImageList.length) : select)) ? "border-2 border-black" : ""}`}
              key={idx}
              onClick={() => {
                setSelect(idx)
              }}
            />
          ))}
        </div>
        <button className="border py-2.5 px-5 text-sm text-gray-500" onClick={next}>next</button>
      </div>
    </div>
  )
}
