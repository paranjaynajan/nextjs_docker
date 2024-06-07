import React, { Suspense } from 'react'
import Comp1 from "./comp1/page"
import Comp2 from "./comp2/page"
import Comp3 from "./comp3/page"
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
      <div className='w-[500px] h-[700px]'>
        <Comp3 />
      </div>
    </div>
  )
}

export default page