"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Products from '../product/page'
function Page({ children }: { children: React.ReactNode }) {
    const [text, setText] = useState("")
    const currentPath =usePathname()
    const pathUrl = [{
        path: "/views",
        title: "Views"
    }, {
        path: "/rating",
        title: "Rating"
    }]
    return (
        <>
            <h1 className='text-[30px]'>Template in which state is not preserved</h1>
            <div><input value={text} onChange={(e) => setText(e.target.value)} /></div>
            <div>
                <ul className='cursor-pointer flex gap-5'>
                    {pathUrl.map((path,idx) => {
                        return <Link key={idx} href={path.path}>
                           <div className={currentPath===path.path?"font-[800]":"font-[100]"}>{path.title}
                            </div> 
                        </Link>
                    })}
                </ul>
            </div>
            <div>{children}</div>
            <Products/>
        </>

    )
}

export default Page