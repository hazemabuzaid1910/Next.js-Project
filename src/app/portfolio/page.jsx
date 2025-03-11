import React from 'react'
import Style from './page.module.css'
import Link from 'next/link'
function Portfolio() {
  return (
    <div className={Style.container}>
      <h1 className={Style.selectTitle}> Choose a gallery</h1>
      <div className={Style.items}>
<Link href="/portfolio/illustrations" className={Style.item}> <span className={Style.title}>Illustrations</span></Link>
<Link href="/portfolio/websites" className={Style.item}><span className={Style.title}>Website</span></Link>
<Link href="/portfolio/applications" className={Style.item}><span className={Style.title}>Application</span></Link>

      </div>
    </div>
  )
}

export default Portfolio
