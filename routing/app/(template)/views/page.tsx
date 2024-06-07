"use client";
import React from 'react'


function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function Views() {
  const random = getRandomInt(2);
  console.log(random,"random")
  // if (random === 1) {
    
  //   throw new Error("Error loading view");
  // }
  return (
    <div>Views Component</div>
  )
}

export default Views