'use client'
import React, {useState} from 'react';
import { BsBasketFill } from "react-icons/bs";
import Link from "next/link"
import {Separator} from "@/components/ui/separator";

function Page(props) {
  const data = [
    {
      title: "MMS T-Shirt",
      price: 1233
    },{
      title: "MMS T-Shirt",
      price: 1111
    },{
      title: "MMS T-Shirt",
      price: 242
    },{
      title: "MMS T-Shirt",
      price: 242
    },{
      title: "MMS T-Shirt",
      price: 242
    },{
      title: "MMS T-Shirt",
      price: 242
    }
  ]
  let [goods, setGoods] = useState("t-shirt");

  return (
    <div className={`pb-20`}>
      <div className={`flex justify-between align-middle`}>
        <ul className={`flex gap-5 items-center`}>
          <li><Link href={`#`}>T-Shirts</Link></li>
          <li><Link href={`#`}>T-Shirts</Link></li>
          <li><Link href={`#`}>T-Shirts</Link></li>
        </ul>
        <div>
          <Link href={`#`}><BsBasketFill className={`w-8 h-8 hover:scale-125 duration-300 hover:text-red-800`} /></Link>
        </div>
      </div>
      <Separator className={`h-[1px] bg-red-700 my-3`} />
      <div className={`flex gap-5 flex-wrap`}>
        {data.map((el, idx) => {
          return (
            <div className={`w-[280px] h-[300px] flex flex-col  my-5`} key={idx}>
              <p className={`text-center bg-red-700 py-3 px-5`}>{el.title}</p>
              <img src="/debut/pitbul.png" alt="bild" className={`object-cover w-full h-full`}/>
              <div className={`flex justify-between bg-red-700 py-3 px-5`}>
                <p>{el.price}</p>
                <button className={`uppercase`}>add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Page;