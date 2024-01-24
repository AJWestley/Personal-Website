import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/Nav"
import { createWorkCards } from "../../components/generators"
import content from './work.json'
import './work.css'

export function WorkMain() {
    return (
        <>
        <NavBar/>
        <WorkMainContent/>
        <Footer/>
        </>
    )
}

function WorkMainContent() {
    let cards = createWorkCards(content.work_cards)
    return (
        <div className="work">
        <h1>{content.title}</h1>
        <ul className="work__container">
            {cards}
        </ul>
    </div>
    )
}