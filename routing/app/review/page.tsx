import React from 'react'

async function Review() {
  const result = await new Promise<void>((resolve, reject) => {
    setTimeout(() => {resolve()},3000)
  })
  return (
    <div>Review</div>
  )
}

export default Review