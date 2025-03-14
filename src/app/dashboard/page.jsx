"use client"
import React from 'react'
import Style from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function Dashboard() {

const session=useSession()
const router=useRouter()

const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data,mutate, error, isLoading } = useSWR(
  `/api/posts?username=${session?.data?.user?.name}`, fetcher)
console.log(data)

if(session.status==="loading"){
  return <p>Loading...</p>
}
if(session.status==="unauthenticated"){
  router?.push("/dashboard/login")
}

const handleDelete= async(id)=>{
  try{
await fetch(`/api/posts/${id}`,{
  method:"DELETE"
})

mutate()
  }
  catch(err){
console.log(err);
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const image = e.target[2].value;
  const content = e.target[3].value;
  const username = session?.data?.user?.name;

  const postData = {
    title,
    desc,
    img: image,  
    content,
    username: session?.data?.user?.name,
  };  console.log("Submitting Post Data:", postData);

  try {
    const response = await fetch("/api/posts", {  
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Failed to create post:", errorData);
      return;
    }

    console.log("✅ Post created successfully!");
    mutate();
  } catch (err) {
    console.error("❌ Error creating post:", err);
  }
};


if(session.status==="authenticated"){
     return <div className={Style.container}>
      <div className={Style.posts}>
        {isLoading?"loading": data?.map(post=>(
        <div className={Style.post} key={post._id}>
       <div className={Style.imgContainer}>
  {post.img ? (
    <Image 
      src={post.img}
      alt="Post Image"
      width={200}
      height={100}
     
    />
  ) : (
    <div>No Image Available</div>  
  )}
</div>
        <h2 className={Style.postTitle}>{post.title}</h2>
        <span className={Style.delete} onClick={()=>handleDelete(post._id)}>X</span>
      </div>
      ))}
      </div>
      <form className={Style.new} onSubmit={handleSubmit}>
       <h1>Add New Post</h1>
       <input type="text" placeholder='Title' className={Style.input}/>
       <input type="text" placeholder='Description' className={Style.input}/>
       <input type="text" placeholder='Image' className={Style.input}/>
       <textarea placeholder='Content' className={Style.textArea} rows="10" cols="30"></textarea>
       <button className={Style.button}>Send</button>
      </form>
     </div>
  }

}

export default Dashboard
