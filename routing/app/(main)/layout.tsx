"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Page({ children }: { children: React.ReactNode }) {
    const [text, setText] = useState("")
    const currentPath =usePathname()
    const pathUrl = [{
        path: "/about",
        title: "About"
    }, {
        path: "/contact",
        title: "Contact"
    }]
    return (
        <>
            <h1 className='text-[30px]'>Layout in which state is preserved</h1>
            <div> <input value={text} onChange={(e) => setText(e.target.value)} /></div>
            <div>
                <div className='cursor-pointer'>
                    {pathUrl.map((path,idx) => {
                        return <Link key={idx} href={path.path}>
                           <div className={currentPath===path.path?"font-[800]":"font-[100]"}>{path.title}
                            </div> 
                        </Link>
                    })}
                </div>
            </div>
            <div>{children}</div>
        </>
    )
}

export default Page