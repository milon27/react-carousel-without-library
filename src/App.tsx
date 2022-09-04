import { useEffect, useRef, useState } from "react"
import { ImageList } from "./slider/ImageList"


export default function App() {
  const [select, setSelect] = useState(0)

  return (
    <div className="grid place-content-center min-h-screen">

      {/* <h1 className="text-4xl text-center">{select}</h1> */}
      {/* <h1 className="text-4xl text-center">{select - 1}</h1> */}


      <div className="ccontainer w-[50%] mx-auto overflow-hidden">

        <div className="clist flex w-full h-96 " >

          {ImageList.map((item, idx) => (
            <img src={item} alt="" className="grow-0 shrink-0 w-full object-cover transition-transform" key={idx}
              style={{
                "transform": select == 5 ? 'translateX(-100%)' : `translateX(${(idx < select - 1) ? (((ImageList.length) - select) * 100) : select * (-100)}%)`,
              }}
            />
          ))}

        </div>

      </div>

      {/* indicator */}

      <div className="flex gap-4 justify-center items-center">
        <button className="border py-2.5 px-5 text-sm text-gray-500" onClick={() => {
          setSelect(old => {
            if (old == 5) {
              return 2
            }
            return old + 1
          })
        }}>prev</button>

        <div className="flex gap-2 justify-center my-5">
          {ImageList.map((item, idx) => (
            <img src={item} alt=""
              className={`w-[100px] cursor-pointer object-cover ${(idx == ((select > 3) ? (select - 4) : select)) ? "border-2 border-black" : ""}`}
              key={idx}
              onClick={() => {
                setSelect(idx)
              }}
            />
          ))}
        </div>

        <button className="border py-2.5 px-5 text-sm text-gray-500" onClick={() => {
          setSelect(old => {
            if (old == 5) {
              return 2
            }
            return old + 1
          })
        }}>next</button>
      </div>


    </div>
  )
}
