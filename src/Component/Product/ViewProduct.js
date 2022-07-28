import React from 'react'
import Nav from '../Nav'
export default function ViewProduct(){
    const item = [
        {
           Name: 'c',
           Desc: '説明'
        },
        {
           Name: 'a',
           Desc: '説明'
        },
        {
           Name: 'b',
           Desc: '説明'
        },
        {
            Name: 'b',
            Desc: '説明'
         },
         {
            Name: 'b',
            Desc: '説明'
         },
         {
            Name: 'b',
            Desc: '説明'
         },
    ]
    const MakeGrid = () => {
        let inp = []
        item.forEach((e) => {
            inp.push(<div key={Math.random()} className="border rounded-md h-[120px] w-[120px] text-center my-auto">
                {e.Name}
                <hr />
                <br/>
                {e.Desc}
            </div>)
        })
        return inp
    }
    return(
        <div className="h-screen">
        <Nav />
        <div className="h-full flex justify-center items-center">
        <div className="w-3/4 grid grid-cols-5 gap-16 ">
        <MakeGrid />
        </div>
        </div>
        </div>
    )
            
}