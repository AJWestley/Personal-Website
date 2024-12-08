import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/Nav";
import '../../styles/about.css'

export function About() {
    return (
        <>
        <NavBar/>
        <AboutContent/>
        <Footer/>
        </>
    )
}

function AboutContent() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        document.querySelectorAll(".accordion").forEach((accordion) => {
            accordion.onclick = function () {
                this.classList.toggle("is-open");

                let content = this.nextElementSibling;
                console.log(content);

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = "none";
                    console.log(content.style.maxHeight);
                }
                setLoaded(true);
            };
        });
    }, [loaded])

    return (
            <div className="main">
            <div className="container">
                <h1>So you want to know more???</h1>
            
                <button className="accordion">Overview</button>
                <div className="accordion-content">
                    <p>
                        At my core, I am passionate about machine learning and AI, physics (mostly astronomy), writing, and music. 
                        I have aspirations to get a masters degree in Artificial Intelligence, then hopefully go further and study a PhD.
                        The part of university I enjoyed the most was my final-year research project, so academia feels like the right place for me.
                        <br/>
                    </p>
                </div>
            
                <button className="accordion">Education</button>
                <div className="accordion-content">
                    <p>
                        In 2020 (spooky year), I matriculated from Maritzburg College with an NSC Bachelor&apos;s Pass. 
                        After that, I enrolled at Stellenbosch University for BSc Computer Science. 
                        I graduated my Computer Science Honours with Cum Laude, and my final year research project won first place at the Undergraduate Research Conference.
                        Aside from that, I also have a Grade 6 in Music Theory from UNISA and a Grade 6 in Trumpet Performance from Trinity College London.
                        <br/>
                    </p>
                </div>

                <button className="accordion">Hobbies & Such</button>
                <div className="accordion-content">
                    <p>
                        Let&apos;s start with the &quot;and such&quot; part. <br/>
                        In high school, I did my fair share of extra-curriculars. I was never the sporty type, but I was very involved in the cultural scene.
                        I was in my high school choir and chamber choir, and I played the trumpet in our jazz band. I was also a part of the KZN Midlands Youth Choir 
                        for two years. I was both captain of my high school choir and head boy of the Midlands Youth Choir. <br/>
                        I was regularly a part of school stage productions (sometimes in the band, sometimes on stage). The only non-music 
                        extra-curricular I did was esports (yes, I was and still am a gaming nerd). <br/>
                        <br/>
                        During my first three years of uni, I was part of the Stellenbosch University Choir
                        (<a href="https://www.youtube.com/@StellenboschUniversityChoir" target="_blank" rel="noreferrer">obligatory marketing</a>) and the concerts and weekly practices  
                        kept me busy when I wasn't doing work. <br/>
                        <br/>
                        As far as hobbies go, 
                        I enjoy artsy things such as poetry, creative writing, playing guitar (I&apos;m not very good) and singing. 
                        I like to give myself little programming projects when I have the time and want to feel productive. 
                        I keep a telescope with me at uni and like to go star-gazing when the weather permits.
                        I also still play video games, but I find it difficult to make time for them while I&apos;m at uni so I usually keep that for the holidays.
                    </p>
                </div>

                <button className="accordion">Random Stuff</button>
                <div className="accordion-content">
                    <ul className="list">
                        <li>
                            1. I love love LOVE space! I keep up to date with most of the latest astronomy news and it&apos;s a dream of mine to be an astronaut one day.
                        </li>
                        <li>
                            2. I could listen to The 1975 all day, every day. It&apos;s totally not a problem.
                        </li>
                        <li>
                            3. I have a bent pinky-finger. Sometimes I like to hold it straight then pretend to bend it as a fun party trick.
                        </li>
                        <li>
                            4. I don&apos;t have any allergies.      ...that I know of...
                        </li>
                        <li>
                            5. My family&apos;s nickname for me is &quot;Badger&quot;, and so I have a Badger tattoo on my arm. (it&apos;s not a Hufflepuff tattoo!)
                        </li>
                        <li>
                            6. I&apos;m an ENFP! <a href="https://www.16personalities.com/enfp-careers" target="_blank" rel="noreferrer">The opening sentence here describes me so perfectly it&apos;s scary.</a>
                        </li>
                        <li>
                            7. I tell a few too many dad jokes for someone who isn&apos;t a dad.
                        </li>
                        <li>
                            8. I&apos;ve met (and sang for) Prince Harry.
                        </li>
                        <li>
                            9. I have an irrational fear of moths (as well as other creepy crawlies that are large enough).
                        </li>
                        <li>
                            10. I feature on 3 YouTube videos with more than a million views. (basically a celebrity)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}