"use client";


function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function page() {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

 
  return (
    <h1>
     comp3
    </h1>
  );
}