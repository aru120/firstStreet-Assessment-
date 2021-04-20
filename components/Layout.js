import Nav from './Nav'
import Footer from './Footer'
import globalStyles from '../styles/global'

export default function Layout({children}){
    return(
    <>
        <Nav />
        {children}
        <Footer />
    <style jsx global>
        {globalStyles}
    </style>
    </>
    )
}