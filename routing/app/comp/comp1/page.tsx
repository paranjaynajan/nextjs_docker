import React from 'react'

async function Comp1() {
    const result = await new Promise<void>((res,rej)=>{
        setTimeout(()=>{res()},3000)
    })
  return (
    <div>Comp1</div>
  )
}

export default Comp1