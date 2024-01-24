import '../styles/nav.css'

export function NavBar() {
    const toggleActive = () => {
        document.querySelector('#mobile-menu').classList.toggle('is-active');
        document.querySelector('.navbar__menu').classList.toggle('active');
    }

    return (
        <nav className="navbar">
        <div className="navbar__container">
            <a href="/" id="navbar__logo">AJ Westley</a>
            <div className="navbar__toggle" id="mobile-menu" onClick={()=>{toggleActive()}}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="/" className="navbar__links">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="/about" className="navbar__links">About</a>
                </li>
                <li className="navbar__item">
                    <a href="/work" className="navbar__links">Work</a>
                </li>
                <li className="navbar__item">
                    <a href="mailto:alexanderjwestley@gmail.com?subject=AJ Westley Contact Form" className="navbar__links">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}