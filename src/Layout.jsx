
import Navbar from './Navbar/Navbar'
import Footer from './Navbar/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;