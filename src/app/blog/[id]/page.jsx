import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { items } from '@/app/portfolio/[category]/data';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata({params}) {
  const post=await getData(params.id )
  return{
    title:post.title,
    description:post.desc,
  };
  
}
const pageBlog= async({params}) =>{

  const data= await getData(params.id);

  return (
<div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
             {data.desc}  
          </p>
          <div className={styles.author}>
            <Image
              src="/apps.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        {data.content}     
           </p>
      </div>
    </div>  )
}

export default pageBlog