import { lazy, Suspense } from "react";
import Intercom from '@intercom/messenger-js-sdk';
import Navbar from "./Navbar"
import Loader from "../components/Loader";

const Footer = lazy(() => import("./Footer"))
const AlertModal = lazy(() => import("../components/AlertModal"))

const Layout = ({ children }) => {
  Intercom({
    app_id: 'lxc0z3sn',
  });

  return (
    <>
      <Navbar />
      <main className="scroll-smooth">{children}</main>
      <Suspense fallback={<div className="main_width"><Loader /></div>}>
        <Footer />
        <AlertModal />
      </Suspense>
    </>
  )
}

export default Layout
