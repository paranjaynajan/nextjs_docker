import React from 'react'
import { data } from '../imges'
import Image from 'next/image'
function page({params}:{params:{imgId:string}}) {
    const imgObj = data.filter(img => img.id==parseInt(params.imgId))

  return (
    <div className=''>
        <h1 className='text-center'>Main image page</h1>
        <div className='flex justify-center flex-col items-center'>
            <Image src={imgObj[0].img} height={400} width={400} alt='sd'   />
            <div>
                {imgObj[0].title}
                </div>
        </div>
    </div>
  )
}

export default page