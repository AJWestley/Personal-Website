import { NavBar } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { createProjectCards } from '../../components/generators'
import content from './research.json'
import './research.css'

export function ResearchWork() {
    return (
        <>
        <NavBar/>
        <ResearchContent/>
        <Footer/>
        </>
    )
}

function ResearchContent() {
    let cards = createProjectCards(content.research_cards)

    return (
        <div className="main">
            <h1>{content.title}</h1>

            <ul>{cards}</ul>
        </div>
    )
}

