import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import '../../styles/home.css'

export function HomePage() {
    return (
        <>
        <NavBar/>
        <HomeContent/>
        <Footer/>
        </>
    )
}

function HomeContent() {
    return (
        <div className="home">
            <div className="home__container">
                
            </div>
        </div>
    )
}