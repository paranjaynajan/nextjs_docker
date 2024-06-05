import React from 'react'

function Page({children}:{children:React.ReactNode}) {
  return (
    <>
    <h1 className='text-[70px]'>Heading</h1>
     <div>{children}</div>
    </>
   
  )
}

export default Page