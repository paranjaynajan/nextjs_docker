import React from 'react'

function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>Page {params.slug.map((e)=>{
return<div> {e}</div>
    })}</div>
  )
}

export default Page