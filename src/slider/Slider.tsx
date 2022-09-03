import { useEffect, useState } from "react"
import { ImageList } from "./ImageList"

export default function Slider() {
    const [select, setSelect] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelect(current => current < ImageList.length - 1 ? current + 1 : 0)
        }, 1500)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="ccontainer w-[45vw] mx-auto overflow-hidden">
            <div className="clist whitespace-nowrap " style={{ "transition": "ease 1s" }}>
                {ImageList.map((item, idx) => (
                    <div className="citem inline-block w-full h-full cursor-grab transition-all " key={idx} style={{
                        "transform": `translateX(-${select * 100}%)`
                    }}>
                        <img src={item} alt="" className="object-cover w-full h-[50vh]" />
                    </div>
                ))}
            </div>
        </div>
    )
}
