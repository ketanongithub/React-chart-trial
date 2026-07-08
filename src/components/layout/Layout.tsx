import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

type LayoutProps = {
  sidebar: ReactNode
  children: ReactNode
}

export default function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__middle">
        {sidebar}
        <main className="layout__body">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
