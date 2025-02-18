import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import '../../styles/code_game.css'

export function GamePage() {
    return (
        <>
        <NavBar/>
        <Game/>
        <Footer/>
        </>
    )
}

function Game() {
    return (
        <div className="code_game">
            <div className="code_game__container">
                <h1>Code Cracker!</h1>
                <h2>Enter secret message:</h2>
                <textarea className="code_input__textarea" rows="4" cols="50">
                </textarea>
                <h2 id='disappearing'>The secret code:</h2>
                <textarea id='disappearing' className="secret_code__textarea" rows="4" cols="50">
                </textarea>
                <h2 id='disappearing'>The encoded message:</h2>
                <textarea id='disappearing' className="encoded_message__textarea" rows="4" cols="50">
                </textarea>
            </div>
        </div>
    )
}