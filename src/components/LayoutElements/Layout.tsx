import React from 'react'
import Meta from './Meta';

interface Props {
    children: string | JSX.Element | JSX.Element[] | React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <>
      <Meta/>
      <div>
        <main style={{display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'100vh'}}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout