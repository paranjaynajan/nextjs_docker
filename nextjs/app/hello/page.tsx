import React, { Suspense } from 'react'
import Comp1 from "../../app/hello/comp1/page"
import Comp2 from "../../app/hello/comp2/page"
import Loader from '@/components/loader/loader'
function page() {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px] h-[700px]'>
       <Suspense fallback={<Loader/>}>
       <Comp1 />
        </Suspense> 
      </div>
      <div className='w-[500px] h-[700px]'>
        <Comp2 />
      </div>
    </div>
  )
}

export default page