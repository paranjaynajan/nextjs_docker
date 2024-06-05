import { notFound } from 'next/navigation'
import React from 'react'

function Page({params}:{params:{id:string}}) {
  if(Number(params.id)>10){
    return notFound()
  }
  return (
    <div>Review no. {params.id}</div>
  )
}

export default Page