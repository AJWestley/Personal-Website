import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import '../../styles/code_game.css'

var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split('');
var shuffled = [...alphabet];
var code = {}

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
                <button className='code__btn'>Encode</button>
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

function generate_code(input_text) {
    shuffle(shuffled);
    let input_array = input_text.toLowerCase().split('');
    for (let i = 0; i < input_array.length; i++) {
        let found = false;
        for (let j = 0; j < alphabet.length; j++) {
            if (input_array[i] === alphabet[j]) {
                found = true;
                break;
            }
        }
        if (!found)
            return `Sorry, ${input_array[i]} is an invalid character!\nPlease use only the digits 0-9 or letters a-z.`
    }

    alphabet.forEach(function (k, i) {
        code[k] = shuffled[i];
    })
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}