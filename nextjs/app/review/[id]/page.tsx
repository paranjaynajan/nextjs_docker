import React from 'react'

function Page({params}:{params:{id:string}}) {
  return (
    <div>Review no. {params.id}</div>
  )
}

export default Page