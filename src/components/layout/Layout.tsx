import type { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Layout.css'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__middle">
        <Sidebar />
        <main className="layout__body">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
