import React from 'react'
import Style from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData=(cat)=>{
  const data=items[cat]
  if(data){
    return data
  }
  return notFound()
}
function Category({params}) {
  const data=getData(params.category)
  return (
    <div className={Style.container}>
     <h1 className={Style.catTitle}>{params.category}</h1> 
     {data.map((item)=>(
   <div className={Style.item} key={item.id}>
    <div className={Style.content}>
      <h1 className={Style.title}>{item.title}</h1>
      <p className={Style.desc}>{item.desc}</p>
      <Button url="#" text="See More"/>
    </div>
    <div className={Style.imgContainer}>
      <Image fill={true} src={item.image}   alt=''/>
    </div>

   </div>))}

    </div>
  )
}

export default Category
