import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import mouthClosed from '/images/me/mouthClosed.png'
import mouthOpen from '/images/me/mouthOpen.png'
import greeting from '/images/me/greeting.png'
import content from './home.json'
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
                <div className="home__img--container">
                    <img src={mouthClosed} alt="MouthClosed" className="img-bottom" id="resize"/>
                    <img src={mouthOpen} alt="MouthOpen" className="img-top" id="resize"/>
                    <img src={greeting} alt="MouthOpen" className="img-text" id="resize"/>
                </div>
                <div className="home__content">
                    <h1>{content.title}</h1>
                    <p>{content.paragraph}</p>
                    <button className="home__btn">
                        <a href="/about">{content.about_btn}</a>
                    </button>
                    <button className="home__btn">
                        <a href="CV/AJWestleyCV.pdf" target="_blank">{content.cv}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}