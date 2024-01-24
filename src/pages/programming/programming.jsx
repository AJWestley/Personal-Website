import { createProjectCards } from "../../components/generators"
import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import content from './programming.json'
import '../../styles/programming.css'

export function ProgrammingWork() {
    return (
        <>
        <NavBar/>
        <ProgrammingContent/>
        <Footer/>
        </>
    )
}

function ProgrammingContent() {
    let cards = createProjectCards(content.programming_cards)
    return (
        <div className="main">
            <h1>{content.title}</h1>
            <ul>{cards}</ul>
        </div>
    )
}