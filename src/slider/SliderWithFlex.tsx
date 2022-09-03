import { useEffect, useState } from "react"

const ImageList = [
    "https://i.picsum.photos/id/509/536/354.jpg?hmac=4UQRIwxVyBgVhTw1OLamrqD2MNfqDrk6hJQj1wJ_MGA",
    "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
    "https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60",
    "https://i.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY",
]


export default function SliderWithFlex() {
    const perItem = 1 //100%, 2= 50, 3=33.33%
    const [select, setSelect] = useState(1)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelect(current => (current < ImageList.length - 1) ? current + 1 : 0)
    //         // 5 ta, 4 length
    //         // [0,1,2,3],4
    //         // 0,[1,2,3,4]
    //         // 0,1,[2,3,4,""]
    //         // 
    //     }, 1500)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    return (
        <div className="ccontainer w-[45vw] mx-auto overflow-hidden">
            <div className="clist whitespace-nowrap">
                {ImageList.map((item, idx) => (
                    <div className="citem inline-block cursor-grab transition-transform" key={idx} style={{
                        "transform": `translateX(-${select * 100}%)`,
                        "width": `${100 / perItem}%`//
                    }}>
                        <img src={item} alt="" className="object-cover w-full h-[50vh]" />
                    </div>
                ))}
            </div>
        </div>
    )
}
