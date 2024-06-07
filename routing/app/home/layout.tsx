
import { useRouter } from 'next/navigation'
import React from 'react'

function layout({ children, slot1, slot2, slot3 }: {
  children: React.ReactNode, slot1: React.ReactNode, slot2: React.ReactNode, slot3: React.ReactNode
}) {

  return (<>
    <div>
      <div className='text-center mb-5'>layout</div>
      <div className='flex justify-around gap-10'>
        <div className='h-[100px] '>{slot1}</div>
        <div className='h-[100px] '>{slot2}</div>
      </div>
      <div className='h-[500px] '>{slot3}</div>
    </div>
  </>
  )
}

export default layout