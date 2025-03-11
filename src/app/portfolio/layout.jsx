import React from 'react'
import Style from './page.module.css'
function layout({children}) {
  return (
    <div>
        <h1 className={Style.mainTitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default layout