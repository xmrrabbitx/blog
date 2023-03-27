
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }:any) {
  return (
    <>
      <Header />
      <main className="main container max-w-full">{children}</main>
      <Footer />
    </>
  )
}