import React from 'react'
import Image from 'next/image'
import { data } from './imges'
import Link from 'next/link'

function page() {
  
  return (<>
    <div className='text-center'>slot3</div>
    <div className='flex justify-between px-5'>
        {data.map((e,idx)=>{
            return <Link href={`home/${e.id}`} key={idx} className='flex justify-center items-center flex-col gap-2' >
                <div>
                    <Image src={e.img}  alt='img' height={250} width={250} className='aspect-square'/>
                </div>
                <div>{e.title}</div>
                </Link>
        })}
    </div>
  </>
  )
}

export default page