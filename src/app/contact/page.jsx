import React from 'react'
import Style from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
function Contact() {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Let's Keep in Touch</h1>
   <div className={Style.content}>
   <div className={Style.imgContainer}>
    <Image 
    src="/contact.png"
    alt=""
    fill={true}
    className={Style.image}
    />
    </div>
    <form  className={Style.formContent}>
      <input type="text" placeholder='name' className={Style.inputs}/>
      <input type="email" placeholder='email' className={Style.inputs}/>
      <textarea cols="30" rows="5" className={Style.textArea} placeholder='message'></textarea>
      <Button text="Send" url="#" />
    </form>
   </div>
    </div>
  )
}

export default Contact
