import { useState, useEffect, useRef } from "react";
import { NavBar } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import '../../styles/code_game.css'

var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split('');

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
    const [inputText, setInputText] = useState("");
    const [code, setCode] = useState({});
    const [encodedMessage, setEncodedMessage] = useState("");
    const [formattedCode, setFormattedCode] = useState("");

    const secretCodeRef = useRef(null);
    const encodedMessageRef = useRef(null);

    function handleEncode() {
        let shuffled = [...alphabet]; // Make a fresh copy to shuffle
        shuffle(shuffled);
        
        let newCode = {}; // Create a new mapping
        alphabet.forEach((char, i) => {
            newCode[char] = shuffled[i];
        });

        // Encode the message using the generated code
        let newEncodedMessage = inputText
            .toLowerCase()
            .split('')
            .map(char => newCode[char] || char) // Leave unknown chars unchanged
            .join('');

        // Format the code mapping as a readable list: "a -> b, b -> z, c -> x, ..."
        let newFormattedCode = Object.entries(newCode)
            .map(([key, value]) => `${key} -> ${value}`)
            .join(', ');

        setCode(newCode); // Update code mapping
        setEncodedMessage(newEncodedMessage); // Update encoded message
        setFormattedCode(newFormattedCode); // Update formatted mapping
    }

    useEffect(() => {
        if (secretCodeRef.current) {
            secretCodeRef.current.style.height = "auto"; // Reset height
            secretCodeRef.current.style.height = secretCodeRef.current.scrollHeight + "px"; // Adjust height
        }
        if (encodedMessageRef.current) {
            encodedMessageRef.current.style.height = "auto";
            encodedMessageRef.current.style.height = encodedMessageRef.current.scrollHeight + "px";
        }
    }, [formattedCode, encodedMessage]);

    return (
        <div className="code_game">
            <div className="code_game__container">
                <h1>Code Cracker!</h1>

                <h2>Enter secret message:</h2>
                <textarea 
                    className="code_input__textarea" 
                    rows="4" 
                    cols="50" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                <button className='code__btn' onClick={handleEncode}>Encode</button>

                <h2 id='disappearing'>The secret code:</h2>
                <textarea 
                    id='disappearing' 
                    className="secret_code__textarea" 
                    rows="4" 
                    cols="50"
                    readOnly
                    value={formattedCode}
                />

                <h2 id='disappearing'>The encoded message:</h2>
                <textarea 
                    id='disappearing' 
                    className="encoded_message__textarea" 
                    rows="4" 
                    cols="50"
                    readOnly
                    value={encodedMessage}
                />
            </div>
        </div>
    )
}


function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}