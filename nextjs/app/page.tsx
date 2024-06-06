"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col gap-10 p-24">
    <div className="text-center"> Homepage
      </div> 
     <button onClick={()=>router.push("/comp")} type="button" className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home push</button>
     <button type="button" onClick={()=>router.replace("/comp")} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Home replace</button>
     <button type="button"  onClick={()=>router.forward()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Home froward</button>
    </main>
  );
}
