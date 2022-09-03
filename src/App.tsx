import { useEffect, useRef, useState } from "react"
import { ImageList } from "./slider/ImageList"


export default function App() {
  const [select, setSelect] = useState(0)

  return (
    <div className="grid place-content-center min-h-screen">

      <button onClick={() => {
        setSelect(old => {
          // return old + 1
          if (old < ImageList.length - 1) {
            return old + 1
          } else {
            return 0
          }
        })
      }}>next</button>

      <div className="flex gap-2 justify-center my-5">
        {ImageList.map((item, idx) => (
          <img src={item} alt="" className="w-[100px] object-cover " key={idx} />
        ))}
      </div>

      <div className="ccontainer w-[20%] mx-auto border border-red-500 ">

        <div className="clist flex w-full h-96 " >

          {ImageList.map((item, idx) => (
            <img src={item} alt="" className="grow-0 shrink-0 w-full object-cover transition-transform" key={idx}
              style={{
                "transform": `translateX(${(idx < select) ? (((ImageList.length) - select) * 100) : select * (-100)}%)`,
              }}
            />
          ))}


        </div>

      </div>

    </div>
  )
}
