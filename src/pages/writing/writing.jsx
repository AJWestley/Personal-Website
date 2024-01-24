import { NavBar } from "../../components/Nav"
import { Footer } from "../../components/Footer"
import './writing.css'

export function WritingWork() {
    return (
        <>
        <NavBar/>
        <WritingContent/>
        <Footer/>
        </>
    )
}

function WritingContent() {
    return (
        <div className="main">
      <h1>My less stressful creative writing</h1>

      <h3>A longer piece</h3>
      <div className="ss__container">
        <div className="ss__card">
          <img src="images/writing/leaf.png" alt="" target="_blank"/>
          <h2>Fall</h2>
          <p>
            A short story about being caught up in the magic of falling in love
          </p>
          <button>
            <a href="/writing/Falling Stars.pdf">Read</a>
          </button>
        </div>
      </div>

      <h3>Haikus</h3>
      <div className="poem__container">
        <div className="poem__card" id="haiku">
          <h2>Autumn&apos;s Sunset</h2>
          <p>
            Cool autumn&apos;s sunset <br />
            That glow of amber magic <br />
            Serene bewitchment <br />
          </p>
        </div>

        <div className="poem__card" id="haiku">
          <h2>Melody</h2>
          <p>
            My sweet melody <br />
            Do you know that lovely tune <br />
            You play in my head? <br />
          </p>
        </div>
      </div>

      <h3>Other short poems</h3>
      <div className="poem__container">
        <div className="poem__card" id="perspectiveChange">
          <h2>Perspective</h2>
          <p>
            Quickly <br />
            I fell in love too <br />
            Many times <br />
            My broken heart <br />
            Mending <br />
            Never <br />
            Left alone <br />
            But I was <br />
            Loved by her <br />
            I thought I was <br />
            In paradise <br />
            I was not <br />
            Just a boy <br />
            Her arms around me <br />
            She never had <br />
            To do anything special <br />
            It was hard for her <br />
            Not to enthrall me <br />
            She did all these things <br />
            <br />
            (now read it upwards) <br />
          </p>
        </div>

        <div className="poem__card" id="timeAndSpace">
          <h2>Time and Space</h2>
          <p>
            so i reached up into the cosmos <br />
            digging my fingertips into the most distant galaxies <br />
            and i tried to tear the universe apart <br />
            to rip space-time in two <br />
            because <br />
            i don&apos;t want space <br />
            all i want is time... <br />
            but only Yours <br />
          </p>
        </div>

        <div className="poem__card" id="unrequited">
          <h2>Unrequited</h2>
          <p>
            I wove wistful wishes among the soft highlights of her hair while
            she wasn&apos;t looking... <br />
            Dreamily, her gaze traced along the ceiling, <br />
            I painted her peaceful smile into my soul, but I could never <br />
            Never <br />
            Show it to her. <br />
            (oh but how much I want to) <br />
            I wish I could say that reciprocation is any more than a distant
            stranger, <br />
            That I met fleetingly with another in the rain... <br />
          </p>
        </div>
      </div>

      <h3>Longer poems</h3>
      <div className="poem__container">
        <div className="poem__card" id="innocence">
          <h2>Innocence</h2>
          <p>
            It may seem silly <br />
            but I still watch the raindrops <br />
            as they race each other across the car window <br />
            <br />
            And that... <br />
            <br />
            That is how I remember <br />
            what it feels like to be a young child <br />
            before the world stole away my blissful blindfold <br />
            <br />
            Sometimes I almost forget what it was like <br />
            to search for bunnies in the clounds <br />
            and to paint my imagination into the wind <br />
          </p>
        </div>

        <div className="poem__card" id="anteros">
          <h2>Anteros</h2>
          <p>
            My butterflies are mostly resting now. <br />
            She doesn&apos;t startle them the way she used to... <br />
            I held onto that: <br />
            The way she&apos;d look in my direction and they&apos;d all take flight,
            <br />
            Spinning, fluttering, trembling, <br />
            Twisting my stomach into knots. <br />
            For some reason, I called it magic, <br />
            When Anteros had abandoned me; <br />
            Leaving empty, each beat my heart had skipped. <br />
            And my butterflies settled contentedly into that emptiness... <br />
            They still bat their wings nostalgically when she passes by. <br />
            Sometimes one or two will flitter around for a second, <br />
            Just to remind me that they&apos;re there... <br />
          </p>
        </div>

        <div className="poem__card" id="drawnToYou">
          <h2>Drawn</h2>
          <p>
            I was drawn to you: <br />
            A portrait drawn onto canvas. <br />
            Pieces of me I never knew I was missing <br />
            Sketched in colours I could only dream of feeling. <br />
            Those pencil strokes and hues of madness; <br />
            Vibrant insanity, <br />
            Etched into the fibres of my soul. <br />
            Your fingertips, traced that runaway chill down my spine, <br />
            And coloured it with a warm, wild shade of comfort. <br />
            Splashes of neon <br />
            Set my once sepia-toned world alight with technicolour, <br />
            A light show of love, written in your eyes <br />
            And drawn into mine... <br />
          </p>
        </div>
      </div>

      <h3>Afrikaans poems</h3>
      <div className="poem__container">
        <div className="poem__card" id="nerens">
          <h2>Niks en nerens</h2>
          <p>
            Vanoggend was ek tussen niks en nerens... <br />
            En vanaand bly ek nog daar, <br />
            Maar dis nie dieselfde nie. <br />
            Jy&apos;s die verskil. <br />
            Kom ons bly saam <br />
            Tussen ons niks en nerens... <br />
          </p>
        </div>
        
        <div className="poem__card" id="tussen">
          <h2>Tussen die sterre</h2>
          <p>
            Jy&apos;s die donker tussen die sterre. <br />
            Altyd daar <br />
            Na my sonnigste dae, <br />
            Op my donkerste nagte... <br />
            Onselfsugtig, <br />
            Want die sterre trek al die aandag, <br />
            Maar <br />
            Sonder jou kan hulle nie vonkel nie. <br />
            Sonder jou... <br />
            Die donker tussen my sterre... <br />
          </p>
        </div>
      </div>
    </div>
    )
}