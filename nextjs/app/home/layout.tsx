import React from 'react'

function layout({children,slot1,slot2}:{
    children:React.ReactNode,slot1:React.ReactNode,slot2:React.ReactNode
}) {
  return (<>
  <div>
    <div>layout</div>
<div className='flex gap-10'>
    <div className='h-[500px] '>{slot1}</div>
    <div className='h-[500px] '>{slot2}</div>
</div>
  </div>
  </>
  )
}

export default layout