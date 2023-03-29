
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }:any) {
  return (
    <>
      <Header />
      <main className="main container min-h-screen">{children}</main>
      <Footer />
    </>
  )
}