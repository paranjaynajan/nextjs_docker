"use client"

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter()

 
  return (
    <h1>
      <button type="button" onClick={()=>router.back()} className="focus:outline-none ml-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
     comp3
    </h1>
  );
}