import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
      <div className={styles.container}>
       @2023 hazem .All rightes reserved.
      <div className={styles.social}>
        <Link href="">
        <Image src="/1.png" alt=""  width={15} height={15}/></Link>
        <Link href="">
        <Image src="/2.png" alt=""  width={15} height={15}/></Link>       <Link href="">
        <Image src="/3.png" alt=""  width={15} height={15}/></Link>       <Link href="">
        <Image src="/4.png" alt=""  width={15} height={15}/></Link>

      </div>

    </div>
  )
}

export default Footer