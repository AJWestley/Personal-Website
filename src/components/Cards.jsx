import PropTypes from 'prop-types'

export function ProjectCard({ title, description, image, link }) {
    return (
        <li className="main__container">
            <div className="main__img--container">
                <img src={image} alt="" id="resize" />
            </div>
            <div className="main__content">
                <h1>{title}</h1>

                <p>{description}</p>
                    <a href={link} target="_blank" rel="noreferrer">
                        <button className="main__btn">
                        Take a look
                        </button>
                    </a>
            </div>
        </li>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export function WorkCard({ name, description, image, redirect }) {
    return (
        <li className="work__card">
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
                <a href={redirect}>
                    <button>
                    Take a look
                    </button>
                </a>
        </li>
    )
}

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
}