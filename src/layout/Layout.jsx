import { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


function Layout() {
    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Fragment>
    )
}

export default Layout;