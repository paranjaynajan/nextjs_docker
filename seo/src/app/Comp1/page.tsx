import { Metadata } from 'next'
import React from 'react'
export const generateMetadata = ({title}:{title:string}):Metadata =>{
  return {title:title,description:"prop desx"}
}
function page({title}:{title:string}) {
  return (
    <div>page</div>
  )
}

export default page