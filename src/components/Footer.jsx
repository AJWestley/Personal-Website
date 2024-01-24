import './footer.css'

export function Footer() {
    return (
        <div className="footer__container">
            <div className="social__media">
                <div className="social__media--wrap">
                    <div className="social__icons">
                        <a href="https://www.facebook.com/profile.php?id=100009361455479&mibextid=LQQJ4d" className="social__icon--link" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/ajwestley88/" className="social__icon--link" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/AJWestley" className="social__icon--link" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aj-westley-94b205258/" className="social__icon--link" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}