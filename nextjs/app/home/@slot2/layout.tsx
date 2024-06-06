"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'


function page({children}:{children:React.ReactNode}) {
    const currentPath = usePathname()
    const pathUrl = [{
        path: "/home/X",
        title: "X Route"
    }, {
        path: "/home/Y",
        title: "Y Route"
    }]
    return (<>
    
        <div>
            slot2
            <div>
                <div className='cursor-pointer'>
                    {pathUrl.map((path, idx) => {
                        return <Link key={idx} href={path.path}>
                            <div className={currentPath === path.path ? "font-[800]" : "font-[100]"}>{path.title}
                            </div>
                        </Link>
                    })}
                </div>
            </div>
            <div>{children}</div>
        </div>
    </>
    )
}

export default page