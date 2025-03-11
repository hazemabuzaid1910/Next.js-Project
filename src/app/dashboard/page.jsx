"use client"
import React, { useEffect, useState } from 'react'
import Style from './page.module.css'
import useSWR from 'swr'


function Dashboard() {

// const [data,setData]=useState([]);
// const [err,setErr]=useState(false);
// const [isLoading,setIsLoading]=useState(false);


// useEffect(()=>{
// const getData=async ()=>{
//   setIsLoading(true)
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
  
//   if (!res.ok) {
// setErr(true) 
//  }
//  const data=await res.json()
//  setData(res.data);
//  setIsLoading(false)
// }
// getData()
// },[])
const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
console.log(data)
  return (
    <div className={Style.container}>
      Dashboard

    </div>
  )
}

export default Dashboard
